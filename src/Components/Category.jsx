import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import Catalogue from './Subcomponents/Catalogue'
import { Button, Paper, Typography } from '@material-ui/core';
import { movie_genres, tv_genres } from './Subcomponents/GenreList';
import SearchInput from './Subcomponents/SearchInput';

const useStyles = makeStyles((theme) => ({
    contcat: {
        padding: 8,
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
        padding: 29,
        width: 23+'%',
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
        padding: 5,
        marginTop: 2,
        width: 77+'%',
        flexGrow: 1,
        // eslint-disable-next-line
        ['@media (max-width: 450px)']:{
            padding: 0,
        },
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

    const mainGenres = (media === 'tv' ? tv_genres : movie_genres)
    const classes = useStyles()

    const [data, setData] = useState({loading: false, data: null, error: false,})
    const [date, setDate] = useState({
        from: '',
        to: '',
    })
    const [name, setName] = useState('');
    const [genre, setGenre] = useState(null)
    const [category, setCategory] = useState('popular')
    const [checked, setChecked] = useState(
        new Array(mainGenres.length).fill(false)
    )

    useEffect(() => {
        setData({loading: true, data: null, error: false,})
        axios.get(pop_url)
        .then(response => {
            setData({loading: false, data: response.data.results, error: false,})
        })
    }, [pop_url])

    const handleSubmitName = (e) => {
        e.preventDefault()
        console.log(name);
        console.log(searchUrl)
        setData({loading: true, data: null, error: false,})
        axios.get(searchUrl)
            .then(response => {
                console.log(response.data);
                setData({loading: false, data: response.data.results, error: false,})
            })
    };

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        console.log(category);
        setData({loading: true, data: null, error: false,})
        axios.get(categoryUrl)
            .then(response => {
                setData({loading: false, data: response.data.results, error: false,})
            })
    };

    const handleGenre = position => {
        const updatedCheck = checked.map((item, index) => 
            index === position ? !item : item
        );

        setChecked(updatedCheck);

        const list = []
        const genrelist = updatedCheck.map((item, key) => {
            if (item === true) {
                list.push(mainGenres[key].id)
                return list
            } 
            else { 
                return list
            }
        })
        setGenre(genrelist[0])
    }

    let categoryList;
    let content;

    if (media === 'movie') {
        content = movie_genres.map((genre, key) => 
            <label>
                <input 
                    type='checkbox'
                    style={{padding: 5, margin: '5px 8px',}} 
                    name={genre.name} 
                    value={genre.id}
                    checked={checked[key]}
                    onChange={(e) => handleGenre(key)}                    
                />
                {genre.name}
            </label>
        )
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
        content = tv_genres.map((genre, key) => 
            <label>
                <input 
                    type='checkbox'
                    style={{padding: 5, margin: '5px 8px',}} 
                    name={genre.name} 
                    value={genre.id}
                    checked={checked[key]}
                    onChange={(e) => handleGenre(key)}                    
                />
                {genre.name}
            </label>
        )
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

    const categoryUrl = `https://api.themoviedb.org/3/${media}/${category}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    const searchUrl = `https://api.themoviedb.org/3/search/${media}?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1&query=${name}`
    const discoverUrl = `https://api.themoviedb.org/3/discover/${media}?api_key=546988151aeca0994227ca10917c13db&language=en-US&page=1`


    const getDate = (date) => {
        let to;
        let from;
        if (date.to && date.from) {
            to = `&primary_release_date.lte=${date.to}`
            from = `&primary_release_date.gte=${date.from}`
            const dateString = from + to;
            return dateString
        } else if (date.to && !date.from) {
            to = `&primary_release_date.lte=${date.to}`
            return to
        } else if (date.from && !date.to) {
            from = `&primary_release_date.gte=${date.from}`
            return from
        } else { return null }
    }

    function handleDiscover(e) {
        e.preventDefault()
        console.log(genre);
        console.log(getDate(date));
        if (genre !== null && getDate !== null) {
            let newDiscoverUrl = discoverUrl+`&with_genres=[${genre}]`+getDate(date)
            axios.get(newDiscoverUrl)
                .then(response => {
                    setData(response.data.results)
                })
        }
    }

    return ( 
        <div className={classes.contcat}>
            <Paper className={classes.searchPanel}>
                <div>
                    <SearchInput name={name} submit={handleSubmitName} onchange={(e)=> {setName(e.target.value)}} />
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
                        <div>
                            {categoryList}
                        </div>
                        <Button className={classes.submitButton} type="submit">Search</Button>
                    </form>
                    <form onSubmit={handleDiscover}>
                        <Typography 
                            component={'h3'} 
                            variant={'h6'}
                            className={classes.header}
                        >
                            Discover
                        </Typography>
                        <div 
                            style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}} 
                            className="filter-wrapper"
                        >
                            {content}
                        </div>
                        <br />
                            <div>
                                <label htmlFor="from">
                                    From:
                                    <input 
                                        type="date" 
                                        value={date}
                                        onChange={(e) => setDate({...date, from: e.target.value,})}  
                                        name="from" id="from" />
                                </label>
                                <label htmlFor="to">
                                    To: 
                                    <input 
                                        type="date" 
                                        value={date}
                                        onChange={(e) => setDate({...date, to: e.target.value})}  
                                        name="to" id="to" />
                                </label>
                            </div>
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
