import MemoMartin from "@/icons/Martin";
import { Card } from "./ui/card";
import MemoOdeniran from "@/icons/Odeniran";
import MemoEniola from "@/icons/Eniola";

const MessagesCard = () => {
  return (
    <div className="w-full md:w-1/2">
      <div className="space-y-4">
        <h2 className="text-2xl font-[500]">Your Messages</h2>
        <Card className="p-3 dark:bg-[#000000]">
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b pb-4">
              <MemoMartin className="w-8 h-8" />
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="font-[500] text-base">Martin Oyedepo</h2>
                  <p className="text-xs text-[#888888] truncate">
                    Please make sure you finish the assig...
                  </p>
                </div>
                <p className="text-xs text-[#888888] whitespace-nowrap ml-4">
                  10:21 AM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b pb-4">
              <MemoOdeniran className="w-8 h-8" />
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="font-[500] text-base">Odeniran Sulaimon</h2>
                  <p className="text-xs text-[#888888] truncate">Hello 👋</p>
                </div>
                <p className="text-xs text-[#888888] whitespace-nowrap ml-4">
                  10:21 AM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MemoEniola className="w-8 h-8" />
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="font-[500] text-base">Eniola Ajao</h2>
                  <p className="text-xs text-[#888888] truncate">
                    What do you think about the assign...
                  </p>
                </div>
                <p className="text-xs text-[#888888] whitespace-nowrap ml-4">
                  9:21 AM
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MessagesCard;
