import { useState } from "react";
import Button from "../../atoms/Button";
import DoubleInput from "../../atoms/DoubleInput";
import Input from "../../atoms/Input";

const Form = ({ className, onCardDetailsChange }) => {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiryDate: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCardDetailsChange(cardDetails);
    console.log(cardDetails);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input
        title="Cardholder Name"
        placeholder="e.g. Jane Appleseed"
        type="text"
        onChange={handleInputChange}
        name="name"
        value={cardDetails.name}
      />
      <Input
        title="Card Number"
        placeholder="e.g. 1234 5678 9123 0000"
        type="number"
        maxLength={16}
        onChange={handleInputChange}
        name="number"
        value={cardDetails.number}
      />
      <div className="flex gap-10">
        <DoubleInput
          title="Exp. Date (MM/YY)"
          placeholder1="MM"
          placeholder2="YY"
          value={cardDetails.expiryDate}
          onChange={(value) =>
            handleInputChange({ target: { name: "expiryDate", value } })
          }
        />
        <Input
          className={"w-full"}
          placeholder="e.g. 123"
          title="CVC"
          type="number"
          maxLength={3}
          name="cvc"
          value={cardDetails.cvc}
          onChange={handleInputChange}
        />
      </div>
      <Button text="Confirm" onClick={handleSubmit} />
    </form>
  );
};

export default Form;
