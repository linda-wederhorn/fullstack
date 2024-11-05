function dummy() { return 1 }

function totalLikes(blogs) { return (blogs.reduce((likesSum, blog) => likesSum + blog.likes, 0)) }

function favoriteBlog(blogs) {
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  const { author, title, likes } = blogs.find(blog => blog.likes === maxLikes)
  const maxLikesBlog = { author, title, likes }
  return maxLikesBlog
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}