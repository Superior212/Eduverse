import MemoMore from "@/icons/More";

const ScheduleCard = () => {
  return (
    <div>
      <div className="px-3">
        <h2 className="text-2xl font-[500] mb-4">Today’s Schedule</h2>
        <div className="grid gap-1">
          <div className=" px-2  py-2 flex items-center">
            <p className="bg-[#FF00001A] text-[#FF0000] rounded-full w-10 h-10 flex items-center justify-center font-[500] mr-4">
              M
            </p>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium">Mathematics</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-[11px]">
                  Pythagoras Theorem | 8:00 - 10:00 AM
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="px-2  py-2 flex items-center">
            <p className="bg-[#ED893E1A] text-[#ED893E] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
              C
            </p>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-medium">Chemistry</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  Atoms | 10:00 - 12:00 AM{" "}
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="px-2  py-2 flex items-center">
            <p className="bg-[#8B6EE11A] text-[#8B6EE1] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
              E
            </p>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-medium">Economics</h2>
              </div>
              <div>
                <p className="text-[#888888] text-[11px]">
                  Pythagoras Theorem | 12:00 - 1:00 PM
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="px-2  py-2 flex items-center">
            <div className="bg-[#FA00FF1A] text-[#FA00FF] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
              B
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-medium">Biology</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  Skeletal system | 1:00 - 2:00 PM
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="px-2  py-2 flex items-center">
            <p className="bg-[#1400FF1A] text-[#1400FF] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
              P
            </p>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium">Physics</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  Speed | 2:00 - 3:00 PM
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="px-2 py-2 flex items-center">
            <p className="bg-[#BAECC3] text-[#00E429] rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
              A
            </p>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-medium">Agriculture</h2>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  Mixed Cropping | 3:00 - 4:00 PM
                </p>
              </div>
            </div>
            <MemoMore className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
