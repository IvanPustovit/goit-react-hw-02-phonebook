import React from "react";
import PropTypes from "prop-types";

const Filter = ({ handleChangeNameFilter, filterContacts }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={handleChangeNameFilter}
        onInputCapture={filterContacts}
      />
    </div>
  );
};

Filter.propTypes = {
  handleChangeNameFilter: PropTypes.func.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
