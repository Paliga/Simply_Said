import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);