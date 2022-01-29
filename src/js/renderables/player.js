import { Entity, game} from "melonjs/dist/melonjs.module.js";

class PlayerEntity extends Entity {
  /**
   * constructor
   */
  constructor(x, y, settings) {
    // call the parent constructor
    super(x, y, settings);
    var img = { width: 33, height: 33 };
    super(x, y, [
    game.viewport.width / 2 - img.width / 2,
    game.viewport.height - img.height - 20,
    { image: game.me.loader.getImage("bear") }
    ]);
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
