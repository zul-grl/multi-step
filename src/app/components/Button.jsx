const Button = ({ variant, handleClick }) => {
  const styles = {
    primary:
      "w-[100%] bg-black text-white rounded-lg p-2 flex items-center justify-center gap-2",
    back: "w-[30%] bg-white text-black border rounded-lg p-2 flex items-center justify-center gap-2",
  };

  const getText = () => {
    switch (variant) {
      case "1/3":
        return "Continue 1/3 >";
      case "2/3":
        return "Continue 2/3 >";
      case "3/3":
        return "Submit 3/3 >";
      case "back":
        return "< Back";
      default:
        return "Button";
    }
  };
  return (
    <button
      onClick={handleClick}
      className={variant === "back" ? styles.back : styles.primary}
    >
      {getText()}
    </button>
  );
};

export default Button;
