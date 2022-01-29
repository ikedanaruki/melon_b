import * as me from "melonjs/dist/melonjs.module.js";
//import { Entity, game } from "melonjs/dist/melonjs.module.js";

class PlayerEntity extends me.Entity {
  /**
   * constructor
   */
  constructor(x, y, settings) {
    var img = { width: 100, height: 100 };
    super(
      //me.game.viewport.width / 2 - img.width / 2,
      //me.game.viewport.height - img.height - 20,
      200,
      200,
      {
        image: me.loader.getImage("bear"),
        width: img.width,
        height: img.height
      }
    );
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
