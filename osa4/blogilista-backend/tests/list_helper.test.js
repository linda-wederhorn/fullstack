const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const result = listHelper.dummy()
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
  const testBlogList = require('./fixtures/blogs')

  test('of empty list is zero', () => {
    assert.strictEqual(listHelper.totalLikes([]), 0)
  })

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(testBlogList.slice(0, 1))
    assert.strictEqual(result, 7)
  })

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(testBlogList)
    assert.strictEqual(result, 36)
  })
})