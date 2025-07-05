const Button = ({ text, loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition-all"
    >
      {loading ? 'Sending...' : text}
    </button>
  );
};

export default Button;
