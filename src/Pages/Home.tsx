import MonthlyCalender from "@/components/calender";
import CourseCard from "@/components/courseCard";
import WelcomeCard from "@/components/welcomeCard";

const Home = () => {
  return (
    <main className="flex p-0 m-0 flex-col min-h-screen dark:bg-[#000000]">
      <section className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-8">
        <div className="grid gap-8">
          <WelcomeCard />
          <CourseCard />
        </div>
        <div className="grid gap-8 border-l">
          <MonthlyCalender />
        </div>
      </section>
    </main>
  );
};

export default Home;
