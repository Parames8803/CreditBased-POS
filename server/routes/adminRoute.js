const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')

const routes = [
    {
        path : '/',
        methods : { GET : adminController.getUsers }
    }
]

routes.forEach( route => {
    Object.entries(route.methods).forEach(([method, controller]) => {
        router[method.toLowerCase()](route.path, (req, res, next) => {
            controller(req, res, next);
        });
    });
})

module.exports = router;