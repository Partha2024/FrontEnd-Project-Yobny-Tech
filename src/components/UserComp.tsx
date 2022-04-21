import React from "react";
import { Container, GridJustification, Button, Typography, Card, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import list from './list.json'

const characters = [
    {
        id: 1,
        name: "Wonder Woman",
        alterEgo: "Diana Prince",
        alignment: "hero"
    },
    {
        id: 2,
        name: "Poison Ivy",
        alterEgo: "Pamela Lillian Isley",
        alignment: "villain"
    },
    {
        id: 3,
        name: "Black Canary",
        alterEgo: "Dinah Drake",
        alignment: "hero"
    },
    {
        id: 4,
        name: "Catwoman",
        alterEgo: "Selina Kyle",
        alignment: "villain"
    },
    {
        id: 5,
        name: "Blfwefack Canary",
        alterEgo: "Difwefnah Drake",
        alignment: "herfwo"
    },
];

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: '100%',
        height: '100vh',     
        minHeight: '100%',    
        backgroundColor:theme.palette.grey[200],
        paddingTop: theme.spacing(5),
        },
        card:{
        backgroundColor:"pink"
        },
        grid:{
        width:"100vw",
        marginLeft:"0"
        }
    }));

function CardListItem (props:any) {
    const classes = useStyles();
    return (        
        <Container className={classes.root}>
        {/* <Grid container spacing={3}> */}

            <Grid item sm={3}>  
            <Card className={classes.card}>

            <CardActionArea>
                <CardMedia component="img" image='https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg0' style={{height:300}} />

                <CardContent>
                    <Typography variant='h4'>{props.data.id}</Typography>
                    <Typography variant='h4'>{props.character.name}</Typography>
                    <Typography variant='subtitle1'>{props.character.alterEgo}</Typography>
                    <Typography variant='subtitle1'>{props.character.alignment}</Typography> 
                </CardContent>

                </CardActionArea>
                </Card>
            </Grid> 
        
            {/* </Grid>  */}
        </Container>
    );
};

const CardList = () => {
    return (
        <Grid>
        {characters.map(character => {
            return <CardListItem character={character}/>;
        })}
        </Grid>
    );
};

export default function UserComp() {
    return (
        <div className="App">
        <CardList/>
        </div>
    );
}
