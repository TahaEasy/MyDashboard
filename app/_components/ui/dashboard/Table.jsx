const Table = ({ children, className = "" }) => {
  return <table className={`table-auto w-full ${className}`}>{children}</table>;
};

const Tr = ({ children }) => {
  return (
    <tr className="bg-dash-back/25 border border-dash-back/75 rounded-2xl transition-all duration-200">
      {children}
    </tr>
  );
};
const Td = ({ children }) => {
  return (
    <td className="my-2 py-4 text-center text-text transition-all duration-200">
      {children}
    </td>
  );
};
const Th = ({ children }) => {
  return (
    <th className="pb-4 text-sm text-grayish transition-all duration-200">
      {children}
    </th>
  );
};

Table.Tr = Tr;
Table.Td = Td;
Table.Th = Th;

export default Table;
