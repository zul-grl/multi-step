const Last = () => {
  localStorage.setItem("currentslide", 0);
  return (
    <div className="bg-[#FFFFFF] w-[480px] h-[193px] rounded-s-lg justify-between p-8">
      <div className="flex flex-col gap-2">
        <div className="w-[60px] h-[60px]">
          <img src="./logo.png" alt="" />
        </div>
        <h2 className="text-[26px]">You're All Set 🔥</h2>
        <p className="text-[18px] text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};
export default Last;
