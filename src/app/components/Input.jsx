const Input = ({ text, placeholder }) => {
  return (
    <div>
      <p>{text}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
export default Input;
