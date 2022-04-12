import {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography} from '@material-ui/core';
import Checkbox  from '@material-ui/core/Checkbox';
import {Link as RouteLink,useHistory} from "react-router-dom";/*64  */ /* 65 */
import {auth} from '../components/FirebaseAdmin';
import {createUserWithEmailAndPassword} from 'firebase/auth'/* L3 */





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
     const [email, setEmail] = useState("");/* 67 */ /* L1 */
  const [password, setPassword] = useState("");/* 67 */  /* L1 */
  const history = useHistory();/* 74 */
  

    /* const signup = (e) => { *//* 71 */
   /*  e.preventDefault(); *//* 72 */
   /*  auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => { *//* 73 */
       /*  console.log(auth);
        if (auth) {
          history.push("/"); *//* 75 */
    /*     }
      })
      .catch((err) => alert(err.message));
  }; */

  async function signup(e){ /* L4 */
    e.preventDefault();
    const correo= e.target.email.value; /* L5 */
    const contraseña= e.target.password.value; /* L5 */
    const Usuario = await createUserWithEmailAndPassword(auth,correo,contraseña); /* L6 */
    console.log(Usuario);
    history.push("/");
     
     

  }
 
/*   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }; */

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={signup} /* L1 */  /* onSubmit={handleSubmit} */ sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={email}/* 68 */
                 onChange={e=>setEmail(e.target.value)}/* 69 */
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField value={password}/* 68 */
                  onChange={e=>setPassword(e.target.value)}/* 69 */
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quiero recibir promociones y actualizaciones por correo electrónico."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              /* onClick={signup} *//* 70 */ /* L2 */
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>

                <RouteLink to="signin">{/* 66 */}
                  ¿Ya tienes una cuenta? Ingresa
               </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}