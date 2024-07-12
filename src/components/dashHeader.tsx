import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Bell, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ModeToggle } from "./mode-toggle";
import MemoLogoLight from "@/icons/LogoLight";
import MemoLogoDark from "@/icons/LogoDark";
import { useTheme } from "./theme-provider";
import { NavLinks } from "@/lib/data";
import MemoRocketLight from "@/icons/RocketLight";
import MemoRocketDark from "@/icons/RocketDark";
import MemoArrowLight from "@/icons/ArrowLight";
import MemoArrowDark from "@/icons/ArrowDark";

const DashHeader = () => {
  const { theme } = useTheme();
  return (
    <main>
      <header className="flex justify-end h-14 items-center gap-4 border-b  dark:border-b-[#000000] dark:bg-[#000000] px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetContent
            side="left"
            className="flex flex-col bg-[#8B6EE1] dark:bg-[#000000] ">
            <nav className="grid gap-2 text-lg font-medium">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                {theme === "light" ? (
                  <MemoLogoLight className="w-32 h-32" />
                ) : (
                  <MemoLogoDark className="w-32 h-32" />
                )}
              </Link>

              {NavLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-3 font-[400] rounded-lg px-3 py-2 my-3  text-[#FFFFFF] dark:text-[#8B6EE1] bg-[#FFFBF833]   transition-all hover:text-primary"
                      : "flex items-center gap-3 font-[400] rounded-lg  px-3 py-2  text-[#FFFFFF] dark:text-[#8B6EE1]  transition-all hover:text-primary"
                  }>
                  {theme === "light" ? (
                    <link.iconLight className="w-5 h-5" />
                  ) : (
                    <link.iconDark className="w-5 h-5" />
                  )}
                  {link.label}
                  {link.badgeCount && link.badgeCount > 0 && (
                    <Badge className="ml-auto bg-[#FFFFFF33] text-white dark:bg-[#8B6EE133] dark:text-[#8B6EE1] flex h-6 w-6 items-center justify-center rounded-full">
                      {link.badgeCount}
                    </Badge>
                  )}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto">
              <Card
                x-chunk="dashboard-02-chunk-0"
                className="dark:bg-[#8B6EE1]">
                <CardHeader className="flex items-center justify-center">
                  {theme === "light" ? (
                    <MemoRocketLight className="w-36 h-28" />
                  ) : (
                    <MemoRocketDark className="w-36 h-28" />
                  )}
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button
                    size="sm"
                    className="flex items-center font-[500] justify-between w-full bg-[#8B6EE1] hover:bg-[#8B6EE1] text-white dark:bg-[#000000] dark:text-[#8B6EE1]">
                    Upgrade To Pro
                    {theme === "light" ? (
                      <MemoArrowLight className="w-5 h-5" />
                    ) : (
                      <MemoArrowDark className="w-5 h-5" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>

          <div className="flex items-center space-x-3 absolute left-8 sm:static">
            <ModeToggle />
            <div className="">
              <Button
                variant="outline"
                size="icon"
                className="border-[#8B6EE1] rounded-full ml-auto h-8 w-8">
                <Bell className="h-4 w-4 text-[#8B6EE1]" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
          </div>
          <SheetTrigger asChild className="mx-3">
            <Button
              variant="outline"
              size="icon"
              className="shrink-0   md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
      </header>
    </main>
  );
};

export default DashHeader;
