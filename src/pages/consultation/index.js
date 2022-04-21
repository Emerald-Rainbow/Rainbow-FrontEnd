import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../../components/housing/Navbar'
import { Form, Modal, Table } from 'react-bootstrap';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import { TextField } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://medium.com/@abhishekkurian/about">
         Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 


const theme = createTheme();

export default function Album() {


const [show, setShow] =useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] =useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "RAINBOW",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Consultation Fee",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert("Payment ID : "+response.razorpay_payment_id);
        alert("Order ID : "+response.razorpay_order_id);
        handleClose();
      },
      
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <ProtectedRoute>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <main>
        
        <Container sx={{ py: 2 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Dr.Abhishek Kurian
        </Typography>
        <Typography>
        Chief mental health consultant
                     <br/>
                     
                     Hopewell Hospital
                    
                    <br/>
                     Counselling Psychology
                     <br/><b>Premium</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleShow}>BOOK</Button>
      <Modal show={show} onHide={handleClose} size="md" style={{ marginTop:"45px"}}centered>
        <Modal.Header closeButton>
          <Modal.Title>BOOK APPOINTMENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <TextField
                    autoComplete="given-name"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="NAME"
                    autoFocus
                    size='small'
                  />
            </Form.Group>
            <br/>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
              <TextField
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="EMAIL"
                    autoFocus
                    size='small'
                  />
            </Form.Group>
            <br/>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
              <TextField
                    required
                    fullWidth
                    id="phone"
                    label="PHONE NO:"
                    name="phone"
                    autoComplete="phone number"
                    size='small'
                  />
            </Form.Group>
            <br/>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
              <TextField
                    required
                    fullWidth
                    id="code"
                    label="TREATMENT CODE"
                    name="code"
                    size='small'
                    autoComplete="code"
                  /><Button variant="text" onClick={handleShow1}>Click Here</Button>
            </Form.Group>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput3">
              <TextField
                    disabled
                    fullWidth
                    id="amount"
                    label="AMOUNT"
                    name="amount"
                    size='small'
                    value='1000'
                    autoComplete="amount"
                  />

            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" onClick={makePayment}>
            PAY AND BOOK
          </Button>
        </Modal.Footer>
      </Modal>
        <Button size="small" onClick={handleShow1}>RATES</Button>
         <Modal show={show1} onHide={handleClose1} size="small"centered>
        <Modal.Header closeButton>
          <Modal.Title>RATES</Modal.Title>
        </Modal.Header>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>CODE</th>
      <th>TREATMENT</th>
        <th>RATES (in Rs.)</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>1</b></td>
      <td><b>Test</b></td>
      <td><b>1000/-</b></td>
    </tr>
    <tr>
      <td><b>2</b></td>
      <td><b>Test</b></td>
      <td><b>1000/-</b></td>
    </tr>
    <tr>
      <td><b>3</b></td>
      <td><b>Test</b></td>
      <td><b>1000/-</b></td>
    </tr>
  </tbody>
</Table>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </CardActions>
    </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider></ProtectedRoute>
  );
}