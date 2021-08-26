import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";
import "./Filter.css";
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className="label" name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <input
        className="input-filter"
        value={filter}
        type="text"
        id="filter"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
