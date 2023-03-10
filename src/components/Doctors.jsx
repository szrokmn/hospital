import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddModal } from "./AddModal"

const Doctors = ({ doctors }) => {

    const [show, setShow] = useState(false);
    const [selectedDrName, setSelectedDrName] = useState("")

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const handleClick = (drName) => {
        // handleShow()
        setShow(true)
        setSelectedDrName(drName)
    }
    console.log(selectedDrName)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "purple" }}>
        Our Doctors
      </h3>
      <Row className="justift-content-center">
        {doctors.map((dr) => (
          <Col key={dr.id}>
            <img src={dr.img} alt="dr.name" className="img-thumbnail doctor-img" xs={6} sm={4} md={3} onClick={
              () => handleClick(dr.name)
              // ()=> {
              //   setShow(true)
              //   selectedDrName(dr.Name)
              // }
              }/>
            <h4>{dr.name}</h4>
            <h6>{dr.dep}</h6>
          </Col>
        ))}
      </Row>
      {/* <AddModal show={show} handleClose={handleClose}/> */}
      <AddModal show={show} handleClose={()=> setShow(false)} 
      drName={selectedDrName}
      />
    </Container>
  );
};

export default Doctors;
