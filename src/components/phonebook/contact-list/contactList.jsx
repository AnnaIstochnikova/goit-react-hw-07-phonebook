import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter, getUsers } from 'redux/selectors';
import { addUsersFromLocalStorage, deleteUser } from 'redux/usersSlice';

export const ContactList = () => {
  const usersFromStore = useSelector(getUsers);
  const filter = useSelector(getFilter);

  const filteredUsers = usersFromStore.filter(user =>
    user.name.toUpperCase().includes(filter.toUpperCase())
  );
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteUser(contactId));
  };

  useEffect(() => {
    try {
      const contactsFromLocalStorage = localStorage.getItem('Contacts');
      const data = JSON.parse(contactsFromLocalStorage);
      if (data === null) {
        localStorage.setItem('Contacts', JSON.stringify([]));
      } else {
        dispatch(addUsersFromLocalStorage(data));
      }
    } catch (error) {
      console.error('Error ', error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(usersFromStore));
  }, [usersFromStore]);

  return (
    <ul>
      {filteredUsers.map(contact => {
        const { name, phoneNumber, id } = contact;
        return (
          <li key={id}>
            {name}: {phoneNumber}
            <button
              className="button-delete"
              type="button"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  usersFromStore: PropTypes.object,
  filter: PropTypes.string,
  filteredUsers: PropTypes.object,
  dispatch: PropTypes.func,
};
