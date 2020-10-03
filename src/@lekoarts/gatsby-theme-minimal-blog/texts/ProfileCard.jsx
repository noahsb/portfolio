import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

const ProfileCard = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar 
        alt="Noah Burroughs"
        src="https://avatars1.githubusercontent.com/u/49932437?s=400&u=99b9ae131c2695c3cf8b59348ab5950612557a51&v=4" 
        className={classes.large} 
      />
      <body>
        Have a question? You can reach me at: noah-burroughs@uiowa.edu
      </body>
    </div>
  );
}

export default ProfileCard