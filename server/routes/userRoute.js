const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const routes = [
    {
        path : '/:id',
        methods : { GET : userController.getUser }
    },
    {
        path : '/:id/post',
        methods : { POST : userController.post }
    },
    {
        path : '/:id/upgrade',
        methods : { POST : userController.upgrade }
    }
]

routes.forEach( route => {
    Object.entries( route.methods ).forEach(([method, controller]) => {
        router[method.toLowerCase()](route.path, (req, res, next) => {
            controller(req, res, next);
        });
    });
})

module.exports = router;