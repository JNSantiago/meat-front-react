import React, { Component } from 'react'
import './header.css'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Restaurant from '@material-ui/icons/Restaurant';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grow: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 50
    }
};
  
function Header(props) {
    const { classes } = props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.root}>
            <Button color="inherit">Restaurantes</Button>
            <Button color="inherit">Cardápios</Button>
            <MenuItem className={classes.grow}>
                <Restaurant />
            </MenuItem>
            <Button color="inherit">Avaliações</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Header);
