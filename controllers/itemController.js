const uuid = require('uuid')
const path = require("path");
const {Item} = require("../models/models");
const ApiError = require('../error/ApiError')

class ItemController {
  async create(req, res, next) {
    try {
      let {name, price, brandId, sizes, info} = req.body;
      const {img} = req.files;
      let fileName = uuid.v4() + ".jpg"
      await img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const item = await Item.create({name, price, brandId, sizes, img: fileName, info})

      return res.json(item)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId} = req.query
    let items;

    if (brandId) {
      items = await Item.findAll({where: {brandId}});
    } else items = await Item.findAll();

    return res.json(items)
  }

  async getItem(req, res) {
    const {id} = req.params
    const device = await Item.findOne(
      {
        where: {id},
      }
    )
    return res.json(device)
  }
}

module.exports = new ItemController()
