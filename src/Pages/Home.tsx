import AssignmentsCard from "@/components/AssignmentsCard";
import MonthlyCalender from "@/components/calender";
import CourseCard from "@/components/courseCard";
import MessagesCard from "@/components/MessagesCard";
import ScheduleCard from "@/components/ScheduleCard";
import WelcomeCard from "@/components/welcomeCard";

const Home = () => {
  return (
    <main className="flex p-0 m-0 flex-col min-h-screen overflow-x-hidden dark:bg-[#000000]">
      <section className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-8">
        <div className="grid gap-0">
          <WelcomeCard />
          <CourseCard />

          <div className="flex flex-col gap-6 md:flex-row md:py-10">
            <MessagesCard />
            <AssignmentsCard />
          </div>
        </div>
        <div className="grid gap-1 border-l">
          <MonthlyCalender />
          <ScheduleCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
