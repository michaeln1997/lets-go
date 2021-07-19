import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
         <NavBar />
        <Container fluid>
          <h1 className="display-3">My Contact Details</h1>
          <p className="lead">Here are my contact details </p>
          <p className="lead">Email : michaelgn1997@gmail my email </p>
          <p className="lead">Phone : 786 612 6912 </p>
          <p className="lead">I would be available from 10 am to 12 am </p>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Contact;
