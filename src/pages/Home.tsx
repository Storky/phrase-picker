import React from 'react';

import Container from '@mui/material/Container';
import cities from 'data.json';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TourCard from 'components/TourCard';

const Home = () => {
    return (

        <React.Fragment>
            <Container maxWidth="lg" sx={{marginY: 5}}>

                {cities.map((city) => (
                    <React.Fragment>
                        <Typography
                            variant={'h4'}
                            component={'h2'}
                            marginTop={5}
                            marginBottom={3}
                        >
                            Top {city.name} Tours
                        </Typography>

                        <Grid container spacing={5}>
                            {city.tours.map((tour) => (
                                <TourCard tour={tour} key={tour.name}/>
                            ))}
                        </Grid>
                    </React.Fragment>
                ))}

                {/*https://www.youtube.com/watch?v=o1chMISeTC0*/}

            </Container>
        </React.Fragment>
    )
}

export default Home;
