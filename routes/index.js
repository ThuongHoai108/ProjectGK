var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/#', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
});

router.get('/product.html', function(req, res, next) {
  res.render('shop', { title: 'Shop' });
});

router.get('/login.html', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/cart.html', function(req, res, next) {
  res.render('cart', { title: 'Cart' });
});

router.get('/contact-us.html', function(req, res, next) {
  res.render('contact-us', { title: 'Contact' });
});

router.get('/checkout.html', function(req, res, next) {
  res.render('checkout', { title: 'Checkout' });
});

router.get('/404.html', function(req, res, next) {
  res.render('404', { title: '404' });
});

router.get('/product-details.html', function(req, res, next) {
  res.render('products', { title: 'Product Detail' });
});

router.get('/blog.html', function(req, res, next) {
  res.render('blog', { title: 'Blog' });
});

router.get('/blog-single.html', function(req, res, next) {
  res.render('blog-single', { title: 'Blog Single' });
});

module.exports = router;
