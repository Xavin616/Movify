import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {

})

const DownloadButton = (props) => {
    return (
        <Card>
            <a href={props.link} target={'_blank'} rel='noreferrer' >
                <div className="downloadIcon">
                    <img src="" alt={props.name} />
                </div>
                <Button style={{backgroundColor: props.color}}>
                    {props.name}            
                </Button>
            </a>
        </Card>
    )
}

function Download(props) {
    const media = props.media;
    const name = props.name;

    let colors = ['#ff003c', 'green', 'yellow', 'lightblue']

    const tvDownloads = [
        {
            name: 'TFPDL',
            color: '#1E9DBF',
            logo: 'https://i.imgur.com/7gSsFbn.png',
            link: `https://tfp.is/?s=${name}`,
        },
        {
            name:'NetNaija',
            color: colors[1],
            link: `https://thenetnaija.com/search?folder=videos&t=${name}`,
        },
        {
            name: 'O2tvSeries',
            color: colors[2],
            link: `https://o2tvseries.com/`,
        },
        {
            name: 'Nkiri',
            color: colors[3],
            link: `https://nkiri.com/?s=${name}&post_type=post`,
        },
        {
            name:'MobiletvShows',
            color: colors[0],
            link: `https://mobiletvshows.net/search.php?search=${name}&beginsearch=Search&vsearch=&by=series`,
        }
    ]
    
    const movieDownloads = [
            {
                name: 'TFPDL',
                color: colors[0],
                link: `https://tfp.is/?s=${name}`,
            },
            {
                name:'NetNaija',
                color: colors[1],
                link: `https://thenetnaija.com/search?folder=videos&t=${name}`,
            },
            {
                name: 'Nkiri',
                color: colors[2],
                link: `https://nkiri.com/?s=${name}&post_type=post`,
            },
            {
                name:'ToxicWap', 
                link: `https://toxicwap.us/?s=${name}`,
            }
        ]

    let content;
    if (media === 'tv') {
        content = 
        tvDownloads.map((site, key) => 
            <DownloadButton
                link={site.link}
                color='green'
                name={site.name}
            />
        )
    } else {
        return content=
        movieDownloads.map((site, key) => 
            <DownloadButton
                key={key}
                link={site.link}
                color='green'
                name={site.name}
            />
        )

    }

    return (
        <div id='download'>
            {content}           
        </div>
    )
}

export default Download
