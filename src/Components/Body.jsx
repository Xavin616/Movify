import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import {  Grid, Paper, Typography } from '@material-ui/core';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import axios from 'axios';

const useGridStyles = makeStyles(({ breakpoints }) => ({
    root: {
      [breakpoints.up('md')]: {
        justifyContent: 'center',
      },
    },
  }));

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '15px 30px',
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        height: '100%',
        padding: '30px',
        backgroundColor: '#0d0d0dcc',
    },
    heading: {
        marginBottom: '20px',
        color: 'cyan',
        fontSize: '2em',
        fontFamily: 'Big Shoulders Stencil Display, cursive',
    },
    gridList: {
        overflowX: 'scroll',
        padding: '0px 5px',
    }
}))

const useCardStyles = makeStyles({
    root: {
        width: 225,
        //minWidth: 225,
        borderRadius: 10, 
        height: 450,
        backgroundColor: 'transparent',
        border: 'none',
    },
    media: {
        height: 337.5,
        //minHeight: 337.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    content: {
        backgroundColor: 'transparent',
        color: 'white',
    },
    title: {
        marginTop: -4,
    },
    date: {
        marginTop: 0,
    }

})

const CustomCard = ({classes, image, title, date}) => {
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent className={classes.content}>
                <Typography className={classes.title} variant="h6">
                    {title}
                </Typography>
                <p className={classes.date}>{date}</p>
            </CardContent>
        </Card>
    );
};

function Body() {
    let content1 = null;
    let content2 = null;
    let content3 = null;
    
    const gridStyles = useGridStyles();
    const styles = useStyles()
    const classes = useCardStyles()
    
    const url1 = "https://api.themoviedb.org/3/movie/now_playing?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
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
        var datan = newData.slice(0, 7)
        content1 = 
        datan.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
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
        var data = popData.slice(0, 7)
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
        var adata = airData.slice(0, 7)
        content3 = 
        adata.map((datum, key) => 
            <Grid item xs={11} sm={6} md={3}>
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
                         <Typography className={styles.heading} variant="h4">
                             New Movies
                         </Typography>
                         <Grid container classes={gridStyles} className={styles.gridList} spacing={4} wrap="nowrap">
                             {content1}
                         </Grid>
                     </Paper>
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                         <Typography className={styles.heading} variant="h4">
                             Popular Series
                         </Typography>
                         <Grid container classes={gridStyles} className={styles.gridList} spacing={4} wrap="nowrap">
                             {content2}
                         </Grid>
                    </Paper>
                 </Grid>
                 <Grid item xs={12}>
                    <Paper className={styles.paper}>
                        <Typography className={styles.heading} variant="h4">
                            Airing Today
                         </Typography>
                         <Grid container classes={gridStyles} className={styles.gridList} spacing={4} wrap="nowrap">
                             {content3}
                         </Grid>
                    </Paper> 
                 </Grid>
             </Grid>
        </div>
    )
};

export default Body
