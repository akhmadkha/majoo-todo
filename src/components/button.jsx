import React from "react";
import PropTypes from "prop-types";

function ButtonPrimary(props) {
  return (
    <button className="px-4 py-2 bg-blue-500 rounded-full flex items-center gap-2 hover:bg-blue-700 hover:scale-105">
      <p className="text-white">Tambah task baru</p>
      {
        props?.icon() ?? null
      }
    </button>
  );
}

ButtonPrimary.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.func
};

export { ButtonPrimary };
