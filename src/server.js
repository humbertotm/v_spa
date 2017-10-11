import express from 'express';
import path from 'path';
import handleRender from './utils/handleRender';

const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use(function(req, res, next) {
    console.log(req.url);
    next();
})

app.use(handleRender)

app.listen(3000, () => {
    console.log('Listening on port 3000')
});

/*
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
    console.log('%s %s', req.method, req.url);
    res.status(200).send(render(
            <Router context={{}} location={req.url}>
                <App />
            </Router>
    ));
});
*/