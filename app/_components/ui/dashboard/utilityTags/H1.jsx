const H1 = ({ children, className = "" }) => {
  return (
    <h1 className={`text-black dark:text-white ${className}`}>{children}</h1>
  );
};

export default H1;
