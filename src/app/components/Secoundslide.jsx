import Button from "./Button";
import Header from "./Header";
import Input from "./Input";
const Second = ({ handleBack ,handleNext}) => {
  const inputs = [
    {
      name: "Email*",
      placeholder: "Your email",
      error: "Мэйл хаягаа оруулна уу",
    },
    {
      name: "Phone number",
      placeholder: "Your phone number",
      error: "Утасны дугаараа оруулна уу..",
    },
    {
      name: "Password",
      placeholder: "Your password",
      error: "Нууц үгээ оруулна уу",
    },
    {
      name: "Confirm password",
      placeholder: "Confirm password",
      error: "Нууц үгээ давтаж оруулна уу",
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
          />
        ))}
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="back" handleClick={handleBack} />
        <Button variant="2/3" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default Second;
