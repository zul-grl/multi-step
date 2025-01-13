const Input = ({ text, placeholder, error }) => {
  return (
    <div className="flex flex-col gap-2 mt-[12px]">
      <p className="text-[#334155] font-bold text-[14px]">
        {text}
        <span className="text-red-600">*</span>
      </p>
      <input
        className={`
        outline-[#0CA5E9] border rounded-lg p-3 w-[100%] ${
          error ? "focus:border-[#0CA5E9]" : "focus:border-[#E14942]"
        }`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
