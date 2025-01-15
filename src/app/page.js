"use client";
import { useState } from "react";
import First from "./components/Firstslide";
import Second from "./components/Secoundslide";
import Third from "./components/Thirdslide";
import Last from "./components/Lastslide";

export default function Home() {
  const [currentslide, setCurrentslide] = useState(0);
  const Formstep = [First, Second, Third, Last][currentslide];

  const handleNext = () => {
    setCurrentslide(currentslide + 1);
  };

  const handleBack = () => {
    setCurrentslide(currentslide - 1);
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    fileName: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    fileName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex w-full h-[100vh] bg-[#F4F4F4] items-center justify-center">
      <Formstep
        setFormErrors={setFormErrors}
        handleBack={handleBack}
        handleNext={handleNext}
        handleChange={handleChange}
        formErrors={formErrors}
        formValues={formValues}
      />
    </div>
  );
}
