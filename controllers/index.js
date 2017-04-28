const Categoria = require('../models').categoria;
const Post = require('../models').post;
const Comentario = require('../models').comentario;


module.exports = function(app){

    this.home = function(req, res){
        Categoria.findAll({
            order: 'descricao'
        })
            .then(categorias => {
                Post.findAll({
                    attributes: ['id', 'titulo', 'autor', 'createdAt', 'resumo', 'post']
                })
                    .then(posts => {
                        res.render('index', { categorias: categorias, posts: posts, titulo: 'Posts' });
                    })
                    .catch(err => {
                        throw err;
                    });
            })
            .catch(err => res.render('error', {error: err.message}));
    }

    this.newPost = function(req, res){
        Categoria.findAll({
            order: 'descricao'
        })
        .then(categorias => res.render('novo-post', { categorias: categorias }))
        .catch(err => res.render('error', {error: err.message}));
    }

    this.savePost = function(req, res){
        let post = req.body;
        post.resumo = post.post.substring(0, 100);

        Post.create(post)
            .then(post => {
                this.home(req, res);
            }).catch(err => res.render('error', {error: err.message}));
    }

    this.getPostById = function(req, res){
        Post.findOne({
            where: {id: req.params.id},
            attributes: ['id', 'titulo', 'autor', 'createdAt', 'resumo', 'post'],
            include: [
                {
                    model: Comentario, as: 'comentarios',
                    attributes: ['autor', 'createdAt', 'comentario']
                }
            ]
        })
        .then(post => res.render('post', { post: post }))
        .catch(err => res.render('error', {error: err.message}));
    }

    this.getPostsByCategoriaId = function(req, res){
        Post.findAll({
            where: {categoria_id: req.params.categoriaId},
            attributes: ['id', 'titulo', 'autor', 'createdAt', 'resumo', 'post'],
            include: [
                {
                    model: Comentario, as: 'comentarios',
                    attributes: ['autor', 'createdAt', 'comentario']
                },
                {
                    model: Categoria, as: 'categoria',
                    attributes: ['descricao']
                }
            ]
        })
        .then(posts => {
            Categoria.findAll({
                order: 'descricao'
            })
            .then(categorias => {
                res.render('index', { categorias: categorias, posts: posts, titulo: posts.length > 0 ? posts[0].categoria.descricao : 'NENHUM POST ENCONTRADO!' });
            })
            .catch(err => res.render('error', {error: err.message}));
        })
        .catch(err => res.render('error', {error: err.message}));
    }

    this.saveComentario = function(req, res){
        Comentario.create(req.body)
            .then(comentario => {
                Comentario.findAll({where: {post_id: comentario.post_id}})
                    .then(comentarios => res.json({comentarios: comentarios}));
            }).catch(err => res.render('error', {error: err.message}));
    }

    return this;
}