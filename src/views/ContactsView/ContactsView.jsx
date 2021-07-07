import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';

import ContactForm from 'components/ContactForm';
import Notification from 'components/Notification';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import styles from './ContactsView.module.css';
import appearZoom from 'animations/appearZoom.module.css';

class ContactsView extends Component {
  componentDidMount() {
    const { contactsFetch } = this.props;

    contactsFetch();
  }

  render() {
    const contactListRef = React.createRef();
    return (
      <>
        <div className={styles.ContactsView}>
          <ContactForm />
          <Filter />
          <CSSTransition
            in={true}
            appear={true}
            timeout={250}
            classNames={appearZoom}
            nodeRef={contactListRef}
            unmountOnExit
          >
            <ContactList contactListRef={contactListRef} />
          </CSSTransition>
        </div>

        <Notification />
      </>
    );
  }
}

export default ContactsView;
