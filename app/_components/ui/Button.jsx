const Button = ({ children, onClick = () => {}, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-start items-center gap-2 p-2 border border-bluey hover:bg-transparent bg-bluey text-sm text-white hover:text-bluey rounded-md transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
