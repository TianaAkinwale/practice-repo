import React, { Component } from 'react'
/* import CartIcon from './CartIcon'
 */
class NavBar extends Component {
   constructor() {
    super()
    
    this.state = {
      className: 'sidebar'
    };
    this.openSideBar = this.openSideBar.bind(this);
  }

  openSideBar() {
    if (this.state.className === 'sidebar') {
      this.setState({ className: 'show-sidebar' });
    } else {
      this.setState({ className: 'sidebar' });
    }
  }

  /* render() {
    return (
      <button className={this.state.className} onClick={this.openSB}>
        Toggle Class
      </button>
    );
  }
} */

  render() {
    const navBarElements = this.props.navBarElements
    const  {
        openSB,
        home,
        about,
        skills,
        services,
        projects,
        contact
      } = navBarElements
    return (
      <div>
        {/* dark mode/// */}
        <button className="sidebar-toggle" onClick={this.openSideBar}>
            <i className="fas fa-bars">{openSB}</i>
        </button>
        {/* <button className="sidebar-toggle" onClick={this.openSidebar}>
            <i className="fas fa-bars">{openSB}</i>
        </button> */}
        <aside className={this.state.className}>
            <div className="sidebar-header">
{/*                 <CartIcon />
 */}                {/* <button className="closeBtn">
                    <i className="fas fa-times">{closeSB}</i>
                </button> */}
            </div>
            <ul>
                <li className="animations"><a href="./HomeComp.js" className="link">{home}</a></li>
                <li className="animations"><a href="./AboutComp.js" /*href not working */className="link">{about}</a></li>{/* will include download cv */}
                <li className="animations"><a href="Login.html" className="link">{services}</a></li>
                <li className="animations"><a href="Reg.html" className="link">{skills}</a></li>
                <li className="animations"><a href="Contact.html" className="link">{projects}</a></li>
                <li className="animations"><a href="Contact.html" className="link">{contact}</a></li>
            </ul>
        </aside>
      </div>
    )
  }
}

export default NavBar