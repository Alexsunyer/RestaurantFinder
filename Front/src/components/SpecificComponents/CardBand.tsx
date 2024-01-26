interface CardBandProps {
  condition: boolean;
  children: string;
}

const CardBand = ({ condition, children }: CardBandProps) => {
  return (
    <>
      {condition && (
        <p className="absolute top-5 right-0 font-bold text-base rotate-30 origin-top-right text-red-500 font-staatliches">
          {children}
        </p>
      )}
    </>
  );
};

export default CardBand;
