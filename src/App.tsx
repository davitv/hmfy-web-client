import {Dialog, DialogContent, DialogTitle} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header';
import Homepage from './components/homepage';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import * as urls from './urls';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {false &&
        <Dialog open={true}>
          <DialogTitle>Log into your account</DialogTitle>
          <DialogContent>
            <LoginForm />
          </DialogContent>
        </Dialog>
      }
      {false &&
        <Dialog open={true} fullWidth={true} maxWidth="sm">
          <DialogTitle>Create new account</DialogTitle>
          <DialogContent>
            <SignupForm />
          </DialogContent>
        </Dialog>
      }
      <Header />
      <Route
        exact
        path={urls.HOMEPAGE}
        component={Homepage}
      />

    </div>
  );
}
