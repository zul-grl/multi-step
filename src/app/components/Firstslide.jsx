import Input from "./Input";
import Header from "./Header";
import Button from "./Button";

const First = ({ handleNext }) => {
  const inputs = [
    {
      name: "First name",
      placeholder: "Your first name",
      error: "Нэрээ оруулна уу",
      type: "text",
    },
    {
      name: "Last name",
      placeholder: "Your last name",
      error: "Овгоо оруулна уу.",
      type: "text",
    },
    {
      name: "Username",
      placeholder: "Your username",
      error: "Хэрэглэгчийн нэрээ оруулна уу",
      type: "text",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
        {inputs.map((input, index) => (
          <Input
            key={index}
            text={input.name}
            placeholder={input.placeholder}
            error={input.error}
            type={input.type}
          />
        ))}
      </div>
      <Button variant="1/3" handleClick={handleNext} />
    </div>
  );
};

export default First;
