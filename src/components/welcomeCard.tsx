import { Card } from "./ui/card";
import welcomeImg from "../assets/images/welcomeImg.svg";
import MemoPattern2 from "@/icons/Pattern2";
import MemoPattern1 from "@/icons/Pattern1";
import MemoPattern4 from "@/icons/Pattern4";
import MemoPattern3 from "@/icons/Pattern3";

const WelcomeCard = () => {
  return (
    <div>
      <Card className=" bg-custom-gradient rounded-lg z-10  flex flex-col md:flex-row items-start p-3 pb-0 gap-8">
        <div className="flex-1 grid gap-4 p-4 text-[#FFFFFF] relative">
          <MemoPattern4 className=" w-40 h-16  absolute -left-10 -top-3 hidden md:block" />
          <div>
            <h2 className="text-2xl font-[400]">Hi Ola</h2>
            <h1 className="text-[27px] font-[500] mt-3">Welcome To Eduverse</h1>
          </div>
          <p className="text-[13px] font-[400]">
            Where we are creating a global community of lifelong learners
            empowered to achieve their fullest potential.
          </p>
          <MemoPattern2 className=" w-36 h-20 -left-9 absolute -bottom-[4.3rem] hidden md:block" />
          <MemoPattern1 className=" w-48 h-32  absolute  -right-56 top-8 hidden md:block" />
          <MemoPattern3 className=" w-48 h-32  absolute  -right-[23rem] top-[8.8rem] hidden md:block" />
        </div>
        <img
          src={welcomeImg}
          width={500}
          alt="Course"
          className="rounded-lg md:w-[45%] object-cover z-10"
        />
      </Card>
    </div>
  );
};

export default WelcomeCard;
