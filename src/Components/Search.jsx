import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import Catalogue from './Subcomponents/Catalogue';

function Search() {
    let url;

    const [ data, setData ] = useState(null);
    useEffect(() => {
        axios.get(url)
            .then(response => {
                let results = response.data.results;
                setData(results);
            })
    }, [url])

    return (
        <div id='search'>
            
            <Catalogue data={data}/>
        </div>
    )
}

export default Search
