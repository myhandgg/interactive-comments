function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      className="w-32 p-3 font-semibold text-white uppercase duration-300 rounded-lg bg-moderate-blue hover:opacity-70"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
