import React from 'react';
import {renderToString} from "react-dom/server";
import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import routes from '../client/routes';
import {Provider} from 'react-redux';
import Header from '../client/components/Header';
import Footer from '../client/components/Footer';

export function template(path, store) {
  const jsx = renderToString(
    <Provider store={store}>
        <StaticRouter context={{}} location={path}>
          <>
            <Header/>
            <main>
              {
                renderRoutes(routes)
              }
            </main>
            <Footer />
          </>
        </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <title>Simple Blog Theme - RT Camp Task</title>
        <link rel="stylesheet" href="/bundle.css" />
      </head>
      <body>
        <div id="root">${jsx}</div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `
} 