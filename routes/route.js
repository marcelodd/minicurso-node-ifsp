module.exports = function (app) {

    let categorias = [
        { id: 1, descricao: 'JAVA' },
        { id: 2, descricao: 'NodeJS' },
        { id: 3, descricao: 'Delphi' }
    ];

    let posts = [
        {
            id: 1,
            titulo: 'Post 1',
            autor: 'Marcelo de Castro',
            data: new Date(),
            categoria: 1,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            resumo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            comentarios: []
        },
        {
            id: 2,
            titulo: 'Post 2',
            autor: 'Marcelo de Castro',
            data: new Date(),
            categoria: 2,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            resumo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            comentarios: []
        },
        {
            id: 3,
            titulo: 'Post 3',
            autor: 'Marcelo de Castro',
            data: new Date(),
            categoria: 3,
            resumo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            comentarios: []
        },
        {
            id: 4,
            titulo: 'Post 4',
            autor: 'Marcelo de Castro',
            data: new Date(),
            categoria: 3,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            resumo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.',
            comentarios: []
        },
    ];

    /*app.get('/', (req, res) => {
        //res.json(categorias);
        res.render('index', { categorias: categorias, posts: posts, titulo: 'Todos os Posts' });
    });*/

    /*app.get('/post/:id', (req, res) => {
        res.render('post', { post: getPostById(req.params.id) });
    });*/

    /*app.post('/comentario', (req, res) => {
        let comentario = req.body;
        comentario.post_id = parseInt(comentario.post_id);
        
        let post = getPostById(comentario.post_id);

        post.comentarios.push({post_id: comentario.post_id, comentario: comentario.comentario, data: new Date(), autor: comentario.autor});

        res.json({ comentarios: post.comentarios });
    });*/

    /*app.get('/post/categoria/:id', (req, res) => {
        res.render('index', { categorias: categorias, posts: getPostByCategoriaId(req.params.id), titulo: 'Posts sobre ' + getCategoriaById(req.params.id).descricao });
    });*/

    /*app.get('/post', (req, res) => {
        res.render('novo-post', { categorias: categorias });
    });*/

    /*app.post('/post', (req, res) => {
        let post = req.body;
        post.id = posts.length + 1;

        posts.push({
            id: post.id,
            titulo: post.titulo,
            autor: post.autor,
            categoria: post.categoria,
            data: new Date(),
            resumo: post.post.substring(0, 100),
            post: post.post, comentarios: []
        });

       res.render('index', { categorias: categorias, posts: posts, titulo: 'Todos os Posts' });
    });*/

    function getPostById(id) {
        return posts.filter(item => {
            return item.id == id;
        })[0];
    }

    function getPostByCategoriaId(categoriaId) {
        return posts.filter(item => {
            return item.categoria == categoriaId;
        });
    }

    function getCategoriaById(id) {
        return categorias.filter(item => {
            return item.id == id;
        })[0];
    }
}