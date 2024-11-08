const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const testBlogList = require('./fixtures/blogs')

test('dummy returns one', () => {
  const result = listHelper.dummy()
  assert.strictEqual(result, 1)
})

describe('total likes', () => {
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

describe('favorite blog', () => {
  const { author, title, likes } = testBlogList[2]
  const maxLikesBlog = { author, title, likes }

  test('returns the blog with most likes', () => {
    const result = listHelper.favoriteBlog(testBlogList)
    assert.deepStrictEqual(result, maxLikesBlog)
  })

  test('returns the first occurrence of blogs with maximum likes', () => {
    const testBlogListExtended = [{
      _id: '5a422bc61b54a676234d17fe',
      title: 'Type wars part 2',
      author: 'Robert C. Martin',
      url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
      likes: 12,
      __v: 0
    }, ...testBlogList]

    const firstFavoriteBlog = {
      title: 'Type wars part 2',
      author: 'Robert C. Martin',
      likes: 12
    }
    const result = listHelper.favoriteBlog(testBlogListExtended)
    assert.deepStrictEqual(result, firstFavoriteBlog)
  })
})

describe('most blogs', () => {
  test('returns the author with most blogs', () => {
    const result = listHelper.mostBlogs(testBlogList)
    assert.deepStrictEqual(result, { author: 'Robert C. Martin', blogs: 3 })
  })

  test('returns the first occurrence of authors with maximum blogs', () => {
    const testBlogListExtended = [{
      _id: '5a422bc61b54a676234d17fb',
      title: 'Tupu',
      author: 'Donald Duck',
      url: 'https://en.wikipedia.org/wiki/Donald_Duck',
      likes: 12,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676234d17fa',
      title: 'Hupu',
      author: 'Donald Duck',
      url: 'https://en.wikipedia.org/wiki/Donald_Duck',
      likes: 11,
      __v: 0
    },
    {
      _id: '5a422bc61b54a676g34d17fa',
      title: 'Lupu',
      author: 'Donald Duck',
      url: 'https://en.wikipedia.org/wiki/Donald_Duck',
      likes: 10,
      __v: 0
    }, ...testBlogList]

    const firstMostBlogs = {
      author: 'Donald Duck',
      blogs: 3
    }

    const result = listHelper.mostBlogs(testBlogListExtended)
    assert.deepStrictEqual(result, firstMostBlogs)
  })
})