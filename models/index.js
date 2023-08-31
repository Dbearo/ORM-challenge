// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  allownull: false
})
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: "category_id"
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // Specify the join table model
  foreignKey: "product_id", // This should be the foreign key in ProductTag referencing Product
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // Specify the join table model
  foreignKey: "tag_id", // This should be the foreign key in ProductTag referencing Tag
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
