import { Button, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
           <div>
             <Stack direction="row" padding={1} spacing={4}>
                  <NavLink
                    to="/home"
                    style={{
                        textDecoration : "none"
                    }}>
                    <Button variant="outlined" color="secondary" size="large">Home</Button>
                  </NavLink>
                  <NavLink
                    to="/meals"
                    style={{
                        textDecoration : "none"
                    }}>
                    <Button variant="outlined" color="secondary" size="large">
                       Meals
                    </Button>
                  </NavLink>
                  <NavLink
                    to="/about"
                    style={{
                        textDecoration : "none"
                    }}>
                    <Button variant="outlined" color="secondary" size="large">About</Button>
                  </NavLink>
              </Stack>
            </div>
        </div>
    );
};

export default Header;