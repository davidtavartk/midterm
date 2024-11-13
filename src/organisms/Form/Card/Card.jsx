// import CardBack from "../../../molecules/CardBack";
import CardFront from "../../../molecules/CardFront";

const Card = ({cardDetails}) => {
    // console.log(cardDetails)
    return (
        <div className="flex flex-col gap-8">
            <div className="w-[90%] mr-auto">
            <CardFront cardDetails={cardDetails}/>

            </div>
            <div className="w-[90%] ml-auto">

            {/* <CardFront /> */}
            </div>
        </div>
    );
};

export default Card;