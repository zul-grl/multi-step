import Input from "./Input";
import Header from "./Header";
import Button from "./Button";
const Second = ({
  handleBack,
  handleNext,
  handleChange,
  formErrors,
  formValues,
}) => {
  const inputs = [
    {
      name: "Email",
      placeholder: "Your email",
      input: "email",
      type: "email",
    },
    {
      name: "Phone number",
      placeholder: "Your phone number",
      input: "phoneNumber",
      type: "tel",
    },
    {
      name: "Password",
      placeholder: "Your password",
      input: "password",
      type: "password",
    },
    {
      name: "Confirm password",
      placeholder: "Confirm password",
      input: "confirmPassword",
      type: "password",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={input.input}
            text={input.name}
            placeholder={input.placeholder}
            type={input.type}
            handleChange={handleChange}
            formErrors={formErrors[input.input]}
            formValues={formValues}
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
