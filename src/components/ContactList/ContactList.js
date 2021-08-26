import React from "react";
import "./ContactList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operation";
import { getFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="list">
      {filterContacts.map(({ id, name, number }) => (
        <li className="item" key={id}>
          <p className="name">
            {name}: {number}
          </p>
          {
            <button
              className="button"
              data-key={id}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
