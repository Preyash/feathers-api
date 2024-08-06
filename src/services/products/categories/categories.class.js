import { KnexService } from '@feathersjs/knex'

export class CategoriesService extends KnexService {
  constructor(options) {
    if (!options) {
      throw new Error('Options must be provided to the CategoriesService')
    }
    super(options)
    this.options = options || {}
  }

  async find(params) {
    return ['electronics', 'jewelery', "men's clothing", "women's clothing"]
  }
}

export const getOptions = (app) => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mysqlClient'),
    name: 'categories'
  }
}
