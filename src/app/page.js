"use client";
import { useState, useEffect } from "react";
import First from "./components/Firstslide";
import Second from "./components/Secoundslide";
import Third from "./components/Thirdslide";
import Last from "./components/Lastslide";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [currentslide, setCurrentslide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const Formstep = [First, Second, Third, Last][currentslide];
  const handleNext = () => {
    setCurrentslide(currentslide + 1);
    localStorage.setItem("currentslide", currentslide + 1);
  };

  const handleBack = () => {
    setCurrentslide(currentslide - 1);
    setIsVisible(!isVisible);
    localStorage.setItem("currentslide", currentslide - 1);
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
    const fileName = localStorage.getItem("fileName");
    const currentslide = localStorage.getItem("currentslide");
    setCurrentslide(Number(currentslide));
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
      fileName: fileName,
    });
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="flex w-full h-[100vh] bg-[#F4F4F4] items-center justify-center">
      <div>
        <AnimatePresence initial={false}>
          <Formstep
            setFormErrors={setFormErrors}
            handleBack={handleBack}
            handleNext={handleNext}
            handleChange={handleChange}
            formErrors={formErrors}
            formValues={formValues}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
