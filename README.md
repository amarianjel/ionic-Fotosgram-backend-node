#  [Fotosgram Backend](https://ionicframework.com/) &middot; [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)
[![forthebadge](https://img.shields.io/badge/Made%20with-Ionic-blue.svg)](https://ionicframework.com/)
![Quicktype](https://img.shields.io/badge/Quicktype-%E2%9A%99%EF%B8%8F-orange)
[![forthebadge](https://img.shields.io/badge/Angular-%F0%9F%8C%8D-red.svg)](https://angular.io/)
![Android](https://img.shields.io/badge/Android-%F0%9F%93%B1-brightgreen)

<div>
  <p align="center">
    <img src="https://i.postimg.cc/mDcHQN1y/Node.png" alt="Logo Node">
  </p>
</div>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## 👨‍💻 Tecnologías Usadas 👨‍💻
<table align="center">
  <thead>
    <tr>
      <th>Node</th>
      <th>Ts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="https://i.postimg.cc/mDcHQN1y/Node.png" width="150px" />
      </td>
      <td>
        <img src="https://i.postimg.cc/MH7XDs6V/Ts.png" width="150px" />
      </td>
    </tr>
  </tbody>
</table>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

# Inicialización
```tsc --init```
Si no es reconocido, es por que no esta instalado typescrip
```npm install -g typescript```

Instalar Nodemon
```npm i -g nodemon```

## Automatizar cambios
1. Una manera de recargar automáticamente tu servidor *Node.js* en TypeScript cada vez que haces cambios en el código. Para lograr esto, puedes usar herramientas como nodemon junto con *ts-node*.
```npm install nodemon ts-node --save-dev```

2. Actualiza tus scripts en el archivo package.json para usar *nodemon* y *ts-node*:
```json
"scripts": {
  "start": "nodemon --exec ts-node index.ts"
},
```
En este ejemplo, se configura nodemon para ejecutar *ts-node* en el archivo *index.ts* cada vez que haya cambios.

3. Ejecuta tu servidor con el siguiente comando:
```npm start```

## Paquetes a instalar

```
npm install express
npm install body-parser
npm install cors
npm install mongoose
npm install express-fileupload
npm install jsonwebtoken
npm install bcrypt
npm i uniqid

npm install express body-parser cors mongoose express-fileupload jsonwebtoken bcrypt
```

### Paquetes para desarrollo
```
npm i --save-dev @types/express
npm i --save-dev @types/bcrypt
npm i --save-dev @types/express-fileupload
npm i --save-dev @types/uniqid
```

## Modo de observador typescript
```tsc -w```