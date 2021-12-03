import React from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";

export const AddPilotFormView = () => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="firstNameInput">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Pilot First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="lastNameInput">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="fleetInput">
          <Form.Label>Fleet</Form.Label>
          <Form.Control type="text" placeholder="Enter Pilot Fleet" />
        </Form.Group>

        <Form.Group as={Col} controlId="seatInput">
          <Form.Label>Seat</Form.Label>
          <Form.Control type="text" placeholder="Seat" />
        </Form.Group>
        <Form.Group as={Col} controlId="domicileInput">
          <Form.Label>Domicile</Form.Label>
          <Form.Control type="text" placeholder="Domicile" />
        </Form.Group>
        <Form.Group as={Col} controlId="trainingFacilityInput">
          <Form.Label>Training Facility</Form.Label>
          <Form.Control type="text" placeholder="Pilot Training Facility" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="address1Input">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address2Input">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, suite, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="cityInput">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="stateInput">
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

        <Form.Group as={Col} controlId="postalCodeInput">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="areaCodeInput">
          <InputGroup>
            <Form.Label className="d-flex align-self-center">Phone</Form.Label>
            &#40;
            <Form.Control
              className="small-thin-input"
              name="areaCodeInput"
              type="text"
              placeholder="xxx"
              maxLength="3"
            />
            &#41;
            <Form.Control
              className="small-thin-input"
              name="prefixInput"
              type="text"
              placeholder="xxx"
              maxLength="3"
            />
            <Form.Control
              className="small-thin-input"
              name="suffixInput"
              type="text"
              placeholder="xxxx"
              maxLength="4"
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

AddPilotFormView.propTypes = {};
