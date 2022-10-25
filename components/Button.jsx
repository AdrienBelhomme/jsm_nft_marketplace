const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className={`nft-gradient text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold ${classStyles} dark:text-white`}
  >
    {btnName}
  </button>
);

export default Button;
