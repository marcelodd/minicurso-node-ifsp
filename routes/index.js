const router = require('express').Router();

module.exports = function(app){
    const CtrlIndex = require('../controllers/index')(app);

    router.get('/', CtrlIndex.home);
    router.get('/newPost', CtrlIndex.newPost);
    router.post('/savePost', CtrlIndex.savePost);

    router.get('/post/:id', CtrlIndex.getPostById);

    router.get('/post/categoria/:categoriaId', CtrlIndex.getPostsByCategoriaId);

    router.post('/comentario', CtrlIndex.saveComentario);

    app.use('/', router);
}