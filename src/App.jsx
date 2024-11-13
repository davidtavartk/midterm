import { useState } from "react";
import Card from "./organisms/Form/Card/Card";
import Form from "./organisms/Form/Form";

function App() {
  const [cardDetails, setCardDetails] = useState({
    number: "0000000000000000",
    name: "Jane Appleseed",
    expiryDate: "00/00",
    cvc: "123"
  });
  console.log(cardDetails)

  const handleCardDetailsChange = (newCardDetails) => {
    setCardDetails(newCardDetails);
  };

  return (
    <div className="flex h-screen items-center justify-center gap-40">
      <Card cardDetails={cardDetails} />
      <Form
        className={"flex max-w-[400px] flex-col gap-6"}
        onCardDetailsChange={handleCardDetailsChange}
      />
    </div>
  );
}

export default App;
