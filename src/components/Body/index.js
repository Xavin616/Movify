import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import CustomCard from '../subcomponents/CustomCard';
import axios from 'axios';
import { useMediaQuery } from '@material-ui/core';
import load from '../images/load.gif'
import GridItem from './GridItem';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '0px 0px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: 0,
        },
        display: 'flex',
        flexDirection: 'column',
    },
}))

const useCardStyles = makeStyles((theme) => ({
    root: {
        margin: '0px 7.5px',
        //minWidth: 162,
        width: 160,
        height: 95.2+'%',
        backgroundColor: '#060806',
        border: 'none',
        paddingBottom: 10,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            width: 130,
            margin: '0px 6px',
            borderRadius: 5,
            height: 93+'%',
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
        padding: '18px 13px 15px 18px', 
        marginTop: 5, 
        backgroundColor: 'transparent',
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            padding: '14px 13px 15px 12px',
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
    const isMediaSmall = useMediaQuery('(max-width: 400px)')

    let number;
    (isMediaSmall ? number = 0 : number = 0)

    const styles = useStyles()
    const classes = useCardStyles()
    
    const url1 = "https://api.themoviedb.org/3/trending/movie/day?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url2 = "https://api.themoviedb.org/3/trending/tv/day?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1"
    const url3 = "https://api.themoviedb.org/3/tv/airing_today?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1";
    const url4 = "https://api.themoviedb.org/3/discover/tv?api_key=546988151aeca0994227ca10917c13db&language=en-US&sort_by=popularity.desc&first_air_date.gte=2019&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_networks=213"

    const [newData, setNewData] = useState({loading: false, data: null, error:false});
    useEffect(() => {
            setNewData({loading: true, data: null, error: false,})
            axios.get(url1)
                .then(response => {
                    let datum =  response.data.results;
                    setNewData({loading: false, data: datum, error: false,})
                })
                .catch((error) => {
                    console.error(error)
                    setNewData({loading: false, data: null, error: true,})
                })
        }, [url1])

    const [popData, setPopData] = useState({loading: false, data: null, error:false});
    useEffect(() => {
        setPopData({loading: true, data: null, error: false,})
        axios.get(url2)
            .then(response => {
                let popdatum =  response.data.results;
                setPopData({loading: false, data: popdatum, error: false,})
            })
            .catch((error) => {
                console.error(error)
                setPopData({loading: false, data: null, error: true,})
            })
    }, [url2])

    const [airData, setAirData] = useState({loading: false, data: null, error:false});
    useEffect(() => {
        setAirData({loading: true, data: null, error: false,})
        axios.get(url3)
            .then(response => {
                let airdatum =  response.data.results;
                setAirData({loading: false, data: airdatum, error: false,})
            })
            .catch((error) => {
                console.error(error)
                setAirData({loading: false, data: null, error: true,})
            })
    }, [url3])
    
    const [netData, setNetData] = useState({loading: false, data: null, error:false});
    useEffect(() => {
        setNetData({loading: true, data: null, error: false,})
        axios.get(url4)
            .then(response => {
                let datum =  response.data.results;
                setNetData({loading: false, data: datum, error: false,})
            })
            .catch((error) => {
                console.error(error)
                setNetData({loading: false, data: null, error: true,})
            })
        }, [url4])

    let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    if (newData.loading) {
        content1 =
            list.map((i, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
            </Grid>
        )
    }

    if (newData.data) {
        var datan = newData.data.slice(0, 15)
        content1 = 
        datan.map((datum, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original'+ datum.poster_path}
                    title={datum.original_title}
                    date={datum.release_date}
                    id={datum.id}
                />
            </Grid>
        )
    }


    if (popData.loading) {
        content2 =
            list.map((i, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
            </Grid>
        )
    }

    if (popData.data) {
        var dated = popData.data.slice(0, 15)
        content2 = 
        dated.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original'+ datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                    id={datum.id}
                />
            </Grid>
        )
    }

    if (airData.loading) {
        content3 =
            list.map((i, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
            </Grid>
        )
    }

    if (airData.data) {
        var adata = airData.data.slice(0, 25)
        content3 = 
        adata.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original'+ datum.poster_path}
                    title={datum.original_name}
                    date={datum.first_air_date}
                    id={datum.id}
                />
            </Grid>
        )
    }

    if (netData.loading) {
        content4 =
            list.map((i, key) => 
            <Grid item xs={9} sm={6} md={3}> 
                <CustomCard
                    type={'movie'}
                    classes={classes}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
            </Grid>
        )
    }

    if (netData.data) {
        var netdata = netData.data.slice(0, 15)
        content4 = 
        netdata.map((datum, key) => 
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    type={'tv'}
                    classes={classes}
                    image={'https://image.tmdb.org/t/p/original'+ datum.poster_path}
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
                 <GridItem content={content1} name={"What's Trending in Movies"} />
                 <GridItem content={content2} name={"What's Trending on TV"} />
                 <GridItem content={content4} name={"Hot on Netflix"} />
                 <GridItem content={content3} name={"Airing Today on Tv"} />
             </Grid>
        </div>
    )
};

export default Body