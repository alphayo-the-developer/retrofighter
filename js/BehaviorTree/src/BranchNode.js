// import { RUNNING } from './constants.js'
// import Node from './Node.js'

var BranchNode = class  extends Node {
  nodeType = 'BranchNode'

  constructor(blueprint) {
    super(blueprint)

    this.numNodes = blueprint.nodes.length
    this.wasRunning = false
  }

  run(blackboard = null, { indexes = [], introspector, rerun, registryLookUp = (x) => x } = {}) {
    if (!rerun) this.blueprint.start(blackboard)
    let overallResult = this.START_CASE
    let currentIndex = indexes.shift() || 0
    while (currentIndex < this.numNodes) {
      const node = registryLookUp(this.blueprint.nodes[currentIndex])
      const result = node.run(blackboard, { indexes, introspector, rerun, registryLookUp })
      if (result === RUNNING) {
        this.wasRunning = true
        overallResult = [currentIndex, ...indexes]
        break
      } else if (typeof result === 'object') {
        // array
        overallResult = [...indexes, currentIndex, ...result]
        break
      } else if (result === this.OPT_OUT_CASE) {
        overallResult = result
        break
      } else {
        this.wasRunning = false
        rerun = false
        ++currentIndex
      }
    }
    const isRunning = overallResult === RUNNING || typeof overallResult === 'object'
    if (!isRunning) {
      this.blueprint.end(blackboard)
    }
    if (introspector) {
      const debugResult = isRunning ? RUNNING : overallResult
      introspector.wrapLast(Math.min(currentIndex + 1, this.numNodes), this, debugResult, blackboard)
    }
    return overallResult
  }
}
