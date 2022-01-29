import * as me from "melonjs/dist/melonjs.module.js";
//import { Entity, game } from "melonjs/dist/melonjs.module.js";

class PlayerEntity extends me.Entity {
  /**
   * constructor
   */
  constructor(x, y, settings) {
    var img = { width: 750, height: 192 };
    super(
      //me.game.viewport.width / 2 - img.width / 2,
      //me.game.viewport.height - img.height - 20,
      x,
      y,
      {
        image: me.loader.getImage("bear"),
        width: img.width,
        height: img.height,
        flamewidth: 150,
        flameheight: 192
      }
    );
    this.body.ignoreGravity = true;
    this.renderable.addAnimation("stand", [2]);
    this.renderable.setCurrentAnimation("stand");
    //this.renderable.flamewidth = 150;
    //this.renderable.flameheight = 192;
    //this.renderable.offset.set(0, 0);
    this.renderable.anchorPoint = new me.Vector2d(0, 0);
  }

  /**
   * update the entity
   */
  update(dt) {
    // change body force based on inputs
    //....
    // call the parent method
    return super.update(dt);
  }

  /**
   * colision handler
   * (called when colliding with other objects)
   */
  onCollision(response, other) {
    // Make all other objects solid
    return true;
  }
}

export default PlayerEntity;
