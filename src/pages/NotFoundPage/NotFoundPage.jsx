import React from "react";
import { HeaderView } from "../../components/HeaderView/HeaderView";
import image from "../../assets/img/Amelia-Earhart.jpg";
import { FooterView } from "../../components/FooterView/FooterView";

export const NotFoundPage = ({ navBarDropDowns }) => (<><HeaderView navBarDropDowns={navBarDropDowns} />
  <div className="fourOhFour d-flex flex-column align-items-center" style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"contain"}}>
    <div><h1>404 Page, not found.</h1></div>
    
  </div>
  <FooterView />
  </>
);
