import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { NavLinks } from "@/lib/data";
import { useTheme } from "./theme-provider";

import MemoLogoLight from "@/icons/LogoLight";
import MemoLogoDark from "@/icons/LogoDark";
import { Badge } from "./ui/badge";
import MemoRocketLight from "@/icons/RocketLight";
import MemoRocketDark from "@/icons/RocketDark";
import MemoArrowDark from "@/icons/ArrowDark";
import MemoArrowLight from "@/icons/ArrowLight";

const Sidebar = () => {
  const { theme } = useTheme();

  return (
    <main>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r  bg-[#8B6EE1] dark:bg-[#000000] md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex items-center py-12 px-4 lg:h-[60px] lg:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                {theme === "light" ? (
                  <MemoLogoLight className="w-32 h-32" />
                ) : (
                  <MemoLogoDark className="w-32 h-32" />
                )}
              </Link>
            </div>

            <div className="w-full px-4 mb-6">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-3 h-4 w-4 text-white dark:text-[#8B6EE1]" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="w-full appearance-none border-white/10 placeholder:text-white placeholder:dark:text-[#8B6EE1] bg-white/20 dark:bg-[#8B6EE133] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-8 shadow-none"
                  />
                </div>
              </form>
            </div>

            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <h3 className="px-4 font-[400] text-white/50 text-sm py-3 ">
                  General
                </h3>
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
            </div>

            <div className="mt-auto p-4">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
