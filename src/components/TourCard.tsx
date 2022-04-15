import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: "caption",
                    },
                    style: {
                        fontSize: 9,
                    }
                }

            ]
        },
    },
});

const TourCard = () => {
    return <ThemeProvider theme={theme}>
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img
                    className={"img"}
                    src="https://files.worldwildlife.org/wwfcmsprod/images/Mountains_New_Hero_Image/hero_small/1bs3lrclhi_mountains_hero.jpg" alt=""
                />

                <Box padding={1}>
                    <Typography variant={'subtitle1'} component={'h2'}>
                        Lorem ipsum dolor.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <AccessTimeIcon sx={{width: 12.5}}/>

                        <Typography variant={'body2'} component={'p'} marginLeft={0.5}>5 hours</Typography>
                    </Box>

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                    }} marginTop={3}>
                        <Rating name="read-only" value={4.5} readOnly precision={0.5} size={'small'} />

                        <Typography variant={'body2'} component={'p'} marginLeft={0.5}>4.5</Typography>
                        <Typography variant={'caption'} component={'p'} marginLeft={1.5}>(655 reviews))</Typography>

                    </Box>

                    <Box>
                        <Typography variant={'h6'} component={'h3'} marginTop={0}>From C $355</Typography>
                    </Box>

                </Box>



            </Paper>
        </Grid>
    </ThemeProvider>
}

export default TourCard;
