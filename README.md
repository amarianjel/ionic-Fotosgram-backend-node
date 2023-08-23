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

npm install express body-parser cors mongoose express-fileupload jsonwebtoken bcrypt
```

### Paquetes para desarrollo
```
npm i --save-dev @types/express
npm i --save-dev @types/bcrypt
```

## Modo de observador typescript
```tsc -w```