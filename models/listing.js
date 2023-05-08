'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {
    static associate(models) {
      Listing.hasMany(models.Review, {
        foreignKey: 'listingId',
        as: 'listing_review',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Listing.init(
    {
    title: DataTypes.STRING,
    rating: DataTypes.STRING,
    image: DataTypes.STRING(1000),
    description: DataTypes.STRING(1000),
    year: DataTypes.INTEGER
  }, 
    {
    sequelize,
    modelName: 'Listing',
    tableName: 'listings'
    }
  );
  return Listing;
};