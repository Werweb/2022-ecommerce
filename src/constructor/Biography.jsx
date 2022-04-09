import React from 'react';
import {makeStyles,Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    page:{
        background:"#333",
        width:'100%',
    },
})

const Biography = () => {
    const classes = useStyles()
  return (
      <div className={classes.page}>
          <Grid container>
              <Grid item md={6}>
                  <Typography variant="h3" color="primary">Biography</Typography>
                  <ul>
                      <li>
                          <Typography variant="body1" color="white">1.- Creamos carpeta component</Typography>
                          <Typography variant="body1" color="white">Creamos archivo product.js</Typography>
                          <Typography variant="body1" color="white">Copiamos el cart de material</Typography>
                          <Typography variant="body1" color="white">trabajamos con el precio{/* 1 */}</Typography>
                          <Typography variant="body1" color="white">cambiamos el titulo{/* 2 */}</Typography>
                          <Typography variant="body1" color="white">cambiamos la imagen {/* 3 */}</Typography>
                          <Typography variant="body1" color="white">cambiamos el icono{/* 4 */}</Typography>
                          <Typography variant="body1" color="white">creamos un codigo javascrpt para las estrellitas {/* 5 */}</Typography>
                          <Typography variant="body1" color="white">descargamos una libreria para dar formatos a numeros (accounting -npm)</Typography>
                          <Typography variant="body1" color="white">la importamos {/* 6 */}</Typography>
                          <Typography variant="body1" color="white">la incluimos {/* 7 */}</Typography>
                          <Typography variant="body1" color="white">creamos en components , navbar , copiamos codigo de material Drawer </Typography>
                          <Typography variant="body1" color="white">colocamos un boton {/* 8 */}</Typography>
                          <Typography variant="body1" color="white">lo importamos en index</Typography>
                            <Typography variant="body1" color="white">incluimos logo {/* 9 */}</Typography>
                          <Typography variant="body1" color="white">le damos estilos al logo {/* 10 */} </Typography>
                          <Typography variant="body1" color="white">le damos estilos al boton {/* 11 */}</Typography>
                          <Typography variant="body1" color="white"> envolvemos el botón en un div con sus classes</Typography>
                          <Typography variant="body1" color="white"> creamos un icono de carrito {/* 12 */}</Typography>
                          <Typography variant="body1" color="white">lo envolvemos en un botón{/* 13 */}</Typography>
                          <Typography variant="body1" color="white">envolvemos el icono en un badge para queaparezca el numerito {/* 14 */}</Typography>
                          <Typography variant="body1" color="white">Desplazar a la derecha el login {/* 14,15 */}</Typography>
                          <Typography variant="body1" color="primary">*IMPORTANT* le estamos diciendo que la hamburgesa , el logo, el titulo ocupe todo lo que tenga que ocupar, tambien le decimos que el boton y el icono tmbien ocupen todo lo que tengan que ocupar y en medio lo rellene de espacio: YA {/* 18 */}</Typography>
                          <Typography variant="body1" color="error">que en dispositivos moviles desaparezca el titulo</Typography>
                          <Typography variant="body1" color="white">Creamos un archivo en componemtes Products.jsx y le damos gril con material</Typography>
                          <Typography variant="body1" color="white">creamos un padding para separar del borde {/* 16 */}</Typography>
                          <Typography variant="body1" color="white"> en product he puesto las letras mas gruesas y mas grandes, pero he tenid oque envolverlo en un Box para que funcione {/* 17 */}</Typography>
                          <Typography variant="body1" color="white">En component creamos un archivo product-data.js</Typography>
                          <Typography variant="body1" color="white">en:products lo importamos</Typography>
                          <Typography variant="body1" color="white">minuto 1:28 https://www.youtube.com/watch?v=4w1UmgkPcUk&t=2196s</Typography>
                          <Typography variant="body1" color="white">vamos a mapear {/* 19 */}</Typography>
                          <Typography variant="h3" color="white">CHECKOUT minuto 1:38</Typography>
                          <Typography variant="body1" color="white">en components creamos dos archivos Checkout pages y chekoutCard y lo importamos en app</Typography>
                          <Typography variant="body1" color="white">en checkout importamos productdata y product</Typography>
                          <Typography variant="body1" color="white">para checkout card pegamos todo el codigo de product y lo pegamos</Typography>
                          <Typography variant="body1" color="white">borramos lo que no necesitamos </Typography>
                          <Typography variant="body1" color="white">creamos el boton de la basura {/* 20 */} lo envolvemos en un boton</Typography>
                          <Typography variant="body1" color="white">ponemos un clasname a cardActions {/* 21 */}</Typography>
                          <Typography variant="body1" color="white">ponemos estilos flex para alinear los elementos {/* 22 */}</Typography>
                          <Typography variant="body1" color="white">Creamos un componete Total.js</Typography>
                          <Typography variant="body1" color="white">en total importamos accounting {/* 23 */}</Typography>
                          <Typography variant="body1" color="white">creamos un boton {/* 24 */}</Typography>
                          <Typography variant="body1" color="white">Le damos los estilos 1º definimos la constante {/* 25 */} para darle estilos</Typography>
                          <Typography variant="body1" color="white"> inicialimos classes {/* 26 */}</Typography>
                          <Typography variant="body1" color="white">en checout pages importamos total {/* 27 */}</Typography>
                          <Typography variant="body1" color="white">FIN PRIMERA PARTE</Typography>
                          <Typography variant="h2" color="white">CONTEXT</Typography>
                          <Typography variant="body1" color="white">minuto:2:20    https://www.youtube.com/watch?v=4w1UmgkPcUk&t=2196s</Typography>
                          <Typography variant="body1" color="white">creamos el contexto con stateProvider.js</Typography>
                          <Typography variant="body1" color="white">envolvemos todos los componetes en index y como atributo le pasamos el inicialState y el reducer que todavia no estan creados {/* 28 */}</Typography>
                          <Typography variant="body1" color="white">el reducer es el que llevara la logica e ira cambiando  por su inicialState en el que llevara un array llamado basket</Typography>
                          <Typography variant="body1" color="white">es decir que cada vez que le damos al carrito se ira añadiendo en el basket llevado por el inicial state</Typography>
                          <Typography variant="body1" color="white">otro tipo de funcion de reducer sera el actionTipe que dira que tipo de aciones temeos que escuchar dentro del reducer </Typography>
                          <Typography variant="body1" color="white">creamos el reducer.js</Typography>
                          <Typography variant="body1" color="white">el ADD_TO-BASKET es una accion de actiontype que escucha esaaccion</Typography>
                          <Typography variant="body1" color="white">si de algun componente nos envia una accion ADD TO Baske entonce retonamos lo que haya dentro del array mas lo que nos envian de la accion</Typography>
                             <Typography variant="body1" color="white">todo esto lo hacemos con un switch con su case y dafault</Typography>
                          <Typography variant="h2" color="white">Rutas minuto 2:33</Typography>
                          <Typography variant="body1" color="white">importamos Switch , router y route</Typography>
                          <Typography variant="body1" color="white">envolvemos todo en el Router</Typography>
                          <Typography variant="body1" color="white">Creamos un Switch y route expecifico , ponemos el phat de como queremos que se llame y el componente dentro</Typography>
                          <Typography variant="body1" color="white">checkaut card ya es llamado por checkaut pages por lo que no necesitamos ponerlo </Typography>
                             <Typography variant="body1" color="white">el mismo caso para products , pero este queremos que aparezca en la pagina de inicio</Typography>
                          <Typography variant="body1" color="white">minuto 2:40</Typography>
                          <Typography variant="body1" color="white">una vez creada las rutas, vamos al navbar, importamos link de router dom y envolvemos el logo hacia el inicio {/* 28 */} </Typography>
                          <Typography variant="body1" color="white">y en ShoppingCard hacia chechout-page{/* 29 */}</Typography>
                          <Typography variant="body1" color="error">instamaos react router dom </Typography>
                          <Typography variant="body1" color="error">me ha dado problemas al querer hacer un build en vercel </Typography>
                           <Typography variant="body1" color="error">instalo react router dom y me daprobelmas con el switch</Typography>
                          <Typography variant="body1" color="error">desintalo react router don con yarn yarn remove react-router-dom</Typography>
                          <Typography variant="body1" color="error">instalamos yarn add react.router-dom@5.3.0</Typography>
                          <Typography variant="body1" color="white">ya funciona</Typography>
                          <Typography variant="body1" color="white"> 2:42 la idea ahora es que pinchemos en el carrito de una de las tarjetas,despachemos el objeto hacia context, se incluirá en basket y esa informacion se la pasaremos a checkout-page</Typography>
                           <Typography variant="body1" color="white">en product, en iconButton de addShopingCart creamos un onClick addToBatket {/* 30 */}</Typography>
                          <Typography variant="body1" color="white">creamos la funcion {/* 31 */}</Typography>
                          <Typography variant="body1" color="white">creamos el dispach, que hara dos cosas un type y un action {/* 32 */}</Typography>
                          <Typography variant="body1" color="white">tenemos que imortar actionTypes y dispatch {/* 33 */}</Typography>
                          <Typography variant="body1" color="white">que le vamos a pasasar al Add_TO _basket un item con todasv las caracteristicas que tiene el producto {/* 34 */}</Typography>
                           <Typography variant="body1" color="white">en javascript cuando los valores son los mismo, nos permite prencidir de repetir {/* 35 */}para simplificar la sintaxis</Typography>
                          <Typography variant="body1" color="white">tenemos que hacer el destructury para obtener el basket, que ahora mismo esta vacio y el dispat , para dispachar los datos{/* 36 */} </Typography>
                          <Typography variant="body1" color="white">importamos use -stateValue que los sacamso de StatePrivder {/* 37 */} </Typography>
                          <Typography variant="body1" color="white">Resumen: cuando hagamos click en el boton del carrito de la compra, se ejecuta la funcion addTo Batket, que hará un dispatch y lo pasara como item , el archivo reducer , escuchará este tipo de accion, entonces modificará el estado añadiendo el item que ha recibido al array, por lo que cualquier componete mediante useState value podra consumir estos datos  </Typography>
                          <Typography variant="body1" color="white">2:49 ahora tenemos que ir a shpingCart y actualizarlo con basket</Typography>
                           <Typography variant="body1" color="white">nos vamos a checkoutpage, vamos a consumir lo que hay en el basket y lo renderizamos en el map</Typography>
                          <Typography variant="body1" color="white"> quitamos productData que erea momentaneo para ver productos</Typography>
                          <Typography variant="body1" color="white">importamos useStateValue {/* 38 */} y el estado del basket {/* 39 */}</Typography>
                          <Typography variant="body1" color="white">en vez de Product utilizamos basket, lo protejemos con signo de interrogacion, porque si no esta cargado em el momento de lapeticion se rompetria la app {/* 40 */}</Typography>
                          <Typography variant="body1" color="white">en vez de product, item {/* 41 */}</Typography>
                           <Typography variant="body1" color="white">utilizamos ahora el basket para actualizar el numerito del carrito, que esta en el navbar</Typography>
                          <Typography variant="body1" color="white">importamos useStateValue {/* 42 */} y el estado del basket {/* 43 */}</Typography>
                          <Typography variant="body1" color="white">asi ya tenemoslos datos del basket en este componente</Typography>
                          <Typography variant="body1" color="white">lo usamos en badge {/* 44 */}</Typography>
                          <Typography variant="body1" color="white">2:55 BOORAADO EN EL BOTON DE BASURA , esto esta en checkotCard</Typography>
                          <Typography variant="body1" color="white">Haremos uns dispat de delate form basket</Typography>
                          <Typography variant="body1" color="white">el reducer lo escuchará, cojera el id y lo eliminará </Typography>
                           <Typography variant="body1" color="white">creamos un onclick llamado removeItem {/* 45 */}</Typography>
                          <Typography variant="body1" color="white">nesecitamos useStateValue {/* 46 */} el actionTypes {/* 47 */} i la declaracion {/* 48 */}</Typography>
                          <Typography variant="body1" color="white">creamos la funcionRemoveItem {/* 49 */}</Typography>
                          <Typography variant="body1" color="white">creamos un REMOVE_ITEM {/* 50 */}</Typography>
                          <Typography variant="body1" color="white">en reducer creamos el REMOVE-Item {/* 51 */}( si escuchss un Remove_item</Typography>
                          <Typography variant="body1" color="error">Cual es el problema, en el supuesto que pinchamos tres veces un mismo articulo y despues queremos elimminar uno solo , se borrarán los tres yaa que tiene el mismo id</Typography>
                          <Typography variant="body1" color="error">Para solucionarlo </Typography> 
                           <Typography variant="body1" color="white">entonces, retorna  un idex con findIdex() que resuelve el problema {/* 52 */} </Typography>
                          <Typography variant="body1" color="white">sacamos una copia del index{/* 53 */}</Typography>
                          <Typography variant="body1" color="white">con el metodo splice solo borra el que le indicamos{/* 54 */}</Typography>
                          <Typography variant="body1" color="white">y retornamos todo el estado, con el nuevo basket {/* 55 */}</Typography>
                          <Typography variant="body1" color="white">3:07  .- SUMAR la cantidad en el precio de los objetos selecionados, mediante reducer que va acumulando todo los valores</Typography>
                          <Typography variant="body1" color="white">creamos una funcion reduce getBasketTotal {/* 56 */}</Typography>
                           <Typography variant="body1" color="white">esta funcion la exportamos para podela consumir en el componennte total {/* 57 */}</Typography>
                          <Typography variant="body1" color="white">y lo colocamos en el accountig {/* 58 */}</Typography>
                          <Typography variant="body1" color="white">nos falta consumur el basket, importamos useStateValue {/* 59 */} y su estado {/* 60 */}</Typography>
                          <Typography variant="h2" color="primary">AUTENTIFICACIÓN</Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                              <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                              <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                              <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                           <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>


                      </li>
                  </ul>
              </Grid>
               <Grid item md={6}>
                  <Typography variant="h3" color="primary">Biography</Typography>
                  <ul>
                      <li>
                          <Typography variant="body1" color="white">Creamos un LAyout y un Menu</Typography>
                          <Typography variant="body1" color="white">Creamos una carpeta vistas y una lista de inmuebles</Typography>
                          <Typography variant="body1" color="white">Creamos una carpeta seguridad y un formulario de registro</Typography>
                          <Typography variant="body1" color="white">Manejar estados :https://www.udemy.com/course/react-firebase-material-design-fullstack-extremo/learn/lecture/17782640#overview </Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"></Typography>

                      </li>
                  </ul>
              </Grid>
          </Grid>
      </div>
    
  )
}

export default Biography