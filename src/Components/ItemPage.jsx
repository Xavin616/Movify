import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Paper, Card, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
    body {
        color: white;
        background-color: #060806;
    }
    .makeStyles-header-2 {
        background-color: #060806;
        box-shadow: none;
        color: #1b1b1b;
    }
    .makeStyles-title-3 {
        color: cyan;
    }
`

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        color: 'white',
        padding: 30,
    },
    flexContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 100+'%',
        flexDirection: 'row',
    },
    cardHolder: {
        flexBasis: 40+'%',
        flex: 1,
    },
    root: {
        margin: '0 auto',
        minWdith: 240,
        maxWidth: 280,
        border: 'none',
        backgroundColor: 'transparent',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            height: 300,
            width: 200,
        },
    },
    media: {
        height: 'auto',
    },
    content: {
        flexBasis:60+'%',
        flex: 1,
        padding: '10px 40px',
        // eslint-disable-next-line
        ['@media (max-width: 400px)']: {
            textAlign: 'center',
        },
    },
    name: {
        color: 'white',
        marginTop: 20,
    },
    overview: {
        color: 'white',
        marginTop: 0,
    },
}))

function ItemPage() {
    const { id, str } = useParams()
    let url = `https://api.themoviedb.org/3/${str}/${id}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    
    let content;
    let img_url;
    let image;
    let title;

    const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setItem(response.data)
            })
    }, [url])

    if (item) {
        //title = item.original_title;
        (str === 'movie' ? title = item.original_title : title = item.original_name);
        img_url = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        image = "https://image.tmdb.org/t/p/original" + item.poster_path;
        content = item.overview;
        console.log(title)
    }

    const classes = useStyles()

    return (
        <div>
            <GlobalStyle />
            <Paper 
                style={{
                    backgroundImage: `url(${img_url})`, 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    backgroundColor: '#1b1b1b',
                    backgroundBlendMode: 'multiply',
                    backgroundPosition: '100% 0%',
                }} 
                elevation={0} 
                className={classes.paperContainer}>
                <div className={classes.flexContainer}>
                    <div className={classes.cardHolder}>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={image}
                                component='img'
                            />
                        </Card>
                    </div>
                    <div className={classes.content}>
                        <Typography variant={'h5'} component={'h4'} className={classes.name}>
                            {title}
                        </Typography>
                        <Typography className={classes.overview} variant={'body2'}>
                            {content}
                        </Typography>
                    </div>
                </div>
            </Paper>     
        </div>
    )
}

export default ItemPage