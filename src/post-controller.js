const Post = require('./post-model');

const getPosts = async (req, res) => {
  let posts;
  if (req.params.id) {
    posts = await Post.findById(req.params.id);
  } else if (req.params.name) {
    posts = await Post.find({ name: req.params.name })
  } else {
    posts = await Post.find()
  }
  res.send(posts);
}

const createPost = async (req, res) => {
  const post = await Post.create(req.body)
  res.send(post);
}

module.exports = {
  getPosts,
  createPost,
}
