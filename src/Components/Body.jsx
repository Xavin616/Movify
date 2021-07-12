import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {  Grid, Paper, Typography, Box } from '@material-ui/core';
import CustomCard from './Subcomponents/CustomCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from './Subcomponents/Query';
//import { ChevronRight } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '10px 10px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '0px 10px',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        height: 'auto',
        padding: '15px 20px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '20px 10px 5px 0px',
        },
        backgroundColor: '#060806',
        overflow: 'hidden',
    },
    heading: {
        marginLeft: 6,
        marginBottom: '10px',
        marginTop: 2,
        color: 'white',
        //fontWeight: 'bold',
        fontSize: '1.4em',
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.2em',
        },
        '&:hover': {
            color: 'cyan',
        }
        
    },
    gridList: {
        width: 100 + '%',
        height: 'max-content',
        display: 'flex',
        padding: '8px 5px 0px 5px',
        overflow: 'scroll hidden',
    }
}))

const useCardStyles = makeStyles((theme) => ({
    root: {
        margin: '0px 8px',
        minWidth: 162,
        height: 96+'%',
        backgroundColor: 'transparent',
        border: 'none',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            minWidth: 125,
            margin: '0px 5px',
            borderRadius: 5,
            height: 94+'%',
        },
        transition: '0.2s',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.05)',
        }
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
        padding: '15px 5px 5px 6px', 
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
        fontSize: '0.89em',
        fontWeight: 'bolder',
        fontFamily: 'Source Sans Pro, sans-serif',
        padding: 0,
    },
    date: {
        fontSize: '0.8em',
        marginTop: 5,
    }

}));


function Body() {
    let content1;
    let content2;
    let content3;
    let content4;

    let number;

    let isPageSmall = useMediaQuery('(max-width: 400px)');

    (isPageSmall ? number = 0 : number = 1)

    const styles = useStyles()
    const classes = useCardStyles()
    
    const url1 = "https://api.themoviedb.org/3/movie/popular?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url2 = "https://api.themoviedb.org/3/tv/popular?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url3 = "https://api.themoviedb.org/3/tv/airing_today?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1";
    const url4 = "https://api.themoviedb.org/3/discover/tv?api_key=546988151aeca0994227ca10917c13db&language=en-US&sort_by=popularity.desc&first_air_date.gte=2019&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_networks=213"

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
    
    const [netData, setNetData] = useState(null);
    useEffect(() => {
            axios.get(url4)
                .then(response => {
                    let datum =  response.data.results;
                    console.log(datum)
                    setNetData(datum)
                })
                .catch((error) => {
                    console.log(error)
                })
        }, [url4])

    if (newData) {
        var datan = newData.slice(0, 20)
        content1 = 
        datan.map((datum, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_title}
                    date={datum.release_date}
                    id={datum.id}
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
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                    id={datum.id}
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
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                    id={datum.id}
                />
            </Grid>
        )
    }

    if (netData) {
        var netdata = netData.slice(0, 25)
        content4 = 
        netdata.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                    id={datum.id}
                />
            </Grid>
        )
    }

    return (
        <div className={styles.mainBody}>
             <Grid container spacing={number}>
                 <Grid item xs={12}>
                     <Paper className={styles.paper}>
                         <div className="header">
                            <Typography className={styles.heading} variant="h4">
                                <Link to="/category/movie/popular">
                                    Popular Movies
                                </Link>
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
                            <Link to="/category/tv/popular">
                                Popular On Tv
                            </Link>
                         </Typography>
                         <Box className={styles.gridList}>
                             {content2}
                         </Box>
                    </Paper>
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                        <Typography className={styles.heading} variant="h4">
                            <Link to="/category/tv/upcoming">
                                Airing Today on Tv
                            </Link>
                         </Typography>
                         <Box className={styles.gridList}>
                             {content3}
                         </Box>
                    </Paper> 
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                        <Typography className={styles.heading} variant="h4">
                            <Link to="/category/tv/upcoming">
                                Hot off Netflix
                            </Link>
                         </Typography>
                         <Box className={styles.gridList}>
                             {content4}
                         </Box>
                    </Paper> 
                 </Grid>
             </Grid>
        </div>
    )
};

export default Body
