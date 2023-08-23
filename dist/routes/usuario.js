"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
// Crear un usuario
userRoutes.post('/create', (req, res) => {
    // const user = {
    //     nombre   : req.body.nombre,
    //     email    : req.body.email,
    //     password : bcrypt.hashSync(req.body.password, 10),
    //     avatar   : req.body.avatar
    // };
    res.json({
        ok: true,
    });
    // Usuario.create( user ).then( userDB => {
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
    // }).catch( err => {
    //     res.json({
    //         ok: false,
    //         err
    //     });
    // });
});
exports.default = userRoutes;
