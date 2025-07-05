const Input = ({ type = 'text', name, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required
      onChange={onChange}
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;