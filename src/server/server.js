require('babel-polyfill');
require('babel-register');

// ========= App-wide config =========
import config from './config';

// ========= Libs =========
// import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import logger from 'morgan';
import responseTime from 'response-time';

// ========= Routes =========
import ErrorHandler from './routes/errors';
import NotFound from './routes/notFound';

// ========= Instantiate app =========
const app = express();

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  app.use(logger('dev'));
}

// ========= Welcome to Middle(ware) Earth =========
app.use(helmet.xssFilter({
  setOnOldIE: true,
}));

app.use(responseTime());

app.use(helmet.frameguard());

app.use(helmet.ieNoOpen());

app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({
  setTo: 'coffee',
}));

// Should we really have another cookie?
// app.use(cookieParser(uuid.v4() + uuid.v4(), {}));

// Parse it all
app.use(bodyParser.urlencoded({
  extended: true,
}));

// JSON
app.use(bodyParser.json());

// Forms and compression!
app.use(compression());

// Prevent parameter polution
app.use(hpp());

// ========= Routes =========
app.get('/health', (req, res) => {
  res.json({
    healthy: true,
    version: config.version,
  });
});

app.get('/', (req, res) => {
  res.json({
    status: 'just barely working!',
  });
});

// Needs better form, guard against test
if (process.env.NODE_ENV !== 'test') {
  app.listen(config.appPort, () => {
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info(`==> 💻  Send requests to http://${config.apiHost}:${config.appPort}`);
  });
}

app.use(NotFound);
app.use(ErrorHandler);

export default app;
