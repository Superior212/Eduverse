import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const AssignmentsCard = () => {
  return (
    <div className="w-1/2">
      <div className="space-y-4">
        <h2 className="text-2xl font-[500]">Assignments</h2>
        <Card className="p-3 dark:bg-[#000000]">
          <div className="grid gap-0">
            <div className="grid gap-2 border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start flex-col gap-2">
                  <h2 className="font-[500]">Biology</h2>
                  <p className="text-sm text-muted-foreground">
                    Due date - 19/01/2024
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="font-[400] text-white bg-[#8B6EE1] hover:bg-[#8B6EE1]">
                    Attempt
                  </Badge>
                </div>
              </div>
            </div>
            <div className="grid gap-2 border-b pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-start flex-col gap-2">
                  <h2 className="font-[500]">Economics</h2>
                  <p className="text-sm text-muted-foreground">
                    Due date - 17/01/2024
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="font-[400] text-white bg-[#8B6EE1] hover:bg-[#8B6EE1]">
                    Attempt
                  </Badge>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-start flex-col gap-2">
                  <h2 className="font-[500]">Agriculture</h2>
                  <p className="text-sm text-muted-foreground">
                    Due date - 15/01/2024
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="font-[400] text-white bg-[#00E429] hover:bg-[#00E429]">
                    Attempted
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AssignmentsCard;
