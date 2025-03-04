const Input = ({ placeholder, Icon, ...props }) => {
  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          type="text"
          className="w-full ps-3 pe-10 py-2 bg-transparent placeholder:text-text/40 text-text/60 text-sm border border-text/20 rounded-md transition duration-300 ease focus:outline-none focus:border-text/40 hover:border-text/30 shadow-sm focus:shadow"
          placeholder={placeholder}
          {...props}
        />

        <Icon className="absolute w-5 h-5 top-1/2 -translate-y-1/2 end-2.5 text-text/60" />
      </div>
    </div>
  );
};

export default Input;
