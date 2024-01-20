import React from 'react'
import Footer from './Footer.jsx'
import ImgHolder from '../images smwa/ImgHolder.png'

const Notifications = ({notificationsElements}) => {
  const {like, comment, share, follow, post} = notificationsElements;

  return (
    <div id="NotificationsDiv">
        <h1 id="NotificationsHeader">Notifications</h1>
        <h4>Recent Activity</h4>
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{like}</p>
        </div>
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{follow}</p>
        </div>            
        <h4>Earlier</h4>
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{comment}</p>
        </div>            
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{post}</p>
        </div>            
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{like}</p>
        </div>            
        <h4>Older</h4>
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{post}</p>
        </div>            
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{comment}</p>
        </div>            <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{follow}</p>
        </div>            
        <div>
          <img src={ImgHolder} alt='Profile Picture' id="notifPic"/>
          <p id="np1">{share}</p>
        </div>            
        <Footer />
    </div>
  )
}
  
export default Notifications