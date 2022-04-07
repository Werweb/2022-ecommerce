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