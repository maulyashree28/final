import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import "../styles/Services.css";
import Banner from "../components/Images/service.png";
import extrabin from "../components/Images/extrabin.jpeg";
import program from "../components/Images/program.png";
import cleanupdrives from "../components/Images/cleanupdrives.png";
import compititions from "../components/Images/comp.jpg";
import {
    Box,
    Card,
    AppBar,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Toolbar,
    Divider,
    Button
  } from "@mui/material";
  
const Services = () => {
  return (
    <Layout>
        <div className="services" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="servicesContainer">
                <h1>"Our services:A cleaner world,one step closer"</h1>
            </div>
        </div>
        <Divider/>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        
          <Card sx={{ maxWidth: "250px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={compititions}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                <Link to={"/Competitionpage"}>Competitions</Link>
                </Typography>
                  </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "250px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={cleanupdrives}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                <Link to={"/Cleanup"}>Cleanupdrives</Link>
                </Typography>
                 </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "250px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={extrabin}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                <Link to={"/ExtraBin"}>Extrabin</Link>
                </Typography>
                  </CardContent>
            </CardActionArea>
          </Card>
          
          </Box>
        
    </Layout>
  )
}

export default Services