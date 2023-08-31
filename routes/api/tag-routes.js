const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
  const allTag = await Tag.findAll({include: [Product] })
  res.json(allTag);
}
catch(err){res.json(err)}
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {const oneTag = await Tag.findAll({
    include: [Product],
    where: {
      id: req.params.id
    }
  })
  res.json(oneTag)}
  catch(err){res.json(err)}
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
 const newTag = await Tag.create({
    tag_name: req.body.tag_name
  })
  await res.json(newTag)}
  catch(err){res.json(err)}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const upTag = await Tag.update({ tag_name: req.body.tag_name}, {
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

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
  await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json("deleted sucsessfully")
}
  catch(err){res.json(err)}
});

module.exports = router;
