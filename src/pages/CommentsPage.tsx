import React from 'react';

import Container from '@mui/material/Container';
import cities from 'data.json';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TourCard from 'components/TourCard';
import CommentsForm from 'forms/CommentsForm';

const CommentsPage = () => {
    return (

        <React.Fragment>
            <Container maxWidth="lg" sx={{marginY: 5}}>


                <CommentsForm/>

            </Container>
        </React.Fragment>
    )
}

export default CommentsPage;
