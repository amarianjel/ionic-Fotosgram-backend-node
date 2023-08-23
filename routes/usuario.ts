import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Usuario } from '../models/usuario.model';
import Token from '../classes/token';
import { verificaToken } from '../middlewares/autentificacion';

const userRoutes = Router();

// Crear un usuario
userRoutes.post('/create', ( req: Request, res: Response ) => {

    const user = {
        nombre   : req.body.nombre,
        email    : req.body.email,
        password : bcrypt.hashSync(req.body.password, 10),
        // avatar   : req.body.avatar
    };

    Usuario.create( user ).then( userDB => {
        const tokenUser = Token.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        });

        res.json({
            ok: true,
            token: tokenUser
        });


    }).catch( err => {
        res.json({
            ok: false,
            err
        });
    });
});

// Login
userRoutes.post('/login', async (req: Request, res: Response ) => {

    const { loginEmail, loginPassword } = req.body;

    try {
        // Verificar email
        const userDB = await Usuario.findOne({ loginEmail });

        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Verificar contraseña
        if ( userDB.compararPassword( loginPassword ) ) {
            const tokenUser = Token.getJwtToken({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
                avatar: userDB.avatar
            });

            res.json({
                ok: true,
                token: tokenUser
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
});

// Actualizar usuario
userRoutes.post('/update', verificaToken, async (req: any, res: Response ) => {

    const user = {
        nombre: req.body.nombre || req.usuario.nombre,
        email : req.body.email  || req.usuario.email,
        avatar: req.body.avatar || req.usuario.avatar
    }


    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7Il9pZCI6IjY0ZTY3OGFmYjcxY2Y4NjMyMTBmNWYwMCIsIm5vbWJyZSI6IkFicmFoYW0gTWFyaWFuamVsIiwiZW1haWwiOiJhYnJhaGFtLm1hcmlhbmplbEBnbWFpbC5jb20iLCJhdmF0YXIiOiJhdi0xLnBuZyJ9LCJpYXQiOjE2OTI4MjU3NzUsImV4cCI6MTY5NTQxNzc3NX0.6OGm9xA3YTbe3kQGuUjruHdNN7crQF-OTx9Nw_yvUjw
    try{
        // Verificar id
        // const userDB = await Usuario.findByIdAndUpdate({ req.usuario._id });

        console.log(req)

    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

    // Usuario.findByIdAndUpdate( req.usuario._id, user, { new: true }, (err, userDB) => {

    //     if ( err ) throw err;

    //     if ( !userDB ) {
    //         return res.json({
    //             ok: false,
    //             mensaje: 'No existe un usuario con ese ID'
    //         });
    //     }

    //     const tokenUser = Token.getJwtToken({
    //         _id: userDB._id,
    //         nombre: userDB.nombre,
    //         email: userDB.email,
    //         avatar: userDB.avatar
    //     });

    //     res.json({
    //         ok: true,
    //         token: tokenUser
    //     });


    // });

});



export default userRoutes;