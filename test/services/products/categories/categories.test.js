// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import { app } from '../../../../src/app.js'

describe('/products/categories service', () => {
  it('registered the service', () => {
    const service = app.service('/products/categories')

    assert.ok(service, 'Registered the service')
  })
})
