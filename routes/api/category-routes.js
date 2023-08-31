const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
  .then((categoryData) => res.json(categoryData))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
    where: {
      id: req.params.id
    }
  })
  .then((categoryData) => res.json(categoryData))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      console.log(newCategory);
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
  await Category.update({ category_name: req.body.category_name}, {
    where: {
      id: req.params.id
    }
  })
  await res.json("updated sucsessfully")
  }
  catch (err){
    res.json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() =>{
    res.json("deleted sucsessfully")
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
