function dummy() { return 1 }

function totalLikes(blogs) { return (blogs.reduce((likesSum, blog) => likesSum + blog.likes, 0)) }

function favoriteBlog(blogs) {
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  const { author, title, likes } = blogs.find(blog => blog.likes === maxLikes)
  const maxLikesBlog = { author, title, likes }
  return maxLikesBlog
}

function mostBlogs(blogs) {
  const allAuthorsAndBlogs = blogs.reduce((authorsAndBlogs, blog) => {
    if (!authorsAndBlogs.map(item => item.author).includes(blog.author)) {
      authorsAndBlogs.push({ author: blog.author, blogs: 1 })
    } else {
      authorsAndBlogs.find(item => item.author === blog.author).blogs++
    }
    return authorsAndBlogs
  }, [])
  const maxBlogs = Math.max(...allAuthorsAndBlogs.map(item => item.blogs))
  const maxBlogsAuthor = allAuthorsAndBlogs.find(item => item.blogs === maxBlogs)
  return maxBlogsAuthor
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}