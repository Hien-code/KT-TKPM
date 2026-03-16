const postService = require('../services/postService')

exports.getPosts = (req, res) => {
  const posts = postService.getAllPosts()
  res.json(posts)
}

exports.createPost = (req, res) => {
  const { title, content } = req.body

  const post = postService.createPost(title, content)

  res.json(post)
}
