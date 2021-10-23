import React from 'react'
//import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    searchInput: {
        width: 100+'%',
        height: 40,
        background: 'black',
        border: 'none',
        outline: 'none',
        padding: '15px',
        borderRadius: 8,
        color: '#ebfcff',
        fontSize: '0.98em',
        '&::placeholder':{
            color: '#c3f5fd',
        }
    },
}))

function SearchInput(props) {
    const name = props.name;
    const classes = useStyles()
    const submit = props.submit;
    const change = props.onchange;

    return (
            <form
                onSubmit={submit}
            >
                <input
                    className={classes.searchInput}
                    placeholder="Search by Name" 
                    type="text"
                    value={name} 
                    onChange={change} 
                />
                {/*<button 
                    type='submit' 
                    style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: 'none',
                        position: 'absolute',
                        borderRadius: '25px',
                        padding: 2,
                        left: 124+'%',
                        top: '6px',
                        cursor: 'pointer',
                    }}
                >
                    <SearchIcon size='large'/>
                </button>*/}
            </form>
    )}

export default SearchInput
