import { CategoriesService, categories, getOptions } from './products/categories/categories.js'
export const services = (app) => {
  // app.configure(categories)

  app.use('/products/categories', new CategoriesService(getOptions(app)))
}
