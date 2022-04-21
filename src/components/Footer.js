import { Box, Container, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 2 }}
        py={{ xs: 5, sm: 2}}
        bgcolor="#f0f7f6"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><b>Help</b></Box>
              <Box>
                <Link href="/" color='inherit' underline="none">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><b>Account</b></Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}><b>Messages</b></Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" underline="none">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Rainbow-Emerald &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}