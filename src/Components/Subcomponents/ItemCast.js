import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ItemCast(props) {
    const id = props.id;
    const str = props.str;
    
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
        
    }

    return (
        <div>
            Cast
        </div>
    )
}

export default ItemCast
