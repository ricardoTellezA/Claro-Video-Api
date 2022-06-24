# CLAROVIDEO TEST 
Test para la vacante de front-end developer de ClaroVideo

## DESCRIPCIÓN
La prueba consiste en replicar dos vistas de la plataforma de claro video, consultando la una API para poder traer la lista de películas de la categoría de ciencia ficción y la descripción de cualquier película que sea seleccionada.
## Requerimientos
* Se deberá usar react y react-redux
* Se tendrán que incluir pruebas unitarias
* Se deberá subir en algún repositorio
* Poner un readme con las instrucciones
* Subir el proyecto en algún hosting

## INSTRUCCIONES PARA CORRER EL PROYECTO
1. Clonar el repositorio de https://github.com/ricardoTellezA/Claro-Video-Api
2. Instalar el administrador de paquetes de NodeJs
3. Instalar React con: 
    > npm intall
4. Entrar a la carpeta de claro-video
5. Correr con el siguiente comando:
   >npm start
## DEPENDECIAS UTILIZADAS
En este caso para traer los datos de la API instale axios
  >npm i axios

Para las rutas, utilice: `react-router-dom`
>npm install --save react-router-dom

`redux`
>npm i --save redux

`react redux` Permiten almacenar mi estado en un Store.
>npm i react-redux

`redux thunk` es un middleware que le permite invocar creadores de acciones que devuelven una función en vez de un objeto de acción


>npm i --save redux-thunk

## URL DEL PROYECTO
https://effortless-rolypoly-9c0dd7.netlify.app

## PRUEBAS UNITARIAS
Las pruebas unitarias se realizaron con Jest.
>npm install --save-dev jest

Tuve que instalar babel, ya que tuve problemas con la versión de nodeJs
>npm install --save-dev babel-jest @babel/core @babel/preset-env 


