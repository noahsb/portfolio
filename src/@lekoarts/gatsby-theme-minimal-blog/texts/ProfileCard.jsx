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
        src="/profile-img.png" 
        className={classes.large} 
      />
      <p><small>Have a question? You can reach me at: noah-burroughs@uiowa.edu</small></p>
    </div>
  );
}

export default ProfileCard