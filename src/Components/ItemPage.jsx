import React from 'react';
import { useParams } from 'react-router-dom';
import Trailer from './Subcomponents/Trailer';
import Main from './Subcomponents/Main';
import ItemCast from './Subcomponents/ItemCast';

function ItemPage() {
    const { id, str } = useParams()

    return (
        <div>
            <Main id={id} str={str} />
            <ItemCast id={id} str={str} />
            <Trailer media={str} id={id} />
        </div>
    )
}

export default ItemPage