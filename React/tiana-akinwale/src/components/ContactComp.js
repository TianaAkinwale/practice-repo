import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

class ContactComp extends Component {
  render() {
    const contactCompElements = this.props.contactCompElements
    const {
      heading, 
      /* subHeading */
      subHeading2,
      email,
      phone,
      button
    } = contactCompElements
    
    return (
      <div>
        <section id="contactCompSec">
        <h1 className="contactHeading">{heading}</h1>
        <div className="contactDiv">
          <h3 className="subs">Do you have an</h3>
          <h3 className="subs">idea for a project?</h3>
          <p className="subs">{subHeading2}</p>
          <div className='contactIcons'>
            <a href={phone} title='Text me on Whatsapp' target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href={email} title='Send me an Email' target='_blank' rel="noreferrer">
              <span className="material-symbols-outlined">mail</span>
          </a>  
            </div>  
        </div>
        <div class='contactFormDiv'>
          <form>
            <input type="text" placeholder="Name" required/><br />
            <input type="email" placeholder="Email" required/><br />
            <input type="text" placeholder="Subject" required/><br />
            <textarea placeholder="Message" /* name="message" */ required rows="5" cols="90">
            </textarea><br />
            <button id='contactbtn'>{button}</button>
          </form> 
        </div>
      </section>
      </div>
    )
  }
}

export default ContactComp