import React from 'react';
import ImgHolder from '../images smwa/ImgHolder.png'
import Footer from './Footer.jsx'

const LandingPage = ({}) => {
    return (
      <div id="landingPageDiv">
        <h3>Welcome to SocialConnect</h3> {/* home icon */}
        <p>Join the community and start</p>
        <h1>Discover and Share</h1>
        <p>Explore posts from users around the world</p>
        <button>Sign Up</button>
        <button>Log In</button>
        <img src={ImgHolder} alt='Profile Picture' id="landPic"/>
        <p>Connect with friends and family</p>
        <div>
            <p>Find new content and engage with others</p>
            <p>Keep up to date with trends, Build meaningful connections and engage with a vibrant community.</p>
            <p>Share your thoughts, photos, videos with friends and followers</p>
            <p>Stay connected to your friends, family, acquaintances through private messaging.</p>
            <p>Share personal updates, photos and videos in a secure environment.</p>
            <button>Sign Up Now</button>
            <img src={ImgHolder} alt='Profile Picture' id="landPic"/>
        </div>
        <div>
          <h1>Customize your experience</h1>
          <p>Personalize your SocialConnect</p>
          <h3>Step 1</h3>
          <p>Create your unique profile and customize your settings</p>
          <h3>Step 2</h3>
          <p>Explore different themes and layout options</p>
          <h3>Step 3</h3>
          <p>Set up notifications and privacy preferences</p>
          <button>Get Started</button>
        </div>
        <h1>What People Say</h1>
        <p>Hear from some of our amazing users</p>
        <div>
          <p><b>SocialSphere has transformed how I connect with others</b></p>
          <p><b>*****</b></p>
          <p><b>Shade Fenty</b></p>
          <p>Social Media Enthusiast</p> {/* a slider */}
        </div>
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="landPic"/>
          <h1>Join SocialConnect Today</h1>
          <p>Start connecting and sharing</p>
          <button>Sign Up Now</button>
        </div>
        <Footer />
      </div>
    )
  }

export default LandingPage