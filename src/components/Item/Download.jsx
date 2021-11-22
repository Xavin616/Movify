import React from 'react';
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'transparent',
        padding: 5,
        height: 'auto',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            padding: 5,
        },
    },
    download:{
        width: 100 + '%',
        height: 'min-content',
        display: 'flex',
        padding: '15px',
        overflow: 'scroll hidden',
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            padding: 5,
            justifyContent: 'center',
        },
    },
    root:{
        padding: 0,
        margin: '0px 20px',
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: 'cyan',
        '&:hover':{
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
        }, 
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '0.8em',
            margin: '5px 0px',
            height: 30,
            borderRadius: '5px',
            padding: 15,
            width: 100+'%',
        },
    },
    headline:{
        fontFamily: 'Source Sans Pro, sans-serif', 
        fontSize: '1.1em', 
        fontWeight: 'bold',
        marginTop: 5,
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            fontSize: '1.38em',
            margin: '-1px 0px -2px 8px',
        },
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        // eslint-disable-next-line
        ['@media (max-width:400px)']: {
            flexDirection: 'row',
        },
    },
}))

const DownloadButton = (props) => {
    let classes = useStyles()
    return (
            <a style={{margin: '0px 20px',
            cursor: 'pointer', }} href={props.link} target={'_blank'} rel='noreferrer' >
                {/*<div className="downloadIcon">
                    <img src="" alt={props.name} />
                </div>*/}
                <Button classes={{
                    root: classes.root,
                    label: classes.label,
                }} styles={{
                    backgroundColor: 'green',
                    }}>
                    <GetAppIcon />
                    <Typography
                        className={classes.headline}
                        variant={'h5'}
                    >
                        {props.name}
                    </Typography>           
                </Button>
            </a>
    )
}

function Download(props) {
    const name = props.name;
    const media = props.media;
    

    let classes = useStyles()
    let colors = ['#ff003c', 'green', 'lightblue', 'yellow', 'cyan']

    const tvDownloads = [
        {
            name: 'O2tvSeries',
            color: colors[2],
            link: `https://cse.google.com/cse?oe=utf8&ie=utf8&source=uds&q=${name.slice(0,18)}&safe=off&sort=&cx=008563300698790025010:eex5tr6ameu&start=0`,
        },
        {
            name: 'TFPDL',
            color: '#1E9DBF',
            //logo: 'https://i.imgur.com/7gSsFbn.png',
            link: `https://tfp.is/?s=${name.slice(0,18)}`,
        },
        
        {
            name:'NetNaija',
            color: colors[1],
            link: `https://thenetnaija.com/search?folder=videos&t=${name.slice(0,18)}`,
        },
        {
            name: 'Spacemov',
            link: `https://spacemov.ws/?s=${name.slice(0,18)}`,
        },
        {
            name: 'Nkiri',
            color: colors[3],
            link: `https://nkiri.com/?s=${name.slice(0,18)}&post_type=post`,
        },
        {
            name:'FZ Series',
            color: colors[0],
            link: `https://mobiletvshows.net/search.php?search=${name.slice(0,18)}&beginsearch=Search&vsearch=&by=series`,
        }
    ]
    
    const movieDownloads = [
            {
                name: 'HD Mania',
                color: colors[2],
                link: `https://cse.google.com/cse?oe=utf8&ie=utf8&source=uds&q=${name.slice(0,18)}&safe=off&sort=&cx=008563300698790025010:eex5tr6ameu&start=0`,
            },    
            {
                name: 'TFPDL',
                color: colors[0],
                link: `https://tfp.is/?s=${name.slice(0,18)}`,
            },
            {
                name:'NetNaija',
                color: colors[1],
                link: `https://thenetnaija.com/search?folder=videos&t=${name.slice(0,18)}`,
            },
            {
                name: 'Spacemov',
                link: `https://spacemov.ws/?s=${name.slice(0,18)}`,
            },
            {
                name: 'Nkiri',
                color: colors[2],
                link: `https://nkiri.com/?s=${name.slice(0,18)}&post_type=post`,
            },
            {
                name:'ToxicWap', 
                link: `https://toxicwap.us/?s=${name.slice(0,18)}`,
            },
            
        ]

    let content;
    
    if (name !== 'none' && media === 'tv' ) {
        content = 
        tvDownloads.map((site, key) =>
            <DownloadButton
                name={site.name}
                link={site.link}
            /> 
        )
            
       
    } else if (name !== 'none' && media === 'movie') {
        content=
        movieDownloads.map((site, key) => 
            <DownloadButton
                name={site.name}
                link={site.link}
            />
        )
    }

    return (
        <Paper className={classes.paper}>
            <Typography 
                    id='download'
                    style={{
                        color: 'white',
                        fontFamily: 'Source Sans Pro, sans-serif', 
                        fontSize: '1.6em', 
                        margin: '10px 0px 6px 8px', 
                        fontWeight: 'bold', 
                        padding: '11.5px 4px 4px 4px',
                        // eslint-disable-next-line
                        ['@media (max-width:400px)']: {
                            fontSize: '1.35em',
                        },
                    }}
                    variant={'h5'}
                >
                    Download
            </Typography>
            <div className={classes.download}>
                {content}           
            </div>
        </Paper>
    )
}

export default Download
