const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.route('/login')
  .get((req, res) => {
    res.render('test', { securityLevel: 'Unsecured' });
  })
  .post((req, res) => {
    const { name } = req.body;
    res.render('test', { name, securityLevel: 'Secured' });
  });

app.get('/home', (req, res) => {
  const name = req.query.name;
  if (!name) {
    res.redirect('/');
  } else {
    const posts = [
      { title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque...' },
      { title: 'Post 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...' },
    ];
    res.render('home', { name, posts });
  }
});

app.get('/post/:postId', (req, res) => {
  const postId = req.params.postId;
  const post = { title: 'Post Title', content: 'Full post content goes here...' };
  res.render('post', { post });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});