import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {  Grid, Paper, Typography, Box } from '@material-ui/core';
import CustomCard from './Subcomponents/CustomCard';
import axios from 'axios';
//import { ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '15px 30px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '0px 10px',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        height: 'auto',
        padding: '20px 25px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '20px 10px 5px 10px',
        },
        backgroundColor: '#0d0d0dde',
        overflow: 'hidden',
    },
    heading: {
        marginBottom: '10px',
        color: 'cyan',
        fontSize: '1.6em',
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.2em',
        },
        
    },
    gridList: {
        width: 100 + '%',
        height: 'max-content',
        display: 'flex',
        padding: '0px 5px',
        overflow: 'scroll hidden',
    }
}))

const useCardStyles = makeStyles((theme) => ({
    root: {
        margin: '0px 12px',
        minWidth: 185,
        height: 98+'%',
        backgroundColor: 'transparent',
        border: 'none',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            minWidth: 130,
            margin: '0px 5px',
            borderRadius: 5,
            height: 94+'%',
        },
    },
    media: {
        height: 'auto',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
        },
    },
    content: {
        padding: 15,
        marginTop: 5, 
        backgroundColor: 'transparent',
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
        },
    },
    title: {
        marginTop: -9,
        fontSize: '1em',
        fontWeight: 'bolder',
        fontFamily: 'Source Sans Pro, sans-serif',
        padding: 0,
    },
    date: {
        marginTop: 5,
    }

}));


function Body() {
    let content1 = null;
    let content2 = null;
    let content3 = null;

    const styles = useStyles()
    const classes = useCardStyles()
    
    const url1 = "https://api.themoviedb.org/3/movie/popular?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url2 = "https://api.themoviedb.org/3/tv/popular?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url3 = "https://api.themoviedb.org/3/tv/airing_today?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1";
    
    const [newData, setNewData] = useState(null);
    useEffect(() => {
            axios.get(url1)
                .then(response => {
                    let datum =  response.data.results;
                    console.log(datum)
                    setNewData(datum)
                })
                .catch((error) => {
                    console.log(error)
                })
        }, [url1])

    const [popData, setPopData] = useState(null);
    useEffect(() => {
        axios.get(url2)
            .then(response => {
                let popdatum =  response.data.results;
                console.log(popdatum)
                setPopData(popdatum)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [url2])

    const [airData, setAirData] = useState(null);
    useEffect(() => {
        axios.get(url3)
            .then(response => {
                let airdatum =  response.data.results;
                console.log(airdatum)
                setAirData(airdatum)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [url3])
    
    if (newData) {
        var datan = newData.slice(0, 20)
        content1 = 
        datan.map((datum, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_title}
                    date={datum.release_date}
                />
            </Grid>
        )
    }

    if (popData) {
        var data = popData.slice(0, 25)
        content2 = 
        data.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                />
            </Grid>
        )
    }

    if (airData) {
        var adata = airData.slice(0, 25)
        content3 = 
        adata.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                />
            </Grid>
        )
    }

    return (
        <div className={styles.mainBody}>
             <Grid container spacing={1}>
                 <Grid item xs={12}>
                     <Paper className={styles.paper}>
                         <div className="header">
                            <Typography className={styles.heading} variant="h4">
                                New Movies
                            </Typography>
                         </div>
                         <Box className={styles.gridList}>
                             {content1}
                         </Box>
                     </Paper>
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                         <Typography className={styles.heading} variant="h4">
                             Popular Series
                         </Typography>
                         <Box className={styles.gridList}>
                             {content2}
                         </Box>
                    </Paper>
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                        <Typography className={styles.heading} variant="h4">
                            Airing Today
                         </Typography>
                         <Box className={styles.gridList}>
                             {content3}
                         </Box>
                    </Paper> 
                 </Grid>
             </Grid>
        </div>
    )
};

export default Body
