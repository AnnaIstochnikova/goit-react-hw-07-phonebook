import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter, getUsers } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const usersFromStore = useSelector(getUsers);
  const filter = useSelector(getFilter);

  const filteredUsers = usersFromStore.filter(user =>
    user.name.toUpperCase().includes(filter.toUpperCase())
  );
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredUsers.map(contact => {
        const { name, phone, id } = contact;
        return (
          <li key={id}>
            {name}: {phone}
            <button
              className="button-delete"
              type="button"
              onClick={() => handleDelete(id)}
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
