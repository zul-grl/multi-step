import Input from "./Input";
import Header from "./Header";
import Button from "./Button";

const First = ({ handleNext, handleChange, formErrors }) => {
  const inputs = [
    {
      name: "First name",
      placeholder: "Your first name",
      formErrors: formErrors.firstName,
      input: "firstName",
      type: "text",
    },
    {
      name: "Last name",
      placeholder: "Your last name",
      formErrors: formErrors.lastName,
      input: "lastName",
      type: "text",
    },
    {
      name: "Username",
      placeholder: "Your username",
      formErrors: formErrors.userName,
      input: "userName",
      type: "text",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
        {inputs.map((input, index) => (
          <Input
            name={input.input}
            key={index}
            text={input.name}
            placeholder={input.placeholder}
            error={input.error}
            type={input.type}
            handleChange={handleChange}
            formErrors={input.formErrors}
          />
        ))}
      </div>
      <Button variant="1/3" handleClick={handleNext} />
    </div>
  );
};

export default First;
