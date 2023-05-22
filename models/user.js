'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review, {
        foreignKey: "userId",
        as: "user_review",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      // User.belongsToMany(models.Review, {
      //   as: "",
      //   // through:models.Games,
      //   foreignKey: "id"
      // })
    }
  }
  User.init(
    {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, 
    {
    sequelize,
    modelName: 'User',
    tableName: 'users'
    }
  );
  return User;
};