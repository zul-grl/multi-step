import Input from "./Input";
import Header from "./Header";
import Button from "./Button";

const First = ({
  handleNext,
  handleChange,
  formErrors,
  formValues,
  setFormErrors,
}) => {
  const inputs = [
    {
      name: "First name",
      placeholder: "Your first name",
      input: "firstName",
      type: "text",
    },
    {
      name: "Last name",
      placeholder: "Your last name",
      input: "lastName",
      type: "text",
    },
    {
      name: "Username",
      placeholder: "Your username",
      input: "userName",
      type: "text",
    },
  ];

  const handleClick = () => {
    let haveError = false;
    if (!formValues.firstName.trim()) {
      setFormErrors((prev) => ({ ...prev, firstName: "Нэрээ оруулна уу" }));
      haveError = true;
    }
    if (!formValues.lastName.trim()) {
      setFormErrors((prev) => ({ ...prev, lastName: "Овгоо оруулна уу." }));
      haveError = true;
    }
    if (!formValues.userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
      haveError = true;
    }

    if (!haveError) {
      handleNext();
    }
  };

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
      <Button variant="1/3" handleClick={handleClick} />
    </div>
  );
};

export default First;
