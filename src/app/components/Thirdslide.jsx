import Header from "./Header";
import Button from "./Button";
import Input from "./Input";
import { Image } from "lucide-react";

const Third = ({
  handleBack,
  handleNext,
  handleChange,
  formErrors,
  formValues,
  setFormErrors,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleChange({ target: { name: "fileName", value: file.name } });
      setFormErrors((prev) => ({ ...prev, fileName: "" }));
    } else {
      handleChange({ target: { name: "fileName", value: "" } });
    }
  };

  const handleClick = () => {
    let haveError = false;

    if (!formValues.dateOfBirth.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        dateOfBirth: "Төрсөн өдрөө оруулна уу",
      }));
      haveError = true;
    } else {
      const birthYear = new Date(formValues.dateOfBirth).getFullYear();
      if (birthYear > 2006) {
        setFormErrors((prev) => ({
          ...prev,
          dateOfBirth: "Та 18 ба түүнээс дээш настай байх ёстой.",
        }));
        haveError = true;
      }
    }
    if (!formValues.fileName) {
      setFormErrors((prev) => ({
        ...prev,
        fileName: "Профайл зурагаа оруулна уу",
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
        <Input
          name="dateOfBirth"
          type="date"
          text="Date of birth"
          placeholder="Select your date of birth"
          handleChange={handleChange}
          formErrors={formErrors.dateOfBirth}
          formValues={formValues}
        />
        <div className="flex flex-col mt-[12px]">
          <p className="text-[#334155] font-bold text-[14px]">
            Profile image
            <span className="text-red-600">*</span>
          </p>
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="bg-[#7F7F800D] w-[100%] h-[180px] rounded-md p-2 flex flex-col items-center justify-center gap-2">
              <div className="bg-white flex items-center justify-center rounded-full w-[45px] h-[45px]">
                <Image />
              </div>
              <span className="text-black">Add Image</span>
            </div>
          </label>
          <input
            type="file"
            name="fileName"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
        </div>
        {formErrors.fileName && (
          <p className="text-red-600 text-sm">{formErrors.fileName}</p>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="back" handleClick={handleBack} />
        <Button variant="3/3" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Third;
