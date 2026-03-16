const postRepository = require('../repositories/postRepository')

exports.getAllPosts = () => {
  return postRepository.getPosts()
}

exports.createPost = (title, content) => {
  const post = {
    title,
    content,
  }

  return postRepository.addPost(post)
}
