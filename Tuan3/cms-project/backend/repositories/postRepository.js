let posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'Hello CMS',
  },
]

exports.getPosts = () => {
  return posts
}

exports.addPost = (post) => {
  const newPost = {
    id: posts.length + 1,
    ...post,
  }

  posts.push(newPost)

  return newPost
}
