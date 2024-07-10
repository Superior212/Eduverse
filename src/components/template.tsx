import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Link } from "react-router-dom";

export default function Show() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-8">
        <div className="grid gap-8">
          <Card className="flex flex-col md:flex-row items-start gap-8">
            <img
              src="/placeholder.svg"
              width={500}
              height={300}
              alt="Course"
              className="rounded-lg md:w-[40%] object-cover"
            />
            <div className="flex-1 grid gap-4">
              <div>
                <div className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium">
                  Featured
                </div>
                <h2 className="text-2xl font-bold">
                  Introduction to Web Development
                </h2>
              </div>
              <p className="text-muted-foreground">
                Learn the fundamentals of web development, including HTML, CSS,
                and JavaScript. This course is perfect for beginners.
              </p>
              <div className="flex items-center gap-4">
                <Button>Enroll Now</Button>
                <Link to="#" className="text-primary underline">
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>React Fundamentals</CardTitle>
                <CardDescription>
                  Dive into the world of React and learn how to build dynamic
                  user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width={64}
                    height={64}
                    alt="Course"
                    className="rounded-lg"
                  />
                  <div>
                    <div className="text-2xl font-bold">$99</div>
                    <div className="text-muted-foreground">4 weeks</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Enroll Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Mastery</CardTitle>
                <CardDescription>
                  Take your JavaScript skills to the next level and become a
                  proficient developer.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width={64}
                    height={64}
                    alt="Course"
                    className="rounded-lg"
                  />
                  <div>
                    <div className="text-2xl font-bold">$149</div>
                    <div className="text-muted-foreground">6 weeks</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Enroll Now</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>CSS Mastery</CardTitle>
                <CardDescription>
                  Elevate your CSS skills and create stunning, responsive
                  designs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    width={64}
                    height={64}
                    alt="Course"
                    className="rounded-lg"
                  />
                  <div>
                    <div className="text-2xl font-bold">$79</div>
                    <div className="text-muted-foreground">4 weeks</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Enroll Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Check out our upcoming events and workshops.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                numberOfMonths={1}
                mode="single"
                className="p-0 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-6"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
