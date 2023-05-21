const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true,},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Item = sequelize.define('item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  sizes: {type: DataTypes.STRING,  allowNull: true},
  info: {type: DataTypes.STRING,  allowNull: true},

})

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

Brand.hasMany(Item)
Item.belongsTo(Brand)

module.exports = {
  User,
  Item,
  Brand,
}
