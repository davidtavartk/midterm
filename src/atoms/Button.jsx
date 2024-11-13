const Button = ({ text, onClick }) => {
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-lg bg-[#21092F] px-[16px] py-3">
      <button className="font-medium text-white" onClick={onClick} type="submit">
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
