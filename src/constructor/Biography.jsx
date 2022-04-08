import React from 'react';
import {makeStyles } from '@material-ui/core';
import { Grid, Typography } from '@mui/material';

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