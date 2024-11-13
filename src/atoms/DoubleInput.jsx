import { useState } from "react";

const DoubleInput = ({ title, placeholder1, placeholder2, className, onChange, value }) => {
  const [month, setMonth] = useState(value ? value.slice(0, 2) : ""); 
  const [year, setYear] = useState(value ? value.slice(3, 5) : ""); 

  const handleMonthChange = (e) => {
    const newMonth = e.target.value.slice(0, 2);
    setMonth(newMonth);
    onChange(`${newMonth}/${year}`);
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value.slice(0, 2);
    setYear(newYear);
    onChange(`${month}/${newYear}`);
  };

  return (
    <div className="flex flex-col gap-[9px]">
      <h3 className="text-xs font-medium tracking-[2px] text-[#21092F] uppercase">{title}</h3>
      <div className="flex gap-4">
        <input
          className={`text-lg w-3/5 font-medium border rounded-lg border-[#DFDEE0] px-[16px] py-2 text-[#21092F] placeholder-[#21092F] placeholder-opacity-25 ${className}`}
          type="text"
          placeholder={placeholder1}
          maxLength="2"
          value={month}
          onChange={handleMonthChange}
        />
        <input
          className={`text-lg w-3/5 font-medium border rounded-lg border-[#DFDEE0] px-[16px] py-2 text-[#21092F] placeholder-[#21092F] placeholder-opacity-25 ${className}`}
          type="text"
          placeholder={placeholder2}
          maxLength="2"
          value={year}
          onChange={handleYearChange}
        />
      </div>
    </div>
  );
};

export default DoubleInput;
