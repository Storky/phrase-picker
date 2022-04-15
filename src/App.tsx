import React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import TourCard from 'components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';




function App() {
  return (
    <React.Fragment>
        <CssBaseline />

        <Container maxWidth="lg">
            <Grid container spacing={5}>

                <TourCard/>
                <TourCard/>
                <TourCard/>
                <TourCard/>

            </Grid>

            {/*https://www.youtube.com/watch?v=o1chMISeTC0*/}

        </Container>
    </React.Fragment>
  );
}

export default App;
