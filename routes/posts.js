const express = require('express');
const router = express.Router();
const Post = require('../modles/Post');

router.get('/', (req, res) => {
  res.send('We are on posts');
});


// router.get('/specific', (req, res) => {
//   res.send('Specific Post');
// });

router.post('/', (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    desc: req.body.desc
  });

  post.save()
    .then(data => {
      console.log('Im here')
      res.json(data);
    })
    .catch(err => {
      console.log("############## SORRY I CRASHED! ##############");
      res.json({ message: err.message });
    });

});

module.exports = router;