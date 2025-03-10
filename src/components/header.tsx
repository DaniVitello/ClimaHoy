import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./citi-search";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b py-2 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            alt="Klimate Logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
          {/* search */}
          <CitySearch />
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex cursor-pointer items-center transition-transform duration-500 ${isDark ? "rotate-180 transform" : "rotate-0 transform"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 rotate-0 text-yellow-500 transition-all" />
            ) : (
              <Moon className="h-6 w-6 rotate-0 text-blue-500 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
