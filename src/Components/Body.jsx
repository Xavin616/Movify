import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mainBody: {
        width: '100%',
    }
}))


function Body() {
    const styles = useStyles()
    return (
        <div className={styles.mainBody}>
            <Button color="secondary" variant="contained">
                Happy
            </Button>
        </div>
    )
};

export default Body
