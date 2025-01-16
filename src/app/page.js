"use client";
import { useState, useEffect } from "react";
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
    imageUrl: "",
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
    imageUrl: "",
  });
  useEffect(() => {
    const email = localStorage.getItem("email");
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const userName = localStorage.getItem("userName");
    const phoneNumber = localStorage.getItem("phoneNumber");
    const password = localStorage.getItem("password");
    const confirmPassword = localStorage.getItem("confirmPassword");
    const dateOfBirth = localStorage.getItem("dateOfBirth");
    const imageUrl = localStorage.getItem("imageUrl");
    setFormValues({
      ...formValues,
      email: email,
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
      imageUrl: imageUrl,
    });
  }, []);
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
