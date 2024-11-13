import CardFrontInfo from "../atoms/CardFrontInfo";
import CardPhotoGroup from "../atoms/CardPhotoGroup";

const CardFront = ({ cardDetails }) => {
  return (
    <div className="bg-custom-gradient flex h-[245px] w-[450px] flex-col justify-between rounded-[10px] p-8">
      <CardPhotoGroup />
      <CardFrontInfo
        cardDetails={cardDetails}
      />
    </div>
  );
};

export default CardFront;
