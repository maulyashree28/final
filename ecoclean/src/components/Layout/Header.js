import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import Logo from "../../components/Images/Logo.png"
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* image */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
                    <li>
                        <NavLink activeClassName="active" to={"/"}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Learn"}>Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Login"}>Login</NavLink>
                    </li>

                    </ul>
    </Box>
  );
  return (
    <>
        <Box>
            <AppBar component={"nav"} sx={{ bgcolor: "black" ,height:"2cm"}}>
            <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 1,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, my: 2 }}
                >
                   <img src={Logo} alt="logo" height={"100"} width="250" />
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <ul className="navigation-menu">
                    <li>
                        <NavLink activeClassName="active" to={"/"}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/learn"}>Learn</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/services"}>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/login"}>Login</NavLink>
                    </li>
                </ul>
            </Box>
            </Toolbar>
            </AppBar>
            <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
        </Box>
        
    </>
  )
};

export default Header;