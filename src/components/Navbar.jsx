import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Badge, Button, Hidden } from '@material-ui/core';
import Logo from '../assets/behance.png';
import {  ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import{useStateValue} from "../StateProvider";/* 42 */
import {auth} from '../components/FirebaseAdmin'
import { actionTypes } from '../reducer';
import {useHistory} from "react-router-dom"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
  grow:{/* 15 */
    flexGrow:1,
  },
  button:{/* 11 */
    marginLeft:theme.spacing(2)
  },
  imageLogo:{ /* 10 */
      marginLeft:'20px',
      height: '2rem',
      backgroundColor:"#fff"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [{basket,user}, dispatch]= useStateValue() /* 43 */ /* 90 */
  const history = useHistory()/* 97 */
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleAuth=()=>{/* 94 */
    if(user){
      auth.signOut();
      dispatch({ /* 95 */
        type:actionTypes.EMPTY_BASKET,
        basket:[],
      });
        dispatch({ /* 100 */
        type:actionTypes.SET_USER,
        user:null,
      });
      history.push('/')/* 96 */

    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Link to="/" >{/* 28 */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
             <img src={Logo} className={classes.imageLogo} alt="logo"/>{/* 9 */}
          </IconButton>
          </Link>
          <Hidden xsDown> {/* 18 */}
          <Typography variant="h6" color="textPrimary" noWrap>
            Tienda online Be
          </Typography>
          </Hidden>
          <div className={classes.grow}/>{/* 14 */}
          <Typography variant="h6" color="textPrimary"> Hola {user? user.email:"Guest"}</Typography>{/* 91 */}
          <div className={classes.button}>
            <Link to="/signin"> {/* 62 */}
                <Button onClick={handleAuth}/* 93 */ variant='outlined' color="inherit"><strong>{user? "salir":"Ingresar"}</strong></Button>{/* 8 */} {/* 92 */}
                </Link>
          </div>
          <Link to="/checkout-page">{/* 29 */}
          <IconButton arial-label ='show cart items' color="inherit">{/* 13 */}
               <Badge badgeContent={basket?.length}/* 44 */ color="secondary">
                    <ShoppingCart fontSize="lange"/>
               </Badge>
                
          </IconButton>
          </Link>
          
          
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
     
    </div>
  );
}
