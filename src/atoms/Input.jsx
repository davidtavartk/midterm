const Input = ({ title, placeholder, className, type, maxLength, onChange, value }) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <h3 className="text-xs font-medium tracking-[2px] text-[#21092F] uppercase">
        {title}
      </h3>
      <input
        className={`text-lg font-medium border rounded-lg border-[#DFDEE0] px-[16px] py-2 text-[#21092F] placeholder-[#21092F] placeholder-opacity-25 ${className} }`}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
