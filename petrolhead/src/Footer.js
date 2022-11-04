import React from 'react'

export default function Footer() {
  return (
    <div class="footerrow">
        <div className='fr_col0'>
            <img src={require("./images/Logo Yellow.jpg")} />
        </div>
          <div class="fr_col1">
            <h4>About</h4>
            <ul>
              <li>
                Petrolhead Customs is a Kochi-based custom garage that conceives,
                customises and hand finishes motorcycles,jeeps,cars to create unique,
                one-of-a-kind machines.
              </li>
              <li>
                <p>Copyright © 2022 Petrolhead Customs. All rights reserved.</p>
              </li>
            </ul>
          </div>
          <div class="fr_col2 col">
            <h4> </h4>
            <ul>
             
            </ul>
          </div>
          <div class="fr_col3 col">
            <h4>Social</h4>
            <ul>
              <li><a href='https://www.facebook.com/petrolheadcustoms'>Facebook</a></li>
              <li><a href='https://www.instagram.com/petrolheadcustoms'>Instagram</a></li>
              <li><a href='https://www.youtube.com/channel/UCdXJBTFmJmITBUsTK4YSjSg' >Youtube</a></li>
            </ul>
          </div>
          <div class="fr_col4 col">
            <h4>Contact</h4>
            <ul>
              <li>petrolheadcustomsgarage@gmail.com</li>
            </ul>
          </div>
        </div>
  )
}
