import React from 'react'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import { Button, Grid, IconButton, Paper } from '@mui/material'
import {makeStyles,useTheme } from '@material-ui/core'
import {   HomeWork, PhotoCameraFrontSharp } from '@mui/icons-material';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { TextField } from '@mui/material'
import Radio from '@material-ui/core/Radio';
import { MultiSelectUnstyled } from '@mui/base';

import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme)=>({/* 2 */
    boton:{
        fontSize:90,
        backgroundColor:'violet',
        color:'secondary',
        '&:hover':{
            backgroundColor:'blue'
        }
    },
    title:{
        textDecoration:'underline',

    },
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block',
        width: 280,
    },
     root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

}))



const MaterialUi = () => {
    const classes = useStyles()/* 3 */
     const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
      <>
      <Box>
    <Typography variant="h1" color="initial">Tipografía</Typography>
    {/* 4 */}<Typography className={classes.title} variant="h2" color="primary">Tipografía</Typography>
    <Typography variant="h3" color="secondary">Tipografía</Typography>
     <Typography variant="h3" component="h1" color="secondary">Tipografía</Typography>
    <Typography variant="h4" color="error">Tipografía</Typography>
    <Typography variant="h5" color="initial" align="center">Tipografía</Typography>
    <Typography variant="h6" color="initial">Tipografía</Typography>
    <Typography variant="subtitle1" color="initial">subtitulo</Typography>
    <Typography variant="subtitle2" color="initial">subtitulo</Typography>
    <Typography  variant="body1" color="initial">body</Typography>
    <Typography variant="body2" color="initial" noWrop>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis vitae est quam voluptates, sunt amet pariatur ut sit vel repellendus eaque dignissimos minus numquam aut. Itaque maiores fuga nisi?</Typography>
    <Typography variant="caption" color="initial">caption</Typography>
    <Typography variant="button" color="initial">button</Typography>
    <Typography variant="overline" color="initial">overline</Typography>
    <Typography variant="srOnly" color="initial">srOnly</Typography>
    <Typography variant="inherit" color="initial">inherit</Typography>
    </Box>
    <Box>
        <Button>primary</Button>
        <Button variant="contained">primary</Button>
        <Button variant="outlined" size="small" color="primary">Primary</Button>
        <Button variant="contained" size="medium" color="primary" disabled>elimina sobra</Button>
        <Button variant="contained" size="large" color="primary" href="#">Tipo enlace</Button>
        <Button variant="contained" color="primary" disableElevation>Disable elevation</Button>
        <Button variant="outlined" onClick={() => { alert('pulsado') }}>alerta</Button>
        
        <IconButton color="secondary" aria-label="upload picture" component="span">
           <PhotoCameraFrontSharp />
        </IconButton>
        
      
    </Box>
    <Box>
        <Typography variant="h4" align="center" color="initial">Iconos</Typography>
       <Typography variant="h6" color="initial">Tenemos que instalar via npm</Typography>
        <Typography variant="h6" color="initial">he tenido que instalar material core para que funcione</Typography>
        <Typography variant="h6" color="initial">para decargar iconos https://v4.mui.com/es/components/material-icons/#material-icons</Typography>
        <HomeWork />
         <HomeWork color="action" />
        <HomeWork style={{ fontSize: 40 }}/>{/* 4 */}
       <WhatsApp/>
        <WhatsApp color="secondary"/>
        <WhatsApp color="secondary" fontSize="large"/>

   
    </Box>
    <Box>
        <Typography variant="h2" color="initial">GENERAR ESTILOS SIN DEFAULT</Typography>
        <Typography variant="body2" color="initial">https://www.youtube.com/watch?v=OK00k47RMPI&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=5</Typography>
        <Typography variant="h5" color="initial"> {/* 1 */}impotamos makeStyles </Typography>
        <Typography variant="h5" color="initial">{/* 2 */} generamos una constante</Typography>
        <Typography variant="h5" color="initial">{/* 3 */} utilizamos el gancho</Typography>
        <Typography variant="h5" color="initial">{/* 4 */} alicamos al objeto</Typography>
        <Button className={classes.boton} >
          botón btn
        </Button>
    </Box>
    <Box>
        <Typography variant="h1" color="initial">THEME</Typography>
        <Typography variant="body2" color="initial">https://www.youtube.com/watch?v=xIIJfmDnvPE&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=6</Typography>
        <Typography variant="h6" color="initial">los valores viene determminados aquí:https://v4.mui.com/es/customization/default-theme/ </Typography>
        <Typography variant="h6" color="initial">creamos una carpeta theme y un archivo themeDark.js</Typography>
        <Typography variant="h6" color="initial">nesesitamos importar createMuiTheme de @material-ui/core</Typography>
        <Typography variant="h6" color="initial">en app</Typography>
        <Typography variant="h6" color="initial">importamos el temeDatk y themeProvider</Typography>
        <Typography variant="h6" color="initial">lo envolvemos con el atributo theme= themeDark</Typography>
        <Typography variant="h6" color="initial">de vuelta en theme dark podemos cambiar los valores por defecto</Typography>
        <Typography variant="h6" color="initial">{/* 5 */} cambiamos la paleta</Typography>
        <Typography variant="h6" color="initial">CAMBIAR FUENTE</Typography>
        <Typography variant="h6" color="initial">vamos a google font , eligimos una</Typography>
        <Typography variant="h6" color="initial">la pegamos ne index.css</Typography>
        <Typography variant="h6" color="initial">vamos a theme: {/* 6 */}</Typography>
        
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>

    
    </Box>
    <Box>
        <Typography variant="h1" color="initial">CAMPOS DE TEXTO</Typography>
         <Typography variant="h6" color="initial">https://www.youtube.com/watch?v=sTdt2cJS2dg&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=7</Typography>
        <Typography variant="h6" color="initial">importamos import  |TextField|  from '@mui/material'</Typography>
       <Typography variant="h6" color="initial">TextField equivale a un input</Typography>
        <form noValidate autoComplete='off'>
            <TextField/>
        </form>

        <Typography variant="h6" color="initial">con etiqueta</Typography>
        <form noValidate autoComplete='off'>
            <TextField className={classes.field}
             label ="etiqueta de Nota" color="secondary" required/>
        </form>
        <Typography variant="h6" color="initial">required para campo obligatorio</Typography>
        <Typography variant="h6" color="initial">con varias lineas </Typography>
       <form noValidate autoComplete='off'>
            <TextField className={classes.field} multiline rows={4}
             label ="etiqueta de Nota" color="secondary" required/>
        </form>
        <Typography variant="h6" color="initial">si queremos que cubra todo el ancha, solo poner fullWidth</Typography>
        <Typography variant="h6" color="initial">interesante; a partir del minuto 10 explica como cambiar el color del estado si hay un error cuando el usuario rellena el formulario</Typography>
        <Typography variant="h1" color="initial">RADIOBUTTON</Typography>
        <Typography variant="h6" color="initial">https://www.youtube.com/watch?v=TtJ3eCLYoRQ&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=8</Typography>
         <Radio
        
        
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
        <Typography variant="h6" color="initial">no lo he visto entero el video</Typography>
        <Typography variant="h6" color="initial"></Typography>
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
    </Box>
    <Box>
        <Typography variant="h1" color="initial">GRID</Typography>
       <Typography variant="h6" color="initial">Grid es una cuadricula, lo primero que necesitamos es un ontenedor de cuadricula</Typography>
        <Grid container>
            <Grid>
                <Paper>1</Paper>
            </Grid>
            <Grid>
                <Paper>2</Paper>
            </Grid>
            <Grid>
                <Paper>3</Paper>
            </Grid>
            <Grid>
                <Paper>4</Paper>
            </Grid>
            <Grid>
                <Paper>cinco</Paper>
            </Grid>

        </Grid>
         <Typography variant="h6" color="initial">asi , se colocan uno alado del otro, ocupando el espacio del texto</Typography>
          <Grid container>
            <Grid item md={3}xs={12}sm={6} lg={4}>
                <Paper>1</Paper>
            </Grid>
            <Grid item md={3}xs={12}sm={6} lg={4}>
                <Paper>2</Paper>
            </Grid>
            <Grid item md={3}xs={12}sm={6} lg={4}>
                <Paper>3</Paper>
            </Grid>
            <Grid item md={3}xs={12}sm={6} lg={4}>
                <Paper>4</Paper>
            </Grid>
            <Grid item md={3}xs={12}sm={6} lg={4}>
                <Paper>cinco</Paper>
            </Grid>

        </Grid>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography> 
    </Box>
    <Box>
        <Typography variant="h1" color="initial">Layout y navegacion</Typography>
         <Typography variant="h6" color="initial">https://www.youtube.com/watch?v=DSuJLPRsdZQ&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=12</Typography>
        <Typography variant="h6" color="initial">en la pagina de material ui esta en componentes - cajon</Typography>
         <Typography variant="h6" color="initial">https://www.youtube.com/watch?v=Ix1LZGBSp-E&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58&index=13</Typography>
       
        <Typography variant="h6" color="initial"></Typography> 
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography> 
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography> 
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
         <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography> 
        <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
     <Box>
        <Typography variant="h1" color="initial">Stepper</Typography>
        <Typography variant="body2" color="initial">4:55 https://www.youtube.com/watch?v=4w1UmgkPcUk&t=13602s </Typography>
        <Typography variant="h6" color="initial">es un mecanismo que nos permite pasar de un pasa al otro y el paso ya pasado se coloca como ok </Typography>
        <Typography variant="h6" color="initial">necesitamos un array con los pasos (Material 1) </Typography>
        <Typography variant="h6" color="initial">hacemos un map (material 2) usamos otro componete, step y stepLabel</Typography>
        <Typography variant="h6" color="initial">creamos un estado para el activeStep y la funcion handleNext  y otra bandleback(material 3)</Typography>
        <Typography variant="h6" color="initial">y ponemos el estado es el Steper (material 4)</Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>
        
        <Typography variant="h6" color="initial"></Typography>
        <Typography variant="h6" color="initial"></Typography>

    
    </Box>
    </Box>
    </>

  )
}

export default MaterialUi