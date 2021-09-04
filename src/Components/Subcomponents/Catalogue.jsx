import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CustomCard from './CustomCard';
import load from '../load.gif';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '5px 4px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '0',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        height: 'auto',
        padding: '0px 0px',
        backgroundColor: 'transparent',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '1px',
        },
        overflow: 'hidden',
        color: 'white',
    },
    grid: {
        width: 100+'%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 0,
    },
}));

const useCardStyles = makeStyles((theme) => ({
    root: {
        width: 180,
        height: 94+'%',
        margin: '0px 0px 22px 0px',
        backgroundColor: '#060806',
        border: 'none',
        transition: '0.5s',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)',
        },
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            width: '87%',
            margin: '15px 6px 5px 6px',
            height: 240,
            position: 'relative',
            borderRadius: 10,
        },
    },
    media: {
        height: 'auto',
        width: 100 + '%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            height: '100%',
        },
    },
    content: {
        padding: 15,
        marginTop: 5, 
        backgroundColor: '#060806',
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            padding: '110px 90px 20px 15px',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: '#06080670',
            bottom: 0,
        },
    },
    title: {
        marginTop: -9,
        fontSize: '0.89em',
        fontWeight: 'bolder',
        fontFamily: 'Source Sans Pro, sans-serif',
        padding: 0,
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            marginTop: 20,
            fontSize: '1.38em',
            textShadow: '0px 1px 3px black',
        },
    },
    date: {
        fontSize: '0.8em',
        marginTop: 5,
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            fontWeight: 'bold',
            fontSize: '0.99em',
        },
    }

}));

function Catalogue(props) {
    let isPageSmall = useMediaQuery('(max-width: 400px)');

    const data = props.data;
    let media = props.media;
    let content;

    const styles = useStyles();
    const cardstyle = useCardStyles();

    let list = [1,2,34,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    if (data.loading) {
        content =
            list.map((i, key) =>  
                <CustomCard
                    type={'movie'}
                    classes={cardstyle}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
        )
    }

    if (data.data) {
        console.log(data.data)
        content = 
            data.data.map((datum, key) =>
                <CustomCard 
                    type={media}
                    classes={cardstyle}
                    image={datum.poster_path !== null ? 'https://image.tmdb.org/t/p/original'+  ( isPageSmall ? datum.backdrop_path : datum.poster_path) : load}
                    title={datum.original_title || datum.original_name}
                    date={(!isPageSmall ? datum.release_date || datum.first_air_date : (datum.overview).slice(0,65)+'...')}
                    id={datum.id}
                />
        )
    } else if (data.data ===[]) {
        content = `Can't find anything, try another search term!`
    }
    else {
        content = 
        list.map((i, key) =>  
                <CustomCard
                    type={'movie'}
                    classes={cardstyle}
                    image={load}
                    title={'Title'}
                    date={'0000-00-00'}
                    id={i}
                />
        )
    }
    
    return (
        <div className={styles.mainBody}>
                <Paper className={styles.paper}>
                         <div className={styles.grid}>
                            {content} 
                         </div>
                     </Paper>
        </div>
    )
};

export default Catalogue
