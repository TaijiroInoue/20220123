import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            キャリラジ
          </Typography>
          <Button>
            <Link to='/'>ホーム</Link>
          </Button>
          <Button>
            <Link to='/Speak'>録音</Link>
          </Button>
          <Button>
            <Link to='/Audio'>再生</Link>
          </Button>
          <Button>
            <Link to='/Login'>ログイン</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
