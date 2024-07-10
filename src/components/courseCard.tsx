import { Courses } from "@/lib/data";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";

const CourseCard = () => {
  return (
    <div>
      <h2 className="font-[500] text-lg py-4">Your Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Courses.map((course) => (
          <Card key={course.title} className="">
            <div className="p-2">
              <img
                src={course.image}
                alt="Course"
                className="rounded-lg w-full"
              />
            </div>

            <CardContent>
              <p className="font-[500]">{course.title}</p>
              <p className="text-[#888888] text-[10px]">{course.chapter}</p>
            </CardContent>
            <div className="flex flex-col p-2">
              <Progress className="bg-[#8B6EE133]" value={course.progress} />
              <div className="flex items-center justify-between my-1 text-[#888888]">
                <p className="text-[10px]">Progress:</p>
                <p className="text-[10px]">{course.progress} Completed</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
