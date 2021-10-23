import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";
import { Link } from 'react-router-dom';
import load from '../images/load.gif'

function CustomCard(props){
    const type = props.type;
    const classes  = props.classes;
    const image = props.image;
    const date = props.date;
    const title = props.title;
    const id = props.id;
    let url = `/${type}/${id}`

    return (
                <Card className={classes.root}>
                    <Link to={url}>
                        <CardMedia
                            className={classes.media}
                            image={image || load}
                            component="img"
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                            <Typography className={classes.date} variant={'footer'}>
                                {date}
                            </Typography>
                        </CardContent>
                    </Link>
                </Card>
    );
};

export default CustomCard;