import React from 'react';
import {Container} from 'react-bootstrap';
import { FooterView } from '../../components/FooterView/FooterView';
import HeaderView from '../../components/HeaderView';
import EditPilotFormView from '../../components/EditPilotFormView';
import { useParams } from 'react-router';


export function EditPilotPage({navBarDropDowns }) {
 const params = useParams();
  return (
    <>
      <HeaderView navBarDropDowns={navBarDropDowns} />
      <Container className="mt-4">
        <EditPilotFormView pilotId = {params.pilotId} />
      </Container>
      <FooterView />
    </>
  );
};