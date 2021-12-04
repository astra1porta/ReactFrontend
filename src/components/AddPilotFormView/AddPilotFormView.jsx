import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { addPilot } from "../../redux/features/pilotsSlice";
import { useNavigate } from "react-router-dom";
import genericIcon from "../../assets/img/genericIcon.png";

function company({ airline }) {
  switch (airline) {
    case "AA":
      return "American Airlines";
    case "AS":
      return "Alaska Airlines";
    case "FA":
      return "Frontier Airlines";
    default:
      return "UPS";
  }
}
const airlineLink = ({ airline }) => {
  switch (airline) {
    case "AA":
      return "/american-airlines/pilots";
    case "AS":
      return "/alaska-airlines/pilots";
    case "FA":
      return "/frontier-airlines/pilots";
    default:
      return "/UPS/pilots";
  }
};

export const AddPilotFormView = ({ airline }) => {
  const pilots = useSelector((state) => state.pilots.pilots);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [fleet, setFleet] = useState();
  const [seat, setSeat] = useState();
  const [domicile, setDomicile] = useState();
  const [trainingFacility, setTrainingFacility] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [pilotState, setPilotState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [areaCode, setAreaCode] = useState();
  const [prefix, setPrefix] = useState();
  const [suffix, setSuffix] = useState();
  const navigate = useNavigate();
  const handleCancel = () => {
    return navigate(airlineLink({airline}));
  }
  const handleAddPilot = (e) => {
    e.preventDefault();
    if (!firstName) return;
    dispatch(
      addPilot({
        firstName: firstName,
        lastName: lastName,
        fleet: fleet,
        seat: seat,
        domicile: domicile,
        trainingFacility: trainingFacility,
        company: company({ airline }),
        airline: airline,
        address1: address1,
        address2: address2,
        city: city,
        state: pilotState,
        postalCode: postalCode,
        areaCode: areaCode,
        prefix: prefix,
        suffix: suffix,
        avatar: { src: genericIcon, alt: "Generic Avatar" },
      }),
      navigate(airlineLink({airline}))
    );
  };

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="firstNameInput">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pilot First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="lastNameInput">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="fleetInput">
          <Form.Label>Fleet</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Pilot Fleet"
            onChange={(e) => setFleet(e.target.value)}
            value={fleet}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="seatInput">
          <Form.Label>Seat</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seat"
            onChange={(e) => setSeat(e.target.value)}
            value={seat}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="domicileInput">
          <Form.Label>Domicile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Domicile"
            onChange={(e) => setDomicile(e.target.value)}
            value={domicile}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="trainingFacilityInput">
          <Form.Label>Training Facility</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pilot Training Facility"
            onChange={(e) => setTrainingFacility(e.target.value)}
            value={trainingFacility}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="address1Input">
        <Form.Label>Address</Form.Label>
        <Form.Control
          placeholder="1234 Main St"
          onChange={(e) => setAddress1(e.target.value)}
          value={address1}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address2Input">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          placeholder="Apartment, studio, suite, or floor"
          onChange={(e) => setAddress2(e.target.value)}
          value={address2}
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="cityInput">
          <Form.Label>City</Form.Label>
          <Form.Control
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="stateInput"
          onChange={(e) => setPilotState(e.target.value)}
          value={pilotState}
        >
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <optgroup label="State">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </optgroup>
            <optgroup label="US Outlying Territories">
              <option value="AS">American Samoa</option>
              <option value="GU">Guam</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="PR">Puerto Rico</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="VI">Virgin Islands</option>
            </optgroup>
          </Form.Select>
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="postalCodeInput"
          onChange={(e) => setPostalCode(e.target.value)}
          value={postalCode}
        >
          <Form.Label>Postal Code</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="phoneInput">
          <InputGroup>
            <Form.Label className="d-flex align-self-center">Phone</Form.Label>
            &#40;
            <Form.Control
              className="small-thin-input"
              name="areaCodeInput"
              type="text"
              placeholder="xxx"
              maxLength="3"
              onChange={(e) => setAreaCode(e.target.value)}
              value={areaCode}
            />
            &#41;
            <Form.Control
              className="small-thin-input"
              name="prefixInput"
              type="text"
              placeholder="xxx"
              maxLength="3"
              onChange={(e) => setPrefix(e.target.value)}
              value={prefix}
            />
            <Form.Control
              className="small-thin-input"
              name="suffixInput"
              type="text"
              placeholder="xxxx"
              maxLength="4"
              onChange={(e) => setSuffix(e.target.value)}
              value={suffix}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button variant="primary" type="submit" onClick={handleAddPilot}>
            Submit
          </Button>
        </Col>
        <Col>
          <Button variant="danger" type="cancel" onClick={handleCancel}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

AddPilotFormView.propTypes = {};
