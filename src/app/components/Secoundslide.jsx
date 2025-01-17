import Input from "./Input";
import Header from "./Header";
import Button from "./Button";
import * as motion from "motion/react-client";
import { useState } from "react";
const Second = ({
  handleBack,
  handleNext,
  handleChange,
  formErrors,
  formValues,
  setFormErrors,
}) => {
  const [isVisible, setIsVisible] = useState(true);
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
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return regex.test(email);
  };
  const handleClick = () => {
    let haveError = false;
    if (!formValues.email.trim()) {
      setFormErrors((prev) => ({ ...prev, email: "Мэйл хаягаа оруулна уу" }));
      haveError = true;
    } else if (!validateEmail(formValues.email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Зөв мэйл хаяг оруулна уу",
      }));
      haveError = true;
    }
    if (!formValues.phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу.",
      }));
      haveError = true;
    } else if (formValues.phoneNumber.trim().length < 8) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
      haveError = true;
    } else if (isNaN(formValues.phoneNumber.trim())) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Зөв утасны дугаар оруулна уу",
      }));
      haveError = true;
    }
    if (!formValues.password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Нууц үгээ оруулна уу",
      }));
      haveError = true;
    } else if (formValues.password.trim().length < 6) {
      setFormErrors((prev) => ({
        ...prev,
        password: "6 оронтой тоо оруулна уу",
      }));
      haveError = true;
    }
    if (!formValues.confirmPassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж оруулна уу",
      }));
      haveError = true;
    } else if (formValues.password !== formValues.confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үг таарахгүй байна",
      }));
      haveError = true;
    }
    if (!haveError) {
      handleNext();
    }
    localStorage.setItem("email", formValues.email);
    localStorage.setItem("phoneNumber", formValues.phoneNumber);
    localStorage.setItem("password", formValues.password);
    localStorage.setItem("confirmPassword", formValues.confirmPassword);

    setIsVisible(!isVisible);
  };
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -20, opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-[#FFFFFF] w-[480px] min-h-[655px] flex flex-col rounded-s-lg justify-between p-8"
    >
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
      <div className="flex justify-between gap-2 mt-6">
        <Button variant="back" handleClick={handleBack} />
        <Button variant="2/3" handleClick={handleClick} />
      </div>
    </motion.div>
  );
};
export default Second;
