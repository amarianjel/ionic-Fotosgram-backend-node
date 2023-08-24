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
userRoutes.post('/login', async(req: Request, res: Response ) => {

    const { email, password } = req.body;
    
    try {
        // Verificar email
        const userDB = await Usuario.findOne({ email });
        
        if (!userDB) {
            return res.status(404).json({
                ok: false,
                msg: `Email ${email} no encontrado`
            });
        }
        //Verificar contraseña
        if ( userDB.compararPassword( password ) ) {
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
userRoutes.post('/update', verificaToken, async(req: any, res: Response ) => {

    const user = {
        nombre: req.body.nombre || req.usuario.nombre,
        email : req.body.email  || req.usuario.email,
        avatar: req.body.avatar || req.usuario.avatar
    }

    try{
        // Verificar id
        const userDB = await Usuario.findByIdAndUpdate( req.usuario._id, user, { new: true } );

        if ( !userDB ) {
            return res.json({
                ok: false,
                mensaje: 'No existe un usuario con ese ID'
            });
        }

        const tokenUser = Token.getJwtToken({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        });

        res.json({
            ok: true,
            token: tokenUser,
            user: userDB
        });

    }catch (error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
});

userRoutes.get('/', [ verificaToken ], ( req: any, res: Response ) => {

    const usuario = req.usuario;

    res.json({
        ok: true,
        usuario
    });

});


export default userRoutes;