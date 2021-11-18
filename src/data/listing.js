const listingModel = (sequelize, DataTypes) =>
  sequelize.define("listing", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condition: {
      type: DataTypes.ENUM("new", "excellent", "good", "fair", "junk"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    obo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    barter: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = listingModel;
