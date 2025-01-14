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
    let haveError = false;

    if (currentslide === 0) {
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
    } else if (currentslide === 1) {
      if (!formValues.email.trim()) {
        setFormErrors((prev) => ({ ...prev, email: "Мэйл хаягаа оруулна уу" }));
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
      } else if (formValues.password.trim() < 6) {
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
    } else if (currentslide === 2) {
      if (!formValues.dateOfBirth.trim()) {
        setFormErrors((prev) => ({
          ...prev,
          dateOfBirth: "Төрсөн өдрөө оруулна уу",
        }));
        haveError = true;
      }
      if (formValues.fileName === "") {
        setFormErrors((prev) => ({
          ...prev,
          profileImage: "Профайл зурагаа оруулна уу",
        }));
        haveError = true;
      }
    }

    if (!haveError) {
      setCurrentslide(currentslide + 1);
    }
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
        handleBack={handleBack}
        handleNext={handleNext}
        handleChange={handleChange}
        formErrors={formErrors}
        formValues={formValues}
      />
    </div>
  );
}
