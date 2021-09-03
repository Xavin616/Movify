import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Paper, Box, Grid, Typography } from '@material-ui/core';
import CustomCard from './CustomCard';
import { makeStyles } from '@material-ui/styles';

const useCss = makeStyles((theme) => ({
    paper: {
        height: 'auto',
        padding: '5px 10px 2px 12px',
        background: 'linear-gradient(0deg, #050c10 35%, #005252)',
        backgroundBlendMode: 'multiply',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: '10px 5px 5px 0px',
        },
        overflow: 'hidden',
    },
    gridList: {
        width: 100 + '%',
        height: 'max-content',
        display: 'flex',
        padding: '4px 5px 0px 15px',
        overflow: 'scroll hidden',
    }
}))

const useStyles = makeStyles((theme) =>({
    root:{
        width: 140,
        height: 93.5+'%',
        backgroundColor: 'black',
        color: 'white',
        margin: 10,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            width: 115,
        }
    },
    media: {
        height: 70+'%',
    },
    content: {
        height: 30+'%',
        padding: '12px 13px 8px 15px',
    },
    title: {
        fontSize: '1.05em',
        fontWeight: 'bold',
        fontFamily: 'Source Sans Pro, sans-serif',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.88em',
        }
    },
    date:{
        textDecoration: 'italize',
        fontSize: '0.82em',
    },
}))

function ItemCast(props) {
    const id = props.id;
    const str = props.str;
    const classes = useStyles()
    const styles = useCss()

    let content;
    let url = `https://api.themoviedb.org/3/${str}/${id}/credits?api_key=546988151aeca0994227ca10917c13db&language=en-US`

    const [cast, setCast] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data.cast)
                setCast(response.data.cast)
            })
    }, [url])

    if (cast){
        let casted = cast.slice(0, 10)
        content= 
            casted.map((cast, key)=>
            <Grid item xs={12} sm={6} md={3}>
                <CustomCard
                    id={0}
                    type={'cast'}
                    image={'https://image.tmdb.org/t/p/original'+ cast.profile_path}
                    title={cast.name}
                    date={cast.character}
                    classes={classes}
                /> 
            </Grid>
            )   
    }

    return (
        <div>
            <Paper className={styles.paper}>
                <Typography 
                    style={{ 
                        fontFamily: 'Source Sans Pro, sans-serif', 
                        color: 'white', 
                        fontSize: '1.89em',
                        marginLeft: 8, 
                        fontWeight: 'bold', 
                        padding: '11.5px 4px 4px 14px',
                    }}
                    variant={'h5'}
                >
                    Cast & Crew
                </Typography>
                <Box className={styles.gridList}>
                    {content}
                </Box>
            </Paper>
        </div>
    )
}

export default ItemCast
