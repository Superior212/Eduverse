import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MonthlyCalender = () => {
  return (
    <main>
      <Card className="dark:bg-[#000000] dark:border-none">
        <CardHeader>
          <CardTitle className="font-[500]">Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            numberOfMonths={1}
            mode="single"
            className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
          />
        </CardContent>
      </Card>
    </main>
  );
};

export default MonthlyCalender;
