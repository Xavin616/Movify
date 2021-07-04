import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";

function CustomCard(props){
    const classes  = props.classes;
    const image = props.image;
    const date = props.date;
    const title = props.title;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
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
        </Card>
    );
};

export default CustomCard;