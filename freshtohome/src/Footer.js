import React from 'react'

import logo from "./images/logo-medium.png";
import {
    FaUser,
    FaShoppingCart,
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaTwitter,
  } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="footer">
          <div className="footer_row0">
            <div className="footer_row0_col1">
              <img src={logo} />
              <label>
                Freshtohome Foods Private Limited No. 1, 2nd Floor, Carlton Towers,
                Old Airport Road, Bangalore - 560008
              </label>
            </div>
            <div className="footer_row0_col2">
              <ul>
                <li>FAQ</li> <li>News room</li> <li>Blog</li>{" "}
                <li>Didn't find your product?</li> <li>Terms and Conditions</li>{" "}
                <li>Privacy Policy</li> <li>Refund Policy</li> <li>Sellers</li>{" "}
                <li>Contact Us</li>
              </ul>
              <div className="footer_row0_col2_images">
                <img src={require("./images/appstore_badge.png")} />
                <img src={require("./images/playstore_badge.png")} />
              </div>
              <label>
                Order your daily Fish, Poultry and Mutton. Get it delivered at your
                door steps.
              </label>
              <p>
                Bangalore, Delhi, Gurgaon, Noida, Ghaziabad, Mumbai, Pune, Chennai,
                Hyderabad, Cochin, Trivandrum, Calicut, Kolkata, Warangal, Jaipur,
                Kanpur, Lucknow, Faridabad, Chandigarh, Mohali, Coimbatore, Vizag,
                Dehradun, Mysore, Mangalore, Nagpur, Nashik and more
              </p>
            </div>
            <div className="footer_row0_col3">
              <h6>Contact Us</h6>
              <label>1800-313-3302</label>
              <label>customercare@freshtohome.com</label>
              <h6>Follow Us</h6>
              <ul>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_row1">
            <h6>Marine Fish</h6>
            <label>
              Anchovy / Kozhuva / Natholi | Barracuda / Cheelavu | Pomfret / Avoli |
              Threadfin Bream / Kilimeen / Goat Fish | Butter Fish / Punnarameen |
              Cobia / Motha | Emperor / Eari | Garfish / Kola | Grey Mullet /
              Thirutha | Grouper / Reef Cods / Kalava | Mackerel / Ayala | Salmon |
              Lady Fish / Silver whiting / Kane | Silver Biddy / Pranjil | Long
              Whiskered / Catfish | Mahi Mahi | Milk Fish / Poomeen | Pony Fish /
              Mullan | Red Snapper / Chempalli / Rane | Reef Cods / Kalava | Ribbon
              Fish / Vaala | Sail Fish / Ola Meen | Sardine / Mathy / Mathi | Seer
              Fish / Neymeen / Surumai | Shark | Shrimp Scad / Vatta Paara | Pomfret
              / Avoli / Pabda | Snapper | Sole Fish / Manthal / Repti | Sword Fish |
              Trevally / Vatta | Tuna | White Sardine / Veloori | Jobfish | Stingray
              / Thirandi | Eel / Mananjil | Kallanki | Queen Fish | Silver Belly /
              Thaali Mullen |
            </label>
            <h6>Shell Fish</h6>
            <label>
              Shrimp | Clam / Kakka | Cuttle Fish | Green Mussel Meat /
              Kallummekkaya | Lobster | Prawns / Venami | Octopus | Oyster Meat |
              Sand Lobster | Scampi / Attukonchu / Jinga / Chingdi | Crab | Mud Crab
              | Squid / Koonthal | Tiger prawn / Bagda / Chingri
            </label>
            <h6>Freshwater Fish</h6>
            <label>
              Baasa / Pangasius | Catla / Katla | Freshwater Milk Fish / Kayal
              Poomeen | Goby / Poolan / Bele Mach | Mrigal / Kanni Meen | Mullet /
              Kanambu / Parshe Maach | Pearl Spot / Karimeen / Koral | Rohu |
              Tilapia | Catfish / Manjakoori / Tengra Mach | Barramundi / Bhetki /
              Asian Seabass |
            </label>
          </div>
          <div className="footer_row2">
            © 2022 www.freshtohome.com. All Rights Reserved.
          </div>
        </div>
      );
}
