const Router = require('../framework/Router');
const controller = require('./post-controller');

const router = new Router();

router.get('/posts', controller.getPosts);

router.post('/posts', controller.createPost);

module.exports = router;
