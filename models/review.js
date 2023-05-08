'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user_review',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Review.belongsTo(models.Listing, {
        foreignKey: 'listingId',
        as: 'listing_review',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init(
    {
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    listingId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'listings',
        key: 'id'
      }
    },
    review: DataTypes.STRING
  }, 
    {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews'
    }
  );
  return Review;
};