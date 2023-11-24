import PropTypes from 'prop-types';

import { Filter } from './filter/filter';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/usersSlice';
import { ContactList } from './contact-list/contactList';
import { ContactForm } from './contact-form/contactForm';

export const Phonebook = () => {
  const dispatch = useDispatch();

  const findContact = event => {
    event.preventDefault();
    const search = event.target.value;
    dispatch(addFilter(search));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter filterFn={findContact} />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};

Phonebook.propTypes = {
  dispatch: PropTypes.func,
  deleteContact: PropTypes.func,
  findContact: PropTypes.func,
  h1: PropTypes.string,
  h2: PropTypes.string,
};
