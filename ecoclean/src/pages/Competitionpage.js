


import React from 'react';
import {Link} from 'react-router-dom';


import '../styles/Competition.css';
import Layout from '../components/Layout/Layout';

function Competitionpage() {
  return (
    <Layout>
    <div className="Competitions" >
     <div className="Competitionpages"  >       
        <h1>Join the "Trash to Teasure movement" and Make a Sustainable Difference</h1>
      
        <div className="compcontainer">
            <div className="compsection">
                
            <h3>Recycling Art Contest</h3>
            <p><strong>Date:</strong>10th December 2023</p>
            <p><strong>Timings:</strong> 10.00am to 12.00am</p>
            <p><strong>Rules:</strong><ol><li>"The competition is open to participants of all ages.",</li>

            <li>"Participants should create artwork using recycled or upcycled materials.",</li>

            <li>"Artwork must be original and not a reproduction of existing work.",</li>

            <li>"The decision of the judges is final and binding.",</li>

            <li> "Prizes will be awarded to the top three posters,which may include certificates, swags like T-shirts, stickers etc."</li></ol>
            </p>
            <p></p>
            
            
            
            </div>

        </div>
        <div className="compcontainer1">
            <div className="compsection1">
            <h3>Waste to Energy Contest</h3>
            <p><strong>Date:</strong>22nd December 2023</p>
            <p><strong>Timings:</strong> 04:00am to 06.00am</p>
            <p><strong>Rules:</strong><ol><li>"The competition is centered around innovative waste-to-energy solutions.",</li>
            <li>" Teams should consist of 3-4 members.",</li>
            <li>"Participants must submit a project proposal outlining their waste-to-energy concept.",</li>
            <li>"Prizes will be awarded to the winning team, which may include certificates,swags like T-shirts, stickers etc."</li></ol>
            </p>
            <p></p>
           
            
            </div>

            <Link to="/Competition_register">
                <button>Register</button>
            </Link>

        </div>
        </div> 
    </div>
    </Layout>
  );
}

export default Competitionpage;