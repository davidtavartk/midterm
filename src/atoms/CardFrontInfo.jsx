

const CardFrontInfo = ({cardDetails}) => {
    function formatCardNumber(number) {
        return number.replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    return (
        <div className='flex flex-col gap-6 tracking-[4px]'>
            <p className='text-[28px] text-white'>{formatCardNumber(cardDetails.number)}</p>
            <div className='flex justify-between'>
                <span className='uppercase font-medium tracking-[2px] text-sm text-white'>{cardDetails.name}</span>
                <span className='uppercase font-medium tracking-[2px] text-sm text-white'>{cardDetails.expiryDate}</span>
            </div>
            
        </div>
    );
};

export default CardFrontInfo;