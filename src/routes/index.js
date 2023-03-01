const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', {
    layout: 'second',
    style: 'style.css',
  })
})

router.get('/container', function (req, res, next) {
  res.render('1-container', {
    title: 'Container',
    content: 'Content',
  })
})

router.get('/layout', function (req, res, next) {
  res.render('2-layout', {
    layout: 'first',
  })
})

router.get('/body', function (req, res, next) {
  res.render('3-body', {
    layout: 'second',
    name: 'John',
  })
})

router.get('/component', function (req, res, next) {
  res.render('4-component', {
    layout: 'second',
  })
})

router.get('/params', function (req, res, next) {
  res.render('5-params', {
    layout: 'second',
    text: 'My first param',
  })
})

module.exports = router
