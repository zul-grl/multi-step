"use client";
import { useState } from "react";
import First from "./components/Firstslide";
import Second from "./components/Secoundslide";
import Third from "./components/Thirdslide";
import Last from "./components/Lastslide";

export default function Home() {
  const [currentslide, setCurrentslide] = useState(0);
  const Formstep = [First, Second, Third, Last][currentslide];
  const [formvalue, setValue] = useState("");
  const handleNext = () => {
    const { firstName, lastName, userName } = formValues;
    let haveError = false;
    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруулна уу",
      }));
      haveError = true;
    }

    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Овгоо оруулна уу.",
      }));
      haveError = true;
    }

    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэрээ оруулна уу",
      }));
      haveError = true;
    }
    if (haveError == false) {
      setCurrentslide(currentslide + 1);
    }
  };

  const handleBack = () => {
    setCurrentslide(currentslide - 1);
  };
  const [formValues, setFormValues] = useState({
    firstName: formvalue,
    lastName: formvalue,
    userName: formvalue,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setValue(event.target.value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex w-full h-[100vh] bg-[#F4F4F4] items-center justify-center">
      <Formstep
        handleBack={handleBack}
        handleNext={handleNext}
        handleChange={handleChange}
        formErrors={formErrors}
      />
    </div>
  );
}
