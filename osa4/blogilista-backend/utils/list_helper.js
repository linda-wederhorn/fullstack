function dummy() { return 1 }

function totalLikes(blogs) { return (blogs.reduce((likesSum, blog) => likesSum + blog.likes, 0)) }

module.exports = {
  dummy, totalLikes
}