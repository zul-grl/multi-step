import Input from "./Input";
import Header from "./Header";
import Button from "./Button";

const First = () => {
  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[655px] flex flex-col rounded-s-lg justify-between p-8">
      <div>
        <Header />
        <Input text="First name" placeholder="Your first name" />
        <Input text="Last name" placeholder="Your last name" />
        <Input text="Username" placeholder="Your username" />
      </div>
      <Button />
    </div>
  );
};
export default First;
