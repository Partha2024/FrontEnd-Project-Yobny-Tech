import { Container, Typography, Card, CardContent} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import React from 'react'


const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: '100%',   
    minHeight: '100%',    
    paddingTop: "22px",
  },
  card:{
    boxShadow: '0 3px 5px 2px #A7E7FE',
    backgroundImage: 'linear-gradient(45deg, #8FDEEA, #BDEBF0, #EBF7F5)',

  },
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
  div:{
    paddingTop: "10px",
  },
  image:{
    borderRadius:"3px"
  }
}));



export default function App() {
  const classes = useStyles();

  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <Container className={classes.root}>
      <Grid container spacing={5}>
        {users.length &&
          users.map((user) => {
            return (
              <Grid item sm={2}>
                <Card className={classes.card}>
                  <CardContent>
                    <CardMedia component="img" className={classes.image} image={user.avatar}/>
                      <div className={classes.div}>
                        <Typography className= {classes.typography} variant='h5'>{user.first_name} {user.last_name}</Typography>
                        <Typography className= {classes.typography} variant='subtitle1'>ID : {user.id}</Typography>
                        <Typography className= {classes.typography} variant='subtitle1'>Email ID : {user.email}</Typography>
                      </div>
                    </CardContent>
                </Card>
              </Grid>
            );
          })
        }
      </Grid>
    </Container>
  );
}
