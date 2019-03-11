import express from 'express';
import { template } from '../helper/template';
import store from '../client/store/store';
import {matchRoutes} from 'react-router-config';
import routes from '../client/routes';
// import proxy from 'express-http-proxy';

const app = express();

// Set path for static files
app.use(express.static('dist'));
// app.use('/api', proxy('https://wplift.com'));


app.get('/', (req, res) => {
  getContent(req, res);
});

app.get('/posts/:id', (req, res) => {
  getContent(req, res);
});

// 404 Route
app.get('*', (req, res) => {
  res.send('404')
})

function getContent(req, res) {
  // MATCHING ROUTES FOR FETCHING DATA
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    
    // checking the url contains the post id or not 
    if(req.params.id) {
      // extract the index
      const postId = req.params.id
      return route.loadData(store, postId)
    }
    return route.loadData ? route.loadData(store) : null;
  });
  
  Promise.all(promises).then(() => {
    return res.send(template(req.path, store))
  });
}

const PORT = process.env.PORT || 8001

app.listen(PORT, (err) => {
  console.log(`Server is running on http://localhost:3001`);
})