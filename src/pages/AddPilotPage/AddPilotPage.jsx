import React from 'react';
import {Container} from 'react-bootstrap';
import { FooterView } from '../../components/FooterView/FooterView';
import HeaderView from '../../components/HeaderView';
import AddPilotFormView from '../../components/AddPilotFormView';


export function AddPilotPage({airline, navBarDropDowns}){
  return(
    <>
    <HeaderView navBarDropDowns={navBarDropDowns} />
    <Container className="mt-4">
        <AddPilotFormView airline={airline} />
    </Container>
    <FooterView />
    </>
  );
    
};