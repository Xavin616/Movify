import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from './Subcomponents/Trailer';
import Main from './Subcomponents/Main';
import ItemCast from './Subcomponents/ItemCast';
import axios from 'axios';

function ItemPage() {
    const { id, str } = useParams()
    let vidurl = `https://api.themoviedb.org/3/${str}/${id}/videos?api_key=546988151aeca0994227ca10917c13db&language=en-US`
    
    // State management: Trailer Videos
    const [vid, setVid] = useState(null);
    //eslint-disable-next-line
        useEffect(() => {
            axios.get(vidurl)
                .then(response => {
                    console.log(response.data);
                    let viddata = response.data.results;
                    setVid(viddata);
                })
        }, [vidurl])

    return (
        <div>
            <Main id={id} str={str} />
            <ItemCast id={id} str={str} />
            {(vid != null && vid.length !== 0) && <Trailer vid={vid} media={str} id={id} />}
        </div>
    )
}

export default ItemPage