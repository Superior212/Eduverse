import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <div
      className="relative flex items-center w-16 h-8 p-1 bg-white dark:bg-[#000000] rounded-full border border-[#8B6EE1] cursor-pointer transition-colors"
      onClick={toggleTheme}>
      <div
        className={`absolute w-6 h-6 bg-transparent rounded-full shadow-md transform transition-transform ${
          theme === "dark" ? "translate-x-8 " : "translate-x-0"
        }`}></div>
      <Sun className="w-6 h-6 text-[#8B6EE1]" />
      <Moon className="w-6 h-6 text-[#8B6EE1] dark:text-white   ml-auto" />
    </div>
  );
}
