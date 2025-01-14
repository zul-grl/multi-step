const Input = ({
  text,
  name,
  type,
  placeholder,
  handleChange,
  formErrors,
  formValues = {},
}) => {
  return (
    <div className="flex flex-col mt-[12px]">
      <p className="text-[#334155] font-bold text-[14px]">
        {text}
        <span className="text-red-600">*</span>
      </p>
      <input
        name={name}
        className={`
          outline-[#0CA5E9] border-[3px] rounded-lg p-2 w-[100%]
          focus:border-[#cbd5e1] ${
            formErrors ? "border-[#E14942]" : "border-[#cbd5e1]"
          }
        `}
        value={formValues[name]}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {formErrors && <p className="text-red-600 text-sm">{formErrors}</p>}
    </div>
  );
};

export default Input;
