import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectUsers } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { useState } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const usersFromStore = useSelector(selectUsers);
  const [userData, setUserData] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newName = form.elements.name.value;

    const sameName = usersFromStore.find(user => user.name === userData.name);
    if (sameName === undefined) {
      dispatch(addContact(userData));
    } else {
      alert(`${newName} is already in contacts`);
    }
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <h3>Name</h3>
          <input
            className="input--name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e =>
              setUserData(prev => ({ ...prev, name: e.target.value }))
            }
          />
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e =>
              setUserData(prev => ({ ...prev, phone: e.target.value }))
            }
          />
          <button className="button--submit" type="submit">
            Add contact
          </button>
        </>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  userData: PropTypes.object,
  h3: PropTypes.string,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  newContact: PropTypes.object,
  sameName: PropTypes.object,
};
