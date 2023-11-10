import React from 'react';
import {Link} from 'react-router-dom';


import '../styles/Competition.css';
import Layout from '../components/Layout/Layout';

function Competitionpage() {
  return (
    <Layout>
    <div className="Competitions" >
     <div className="Competitionpages"  >       
        <h1>BE A HERO FOR A CLEANER PLANET</h1>
      <h2>"Clean up the Earth, it's the only Home we have got"</h2>
        <div className="compcontainer">
            <div className="compsection">
                
            <h3>Mithi River Clean Up</h3>
            <p><strong>Date:</strong>10th December 2023</p>
            <p><strong>Timings:</strong> 04.00pm to 06.00pm</p>
            <p><strong>Rules:</strong>

            
            </p>
            <p></p>
            
            
            
            </div>

        </div>
        <div className="compcontainer1">
            <div className="compsection1">
            <h3>Kadri Park Clean Up</h3>
            <p><strong>Date:</strong>22nd December 2023</p>
            <p><strong>Timings:</strong> 04:00am to 06.00am</p>
            <p>
            </p>
            <p></p>
           
            
            </div>

            <Link to="/Cleanup_register">
                <button>Register</button>
            </Link>

        </div>
        </div> 
    </div>
    </Layout>
  );
}

export default Competitionpage;