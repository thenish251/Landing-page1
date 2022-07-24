import React, { Component } from "react";
import "./Body.css";
import a from "../asserts/a.png";
import b from "../asserts/b.png";
import c from "../asserts/c.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";


class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="main-container">
                {/* <div className="container-title">
                    C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time
                </div>
                <div className="sub-title">

                    • C.R.I.'s'energy efficient products are well recognized by various Goverment Institute, as trustworthy products for various projects across the globe to save energy.<br />
                    • C.R.I is the higest contributor in the country for the projects of EESL (Energy Efficiency Service Limited) to replace the old inefficient pumps with 5 Start rated energy efficient smart pumps with IoT enabled control panel.
                </div> */}
                <div className="body">
                    <div className="body-left">

                        <img src={a} alt="logo" className="alogo" />

                    </div>
                    <div className="body-right">
                        <div className="container-title">
                            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time
                        </div>
                        <div className="sub-title">

                          <p>  • C.R.I.'s'energy efficient products are well recognized by various Goverment Institute, as trustworthy products for various projects across the globe to save energy.</p>
                           <p> • C.R.I is the higest contributor in the country for the projects of EESL     (Energy Efficiency Service Limited) to replace the old inefficient pumps with 5 Start rated energy efficient smart pumps with IoT enabled control panel.</p>
                        </div>
                        <img src={b} alt="logo" className="blogo" />
                        <div className="right-decription">
                            Goverment of India has awarded the <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,joint Managing Director of C.R.I Group received the award from Smt. Sumitra Mahajan, Speaker if Lok Sabha & Shri. Raj Kumar Singh,Honorable Minister of State.
                        </div>
                    </div>

                </div>
                <div className="body-center">
                    <div className="body-center-description">
                        <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION </h4>
                    </div>
                    <img src={c} alt="logo" className="clogo" />
                    <div className="text">
                        <p>Valves-Pumps-Pipes-IoT Drives& Controllers-Wires & Cables-Solar System-Motors</p>
                    </div>
                    <hr size="2" width="100%" color="red" />
                </div>
                <div className="footer">
                    <div className="footer-title">
                        <h4>C.R.I FLUID SYSTEM PRODUCT CATER TO DIVERSE SEGMENTS</h4>
                    </div>
                    <div className="footer-text">
                        CHEMICAL & PROCESS| POWER | WATER & WASTE| OILS & GAS| PHARMA|SUGARS & DISTILLERIES |PAPER & PULP| MARINE & DEFENCE| METAL & MINING| FOOD & BEVERAGE|<br />
                        PETROCHEMICAL & REFINERIES| BUILDING| HVAC| FIRE FIGHTING| AGRICULTURE & RESIDENTIAL
                    </div>
                    <div className="footer-body">
                        <div className="footer-icon" >
                            <FaPhoneAlt />  Toll free 1800 200 1234
                        </div>
                        <div className="footer-icon">
                            < BsFacebook />www.facebook.com/cripumps
                        </div>
                        <div className="footer-icon">
                            <TbWorld />www.crigroups.com
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}



export default Body;