import {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography} from '@material-ui/core';
import Checkbox  from '@material-ui/core/Checkbox';
import {Link as RouteLink,useHistory} from "react-router-dom";/*64  */ /* 65 */
import {auth} from '../components/FirebaseAdmin';
import {signInWithEmailAndPassword} from 'firebase/auth'

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

export default function SignIn() {
     const [email, setEmail] = useState("");/* 76 */
  const [password, setPassword] = useState("");/* 76 */
  const history = useHistory()/* 74 */
    async function signin  (e)  {/* 80 */
    e.preventDefault();/* 82 */
    await signInWithEmailAndPassword(auth,email, password);
     history.push("/");
      /* .then((auth) => history.push("/"))
      .catch((err) => alert(err.message)); *//* 83 */
  };
   
   

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
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
            Ingresar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField value={email}/* 77 */
            onChange={e=>setEmail(e.target.value)}/* 78 */
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField value={password}/* 77 */
            onChange={e=>setPassword(e.target.value)}/* 78 */
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signin}/* 79 */
            >
             Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste la contraseña?
                </Link>
              </Grid>
              <Grid item>
                  <RouteLink to="signup">{/* 63 */}
                {/* <Link href="#" variant="body2"> */}
                  {"No tienes Cuenta? Regístrate"}
                {/* </Link> */}
                </RouteLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}