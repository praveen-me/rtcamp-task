import express from 'express';
import { template } from '../helper/template';
import store from '../client/store/store';
import {matchRoutes} from 'react-router-config';
import routes from '../client/routes';
import proxy from 'express-http-proxy';

const app = express();

// Set path for static files
app.use(express.static('dist'));
// app.use('/api', proxy('https://wplift.com'));

app.get('/*', (req, res) => {
  // MATCHING ROUTES FOR FETCHING DATA
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    return route.loadData ? route.loadData(store) : null;
  });
  
  Promise.all(promises).then(() => {
    res.send(template(req.path, store))
  });
});

app.listen(3001, (err) => {
  console.log(`Server is running on http://localhost:3001`);
})