import * as React from 'react';
import {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import { LoadingButton } from '@mui/lab';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'

import {useContext} from 'react';
import UserContext from '@context/user/UserContext';
import {setUserProfile} from '@firebaseUtils/userControl';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://rainbow-emerald.netlify.app/">
        Rainbow-Emerald
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function editProfile(props) {
    const {user, userLoading, userError, logout} = useContext(UserContext);

    const router = useRouter();

    const [userData, setUserData] = useState({});

    const [loading, setLoading] = useState(false);
    const [profilePicUrl,setProfilePicUrl] = useState("");
  
   
  
  async function handleSubmit(e){
    setLoading(true)
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setUserData({
      uid:user.uid,
      username:data.get('username'),
      phone:data.get('phone'),
      bio:data.get('bio'),
      nationality:data.get('nationality'),
      photoURL : user.photoURL

    }); 
  };

useEffect(async ()=>{
  if(Object.keys(userData).length != 0)
  {
    console.log("Saving" , userData);
    await setUserProfile(userData);
    setLoading(false);
    router.push(`/`);
    // router.push(`profile/${user.uid}`);
  }
},[userData])

  return (
    <ProtectedRoute>
      <ThemeProvider theme={theme}>
        <Container component="main" sx={{marginTop:'1rem', paddingTop:'0'}} maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h3">
              Edit Your Profile!
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width:'4rem', height:'4rem' }} src="" alt="Profile Picture">
              {user && user.displayName[0]}
            </Avatar>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone number"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    id="bio"
                    label="Enter your Bio"
                    name="bio"
                    autoComplete="bio"
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    id="nationality"
                    label="Nationality"
                    name="nationality"
                    autoComplete="nationality"
                  />
                </Grid>
              
              
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <LoadingButton
                type="submit"
                loading={loading}
                disabled={loading}
                fullWidth
                variant="contained"
                sx={{ mt: 2}}
              >
                Save
              </LoadingButton>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2 }} />
        </Container>
      </ThemeProvider>
    </ProtectedRoute>
  );
}