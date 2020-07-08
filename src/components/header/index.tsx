import {AppBar, Button, Container, IconButton, Link, MenuItem, MenuList, Toolbar, Typography} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link as RouterLink} from 'react-router-dom';
import * as types from '../../types';
import DropdownMenu from '../dropdown-menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      flexGrow: 1,
    },
    logoLink: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      }
    },
  }),
);

export default function Header() {
  const classes = useStyles();

  // Example of getting needed data from server
  const isAuthenticated = useSelector<types.AppState, boolean>(state => !!state.auth.token);
  const username = useSelector<types.AppState, string>(state => state.auth.username);
  console.log(isAuthenticated, username);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="inherit">
        <Container>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.logo}>
              <Link
                href='/'
                to='/'
                component={RouterLink}
                className={classes.logoLink}
              >
                Homfy
              </Link>
            </Typography>
            <Button>How it works</Button>
            <DropdownMenu label="Dropdown Example">
              <MenuList>
                <MenuItem>Dropdown Item One</MenuItem>
                <MenuItem>Dropdown Item Two</MenuItem>
              </MenuList>
            </DropdownMenu>
            <DropdownMenu label="Another dropdown Example">
              <MenuList>
                <MenuItem>See quotes</MenuItem>
                <MenuItem>Find students</MenuItem>
              </MenuList>
            </DropdownMenu>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
