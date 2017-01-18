// app/app.js
import Koa from 'koa';
import convert from 'koa-convert';
import serve from 'koa-static';
import compose  from 'koa-compose'
import koaRouter from 'koa-router';
import historyApiFallback from 'koa-connect-history-api-fallback';

const app = new Koa();


app.use(convert(serve(__dirname + '/../dist')));

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
    verbose: true,
})));


// app
//   .use(router.routes())
//   .use(router.allowedMethods());



app.listen(7000);
console.log('listening on port 7000');
export default app;