
import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../modal/modal_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    const { openModal } = this.props;
      if (this.props.loggedIn) {
        return (
            <div>
                <Link to={'/habits'}>All Habits</Link>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
              <button onClick={ () => openModal('login') }>
               Login 
             </button>
              <button onClick={ () => openModal('signup') }>
                Sign Up
              </button>
              <Modal />
            </div>
        );
      }
  }

  render() {
      return (
        <div>
            <h1>FieldLily</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
