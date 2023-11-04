import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/About.css";
import Banner from "../components/Images/mission.png";
import coll_1 from "../components/Images/coll_1.png";
import coll_2 from "../components/Images/coll_2.png";
import coll_3 from "../components/Images/coll_3.png";
import {Box,
  Card,
  AppBar,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Toolbar,
  Divider,
  position
  
        } from '@mui/material';
const About = () => {
  return (
    <Layout>
        <div className="about" style={{ backgroundImage: `url(${Banner})` }}>
            <div className="aboutContainer">
                <h1>Our Mission</h1>
                <p> 
                    Our mission at Eco Clean Up Hub is to lead the way in
                sustainable waste management practices. We are dedicated to
                creating a cleaner and healthier environment by offering
                innovative solutions for waste reduction, recycling, and
                responsible disposal. Through our commitment to excellence and
                environmental stewardship, we aim to empower individuals,
                businesses, and communities to make informed choices that
                minimize their environmental footprint. Our vision is to build a
                greener future where waste is transformed into valuable
                resources, contributing to a more sustainable and vibrant world
                for generations to come. <br />
                Join us in our mission to make a positive impact on our planet
                through responsible waste management. Together, we can create a
                cleaner, more sustainable world.
                </p>
            </div>
        </div>
        <Divider/>
        <div className="about">
        <AppBar position='random' sx={{ bgcolor: "black" }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our collabrations
          </Typography>
            
        </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <Card sx={{ maxWidth: "300px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={coll_1}
                alt={"no image"}
              />
              
              <CardContent >
                <Typography variant="h5" gutterBottom component={"div"}>
                MCC Solid Waste Management Plant
                </Typography>
                 </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={coll_2}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                Karnataka State Pollution Control Board
                </Typography>
                  </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "300px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={coll_3}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                Muncipal Administration
                </Typography>
                 </CardContent>
            </CardActionArea>
          </Card>
          
          </Box>
          
        </div>
    </Layout>
  )
}

export default About