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
                          <Typography variant="body1" color="white">gistrar el evento {/* 4 */}</Typography>
                          <Typography variant="body1" color="white">o {/* 5 */}</Typography>
                          <Typography variant="body1" color="white"></Typography>
                          <Typography variant="body1" color="white"> </Typography>
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