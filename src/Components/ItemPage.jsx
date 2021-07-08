import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body {
        color: white;
        background-color: #1b1b1b;
        background: linear-gradient(to bottom, rgba(0,0,0,0.58), rgba(0,0,0,0.78), rgba(0,0,0,0.88), rgba(0,0,0,0.98), rgba(0,0,0,1)) ,url(${props => props.backimage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
    }
    .makeStyles-header-2 {
        background-color: transparent;
        box-shadow: none;
        color: #1b1b1b;
    }
    .makeStyles-title-3 {
        color: cyan;
    }
`

function ItemPage() {
    const { id, str } = useParams()
    let url = `https://api.themoviedb.org/3/${str}/${id}?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    
    let content;
    let img_url;

    const [item, setItem] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data)
                setItem(response.data)
            })
    }, [url])

    if (item) {
        img_url = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        console.log(img_url)
        content =  <p>{item.original_title}</p>
    }

    return (
        <div>
            <GlobalStyle backimage={img_url} />
            {content}
        </div>
    )
}

export default ItemPage
