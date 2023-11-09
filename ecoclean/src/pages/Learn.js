import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import "../styles/Learn.css";

import Workshop1 from "../components/Images/work1.png";
import  Workshop2 from "../components/Images/work2.png";
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
const Learn = () => {
  const wasteTypesData = [
    {
      name: "Organic Waste",
      definition: "Organic waste refers to biodegradable materials that originate from living organisms and can decompose naturally over time. It includes a wide range of materials that are rich in carbon and nitrogen compounds.",
      includes: ["Food scraps (e.g., fruit and vegetable peels, coffee grounds).",
      "Yard waste (e.g., leaves, grass clippings).",
      "Biodegradable materials (e.g., paper products).",
      "Animal waste from livestock, which can be a potent source of nutrients for soil when composted."],
      howToHandle: ["Composting: Encourage composting of food scraps, yard trimmings, and other organic materials. Provide tips on creating and maintaining a compost pile or bin.",
        "Set up separate containers or bins for collecting organic waste. This can be a designated compost bin in the kitchen or a compost pile in the backyard.",
        "Remove non-organic materials like plastic, glass, or metal from the organic waste to maintain the quality of the compost.",
        "Utilize indoor composting systems like worm bins or bokashi composting for households without access to outdoor composting space.",
        "Use organic waste as mulch around plants to conserve soil moisture, suppress weeds, and add nutrients to the soil."],
    },

    {
      name: "Recyclablw Waste",
      definition: "Recyclable waste refers to materials that can be collected, processed, and reprocessed to manufacture new products. These materials have the potential to be reused in some form, reducing the need for the extraction and production of raw materials.",
      includes: ["Paper and cardboard products.",
        "Glass bottles and jars.",
        "PET bottles (clear plastic bottles), HDPE bottles (colored plastic bottles), LDPE plastic bags, and  plastic containers.",
        "Aluminum cans, steel cans, tin foil, and certain metal packaging.",
        "Clothing, linens, and certain fabrics."],
      howToHandle: ["Set up separate bins or containers for different types of recyclables. Clearly label each bin for paper, glass, plastic, metal, etc.",
      "Do not mix non-recyclable items with recyclables. Contamination can lower the quality of the recycled materials.",
      "In some regions, there may be deposit systems for certain items like glass bottles or aluminum cans. Return these items to designated collection points for a refund.",
      "If curbside pickup is not available, take recyclables to designated recycling centers or drop-off points.",
      "Before recycling, consider if the item can be reduced (using less of it) or reused in its current form.",
      "Rinse out containers to remove food residue or contaminants. Dry materials like paper and cardboard to prevent them from getting soggy."],
    },

    {
      name: "Medical Waste",
      definition: "Medical waste, also known as clinical waste or healthcare waste, refers to any type of waste generated in healthcare facilities like hospitals, clinics, dental offices, laboratories, and veterinary clinics.",
      includes: ["Expired or unused medications and drugs.",
      "Needles, syringes, lancets, and scalpels..",
      "Human tissues, organs, and body parts that are removed during surgery or autopsy.",
      "Materials contaminated with radioactive substances used in medical imaging or treatments.",
      "Chemicals used in healthcare procedures"],
      howToHandle: ["Disposal Guidelines: Educate healthcare facilities, pharmacies, and individuals on proper disposal methods for medical waste, such as sharps containers and biohazard bags.",
      "Regulation Compliance: Provide information on local regulations governing the disposal of medical waste.",
      "Clearly label containers with appropriate symbols, warning labels, and information about the type of waste they contain.",
      "Provide training to healthcare staff on proper handling procedures and the importance of adhering to waste management protocols.",
      "Use leak-proof and puncture-resistant containers to prevent spills and protect against injuries from sharps.",
      "Segregate medical waste from regular waste at the point of generation using color-coded containers or bags. Different categories of medical waste should be separated."],
    },

    {
      name: "Electronic Waste",
      definition: "E-Waste (Electronic Waste) refers to discarded electrical or electronic devices that have reached the end of their useful life or are no longer wanted.",
      includes: ["Desktops, laptops, monitors, keyboards, mice, and other peripherals.",
      "Smartphones, tablets, and accessories like chargers and cables.",
      "Televisions, DVD players, VCRs, stereos, and other entertainment devices.",
      "Cameras, camcorders, and photography accessories."],
      howToHandle: ["Find local e-waste recycling centers or collection programs that are certified to handle electronic waste. Many municipalities and electronics manufacturers have established take-back programs.",
        "When transporting e-waste to a recycling center, handle it with care to prevent further damage. Use appropriate packaging or containers if needed.",
        "Data Wiping: Emphasize the importance of securely wiping personal data before recycling or disposing of electronic devices.",
        "Remove and properly dispose of any batteries from electronic devices before recycling.",
        "In some cases, especially for large or complex electronic equipment, it may be advisable to hire a professional disposal service."],
    },
    {
      name: "Construction and Demolition waste",
      definition: "Construction waste refers to the materials, debris, and by-products generated during construction, renovation, or demolition projects.It can originate from residential, commercial, industrial, and infrastructure projects.",
      includes: ["Unused concrete slabs, blocks, bricks, and other masonry materials.",
      "Scrap metal from construction projects, such as steel beams, pipes, and wiring.",
      "Unused glass from windows, doors, and other architectural elements.",
      "Plywood, pallets, and other wooden materials."],
      howToHandle: ["Separation: Encourage the sorting of construction waste on-site to divert recyclable materials from landfills.",
        "Local Facilities: Provide information on construction waste recycling centers or services available in the area.",
        "Promote the reuse of materials that are still in good condition. This can include salvaging wood, bricks, and other components for future projects.",
        "Keep records of the types and quantities of waste generated. This data can help identify areas for improvement and track progress towards waste reduction goals.",
        "Ensure compliance with local, state, and federal regulations regarding the handling and disposal of construction waste.",
        "For materials that cannot be reused or recycled, ensure they are properly disposed of in accordance with local regulations. This may involve transporting them to a designated waste disposal facility."],
    },
    
  ];
  return (
    <Layout>
        <div className="waste-types-container">
      <div className="waste-types-content">
        <h1>Types of Wastes</h1>
        {/* <img
          src="your-image-url.jpg" // Replace with your image URL
          alt="Waste Types"
          className="waste-image"
        /> */}
        {wasteTypesData.map((type, index) => (
          <div className="waste-type" key={index}>
            <h2>{type.name}</h2>
            <div className="waste-info">
              <div className="waste-subsection">
                <h3>Definition</h3>
                <p>{type.definition}</p>
              </div>
              <div className="waste-subsection">
                <h3>What it includes</h3>
                <ul>
                  {type.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="waste-subsection">
                <h3>How to Handle</h3>
                <ul>
                  {type.howToHandle.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        <Divider/>
        
        <AppBar position='random' sx={{ bgcolor: "black" }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Workshop
          </Typography>
         
        </Toolbar>

        </AppBar>
       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <Card sx={{ maxWidth: "400px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={Workshop1}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                Plastic recycling workshop
                </Typography>
                <Typography variant="body2">Mode:Online<br/>Date:12th November 2023<br/>Time:10am</Typography>
                
                <Link to="/Work_register">
                <Button variant="contained" color="success" sx={{float:'right'}}>Register</Button>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "400px", display: "flex", m: 7 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={Workshop2}
                alt={"no image"}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                Food waste reduction workshop
                </Typography>
                <Typography variant="body2">Mode:Online<br/>Date:6th November 2023<br/>Time:10am</Typography>
                <Link to="/Work_register">
                <Button variant="contained" color="success" sx={{float:'right'}}>Register</Button>
                </Link>
              </CardContent>
              </CardActionArea>
          </Card>
          
          </Box>
    </Layout>
  )
};

export default Learn