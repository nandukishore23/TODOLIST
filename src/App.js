import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import ColorSchemesExample from './components/nav.js';
import Progress from './components/Inproggres.js';
import Review from './components/Inreview.js';
import Completed from './components/Completed.js';
import Coc from './components/Main.js';
import GhostIcon from './components/ghosticon.svg';
// import {Link} from "react-router-dom";
// import { useState } from 'react';


function App() {
 
  
  return (
    <Container fluid className="px-0">
      
      <Row className="mx-0">
        <Col md={2} className="text p-3">
          <>
            <div className='m'><img src={GhostIcon}/>    Task boards</div>
            <hr/>
            <button className="mb-2" style={{width:'95%', height:'15%'}}>Freelance Projects</button>
            <br />
            <button className="mb-3"style={{width:'95%',height:'15%'}}>SBI Outcomes</button>
            <br />
            <button className="mb-3"style={{width:'95%',height:'15%'}}>HPCL Projects</button>
            <hr />
            <button className='bu' href="/Main.js" >+ Add New Project</button>
          
          </>
        </Col>
       {/* <YourComponent/> */}
        {/* 1st component */}
        <Col md={10} className="texttodo p-3">
          <div className="Myprojects">My Projects</div>
          <hr/>
          {/* <Coc /> */}
        {/* </Col>
        </Row> */}
        <Row>
        {/* 2nd component */}
        <Col md={3} className="text-center p-3">
          <Coc/>

        </Col>
        <Col md={3} className="text-center p-3">
          <Progress />
        </Col>
        {/* 3rd component */}
        <Col md={3} className="text-center p-3">
          <Review />
        </Col>
        {/* 4th components */}
        <Col md={3} className="text-center p-3">
          <Completed />
        </Col>
      </Row>
      </Col>
        </Row>
    </Container>
  );
}



export default App;


