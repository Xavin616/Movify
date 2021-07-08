import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, Paper, Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomCard from './Subcomponents/CustomCard';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        flexGrow: 1,
        width: '100%',
        padding: '15px 20px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '0px',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        height: 'auto',
        padding: '20px 20px',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '20px 10px 5px 10px',
        },
        backgroundColor: '#0d0d0dde',
        overflow: 'hidden',
        color: 'white',
    },
    heading: {
        marginBottom: 18,
        fontWeight: 'bold',
        fontSize: '1.6em',
    }
}));

const useCardStyles = makeStyles((theme) => ({
    root: {
        minWidth: 140,
        margin: '2.5px 0px',
        backgroundColor: 'transparent',
        border: 'none',
        transition: '0.5s',
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.03)',
        }
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
        backgroundColor: 'transparent',
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


function Category() {
    const { str1, str2 } = useParams();

    let content;
    const styles = useStyles();
    const cardstyle = useCardStyles();
    const url = `https://api.themoviedb.org/3/${str1}/${str2}?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1`

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then(response => {
                let datan = response.data.results;
                console.log(datan);
                setData(datan)
            })
            .catch(error => 
                    console.error(error)
                )
    }, [url])

    if (data) {
        content = 
            data.map((datum, key) => 
                (str1 === "movie") ?
                    (<Grid item xs={6} sm={4} md={3} lg={2}>
                        <CustomCard 
                            classes={cardstyle}
                            image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                            title={datum.original_title}
                            date={datum.release_date}
                        />
                    </Grid>)
                        :
                    (<Grid item xs={6} sm={4} md={3} lg={2}>
                        <CustomCard 
                            classes={cardstyle}
                            image={'https://image.tmdb.org/t/p/original' + datum.poster_path}
                            title={datum.original_name}
                            date={datum.first_air_date}
                        />
                    </Grid>)
            )
    }

    return (
        <div className={styles.mainBody}>
                <Paper className={styles.paper}>
                         <div className="header">
                            <Typography className={styles.heading} variant="h4">
                                {str2}
                            </Typography>
                         </div>
                         <Grid container spacing={3}>
                            {content} 
                         </Grid>
                     </Paper>
        </div>
    )
}

export default Category
