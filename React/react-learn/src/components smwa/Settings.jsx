import React from 'react'
import ImgHolder from '../images smwa/ImgHolder.png'
import Footer from './Footer.jsx'

const Settings = ({}) => {
      return (
        <div className="settingsDiv">
            <h1 className="settingsHeader">Settings</h1>
            <div id="set1">
              <img src={ImgHolder} alt='Profile Picture' id="profilePic"/>
              <div>
                <p><b>Change Profile Picture</b></p>
                <p>Edit Profile Information</p>
              </div>
            </div>
            <div id="set2">
              <p id="set2P1"><b>Language preferences</b></p>
              <p id="set2P2"><b>Notification Settings</b></p>
              <p id="set2P3"><b>Account Settings</b></p>
              <p id="set2P4"><b>Help and support</b></p>
            </div>
            <div>
              <p id="set3"><b>Sign out</b></p>
            </div>
            <Footer />
        </div>
      )
    }
  
export default Settings