import { Router, Response } from 'express';
import { verificaToken } from '../middlewares/autentificacion';
import { Post } from '../models/post.model';

const postRoutes = Router();

// Crear POST
postRoutes.post('/', [ verificaToken ], (req: any, res: Response) => {

    const body = req.body;
    body.usuario = req.usuario._id;

    Post.create( body ).then( async postDB => {

        await postDB.populate('usuario', '-password')

        res.json({
            ok: true,
            post: postDB
        });

    }).catch( err => {
        res.json(err)
    });

});


export default postRoutes;