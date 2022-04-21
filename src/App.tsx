import './App.css';
import React from 'react'
import { Container, GridJustification, Button, Typography, Card, CardContent, CardActions, CardActionArea} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

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

function App() {
  const classes = useStyles();
  return (
      <Container className={classes.root}>
        <Grid container spacing={3}>

          <Grid item sm={3}>{/* card  */}
            <Card className={classes.card}>

            <CardActionArea>
                <CardMedia component="img" image='https://thumbs.dreamstime.com/b/yellow-crash-test-dummy-yellow-crash-test-dummy-car-seat-116968697.jpg0' style={{height:300}} />

              <CardContent>
                <Typography variant='h4'>Post Title</Typography>
                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque, adipisci soluta</Typography>
              </CardContent>

              </CardActionArea>

              <CardActions>
                <Button>Read More</Button>
              </CardActions>
            </Card>
          </Grid>
      
        </Grid>
      </Container>

  );
}

export default App;
