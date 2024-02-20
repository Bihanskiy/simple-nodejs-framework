require('dotenv').config({path: '.env'});
require('dotenv').config({path: '.env.local'});

const PORT = process.env.PORT || 5000;
const BASE_URL = process.env.BASE_URL;
const MONGOOSE_URI = process.env.MONGOOSE_URI;

const Application = require('./framework/Application');
const userRouter = require('./src/user-router');
const postRouter = require('./src/post-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');
const bodyParser = require('./framework/bodyParser');
const mongoose = require('mongoose');

const app = new Application()

app.use(jsonParser);
app.use(bodyParser);
app.use(parseUrl(BASE_URL));

app.addRouter(userRouter);
app.addRouter(postRouter);

const start = async () => {
  try {
    await mongoose.connect(MONGOOSE_URI)
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
