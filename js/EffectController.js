import Effect from "./Effect.js";
export default class EffectController {
    effects = [];
    delay = 0;
    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(player){
        // console.log(player)
        if(this.delay <=0){
            this.effects.push(new Effect(player.position.x + player.currentCropWidth-35,player.position.y+60,5))
            this.delay = 10
        }
        this.delay--;
    }
    draw(ctx){
        this.effects.forEach((bullet) => {
            if(this.isBulletOffScreen(effect)){
                let index = this.effects.indexOf(this.effect);
                this.effects.splice(index,1)
            }
            bullet.draw(ctx);
        })
    }

    isBulletOffScreen(effect){
        return effect.x >= this.canvas.width
    }
}