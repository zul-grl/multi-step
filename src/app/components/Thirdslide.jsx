import Header from "./Header";
import Button from "./Button";
const Third = ({ handleBack, handleNext }) => {
  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
      </div>
      <div className="flex justify-between gap-2">
        <Button variant="back" handleClick={handleBack} />
        <Button variant="3/3" handleClick={handleNext} />
      </div>
    </div>
  );
};
export default Third;
