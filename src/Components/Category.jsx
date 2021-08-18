import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import Catalogue from './Subcomponents/Catalogue'
import { Button, Paper, Typography } from '@material-ui/core';
//import { useMediaQuery } from './Subcomponents/Query';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    contcat: {
        padding: 15,
        width: 100+'%',
        display: 'flex',
        justifyContent: 'space-around',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            flexDirection: 'column',
            padding: 0,
        },
    },
    searchPanel: {
        //minWidth: 25+'%',
        margin: '10px 8px 5px 0px',
        padding: 25,
        width: 75+'%',
        flexGrow: 1,
        height: 'fit-content',
        backgroundColor: '#000000c9',
        boxShadow: '0px 6px 15px #060810',
        color: 'white',
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            width: 100+'%',
            margin: 0,
        },
    },
    catalogue: {
        padding: 2,
        marginTop: 2,
        minWidth: 50+'%',
        flexGrow: 1,
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: 0,
        },
    },
    searchInput: {
        height: 38,
        background: '#0D353F',
        border: 'none',
        outline: 'none',
        padding: '13px',
        borderRadius: 8,
        color: '#ebfcff',
        fontSize: '0.98em',
        '&::placeholder':{
            color: '#c3f5fd',
        }
    },
    select: {
        backgroundColor: '#0D353F',
        color: '#ebfcff',
        height: 35,
        border: 'none',
        width: 70+'%',
        padding: '5px 15px 5px 20px',
        appearance: 'none',
        borderRadius: 5,
        fontSize: '1.1em',
        marginBottom: 10,
    },
    header: {
        fontWeight: '400',
        padding: '2px 2px 8px 2px',
        fontFamily: 'Source Sans Pro, san-serif',
    },
    submitButton: {
        width: 100+'%',
        height: 25,
        padding: 18,
        color: 'white',
        textTransform: 'none',
        fontWeight: 'bolder',
        fontSize: '1.2em',
        backgroundColor: '#00d6d6',
        margin: '10px 0px 3px 0px',
        fontFamily: 'Source Sans Pro, sans-serif',
        '&:active, &:hover': {
            backgroundColor: 'red',
        }
    },
}))

function Category(props) {
    const media = props.media;
    const pop_url  = `https://api.themoviedb.org/3/${media}/popular?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    //const isMediaSmall = useMediaQuery('(max-width:400px)')

    const classes = useStyles()

    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(pop_url)
        .then(response => {
            setData(response.data.results)
        })
    }, [pop_url])

    let categoryList;

    if (media === 'movie') {
        categoryList = 
            <select 
                onChange={(e) => {setCategory(e.target.value); console.log(e.target.value)}} 
                name="category" 
                id="category"
                className={classes.select}
            >
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="now_playing">Now Playing</option>
                <option value="upcoming">Upcoming</option>
                <option value="latest">Latest</option>
            </select>
    } else {
        categoryList =
        <select 
            onChange={(e) => {setCategory(e.target.value); console.log(e.target.value)}} 
            name="category" 
            id="category"
            className={classes.select}
        >
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="airing_today">Airing Today</option>
            <option value="latest">Latest</option>
        </select>
    }

    const [name, setName] = useState('');
    const [category, setCategory] = useState('popular')
    //const [genre, setGenre] = useState(null)

    const handleSubmitName = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(search_url)
        axios.get(search_url)
            .then(response => {
                console.log(response.data);
                setData(response.data.results)
            })
    };

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        console.log(category);
        axios.get(category_url)
            .then(response => {
                console.log(response.data);
                setData(response.data.results)
            })
    };

    const category_url = `https://api.themoviedb.org/3/${media}/${category}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    const search_url = `https://api.themoviedb.org/3/search/${media}?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1&query=${name}`

    return ( 
        <div className={classes.contcat}>
            <Paper className={classes.searchPanel}>
                <div>
                    <Typography 
                        component={'h3'} 
                        variant={'h5'}
                        className={classes.header}
                    >
                        Discover
                    </Typography>
                        <form 
                            style={{
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',}}
                            onSubmit={handleSubmitName}
                        >
                            <input
                                className={classes.searchInput}
                                placeholder="Search by Name" 
                                type="text"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                            <button type='submit' 
                                style={{
                                        backgroundColor: 'transparent',
                                        color: 'white',
                                        border: 'none',
                                        position: 'absolute',
                                        borderRadius: '25px',
                                        padding: 2,
                                        left: 85+'%',
                                        top: '6px',
                                    }}>
                                <SearchIcon 
                                    style={{
                                        
                                    }}
                                    size='large'
                                />
                            </button>
                        </form>
                        <br />
                        <form 
                            onSubmit={handleSubmitCategory}
                            >
                            <Typography 
                                component={'h3'} 
                                variant={'h6'}
                                className={classes.header}
                            >
                                Category
                            </Typography>
                            {categoryList}
                            {/*<div className="filter-wrapper">
                                Genres
                                    <input type="radio" name="genre1" id="action" value="action" onChange={(e) => setGenre(e.target.value)} />
                                    <input type="radio" name="genre2" id="horror" value="horror" onChange={(e) => setGenre(e.target.value)} />
                                    <input type="radio" name="genre3" id="comedy" value="comedy" onChange={(e) => setGenre(e.target.value)} />
                            </div>*/}
                            <Button className={classes.submitButton} type="submit">Search</Button>
                    </form>
                </div>
            </Paper>
            <div className={classes.catalogue}>
                <Catalogue data={data} media={props.media} />
            </div>
        </div>
    )
}    

export default Category
