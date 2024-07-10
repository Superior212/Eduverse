import WelcomeCard from "@/components/welcomeCard";
import CourseCard from "@/components/courseCard";
import MonthlyCalender from "@/components/calender";

export default function Community() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-8">
        <div className="grid gap-8">
          <WelcomeCard />
          <CourseCard />
        </div>
        <div className="grid gap-8">
          <MonthlyCalender />
        </div>
      </main>
    </div>
  );
}
