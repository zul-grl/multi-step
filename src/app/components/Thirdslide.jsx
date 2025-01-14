import Header from "./Header";
import Button from "./Button";
import Input from "./Input";
import { Image } from "lucide-react";
import { useState } from "react";

const Third = ({
  handleBack,
  handleNext,
  handleChange,
  formErrors,
  formValues,
}) => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files;
    setFileName(file.name);
  };

  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
        <Input
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

          <div className="bg-[#7F7F800D] w-[100%] h-[180px] rounded-md p-2 flex flex-col items-center justify-center gap-2">
            <div className="bg-white flex items-center justify-center rounded-full w-[45px] h-[45px]">
              <Image />
            </div>
            <span className="text-black">Add Image</span>
          </div>
          <input type="file" onChange={handleFileChange} />
        </div>
        {fileName === "" && (
          <p className="text-red-600 text-sm">Профайл зурагаа оруулна уу</p>
        )}
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="back" handleClick={handleBack} />
        <Button variant="3/3" handleClick={handleNext} />
      </div>
    </div>
  );
};

export default Third;
