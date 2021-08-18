import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import CustomCard from './CustomCard';
//mport { useMediaQuery } from './Query';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '5px 5px',
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
            padding: '2px',
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
        minWidth: 95,
        maxWidth: 185,
        height: 94+'%',
        margin: '0px 0px 5px 0px',
        backgroundColor: '#060806',
        border: 'none',
        transition: '0.5s',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)',
        },
        // eslint-disable-next-line
        ['@media (max-width: 400px)']:{
            minWidth: 95,
            margin: '0px 0px -1px 0px',
            transform: 'scale(0.925)',
            height: 99.5+'%',
        },
    },
    media: {
        height: 'auto',
        width: 100 + '%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },
    content: {
        padding: 15,
        marginTop: 5, 
        backgroundColor: '#060806',
        color: 'white',
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

function Catalogue(props) {
    //let isPageSmall = useMediaQuery('(max-width: 400px)');

    const data = props.data;
    let media = props.media;
    let content;

    const styles = useStyles();
    const cardstyle = useCardStyles();

    if (data) {
        content = 
            data.map((datum, key) =>
                <CustomCard 
                    type={media}
                    classes={cardstyle}
                    image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                    title={datum.original_title || datum.original_name}
                    date={datum.release_date || datum.first_air_date}
                    id={datum.id}
                />
        )

    } else {
        content = 'Your search results go here.'
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