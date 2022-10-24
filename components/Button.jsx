import React from 'react';

const Button = ({ classStyles }) => (
  <button
    type="button"
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold ${classStyles} dark:text-white`}
  >
    Button
  </button>
);

export default Button;
