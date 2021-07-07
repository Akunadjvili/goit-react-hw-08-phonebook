import React from 'react';
import { Box, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, auto)',
    gridGap: '10px',
    justifyContent: 'center',
    width: 'auto',
  },
  controls: {
    display: 'grid',
    'align-items': 'baseline',
    'grid-template-columns': 'repeat(2, auto)',
    'grid-gap': '10px',
  },
  name: { 'font-weight': 700 },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  logout: {
    padding: '4px',
    backgroundColor: 'transparent',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}));

const UserMenu = ({ avatar, name, logoutHandler }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.box}>
      <Avatar src={avatar} className={classes.avatar} alt="Avatar" />
      <Box component="div" className={classes.controls}>
        <span className={classes.name}>{name}</span>
        <Button  color="primary" className={classes.logout} onClick={logoutHandler}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default UserMenu;
