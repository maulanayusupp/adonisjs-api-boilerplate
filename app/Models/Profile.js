'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Profile extends Model {
  static boot () {
    super.boot();

    this.addTrait('@provider:Lucid/SoftDeletes');
  }
  
  // relationships
  user () {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Profile;
