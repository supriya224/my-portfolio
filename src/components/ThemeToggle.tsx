import { Moon, Sun } from "react-feather";

interface ThemeToggleProps {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export default function ThemeToggle({ dark, setDark }: ThemeToggleProps) {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        type="button"
        onClick={() => setDark(!dark)}
        className={`relative w-28 h-16 rounded-full border-2 p-1 transition-all duration-500 ${
          dark
            ? "bg-[#09090D] border-[#37356A]"
            : "bg-[#F5F5F5] border-[#D6D6D6]"
        }`}>
        {/* Inner Background */}
        <div
          className={`absolute inset-2 rounded-full transition-colors duration-500 ${
            dark ? "bg-[#1A1A2C]" : "bg-white"
          }`}
        />

        {/* Sliding Circle */}
        <div
          className={`absolute top-2.5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
            dark
              ? "translate-x-[56px] translate-y-[2.5px] bg-[#3B3A63]"
              : "translate-x-[8px] translate-y-[2.5px] bg-[#F3F3F3]"
          }`}
        />

        {/* Left Icon */}
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <Sun size={20} color={dark ? "#5A5A7A" : "#F59E0B"} />
        </div>

        {/* Right Icon */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <Moon size={20} color={dark ? "#6C6BFF" : "#A1A1AA"} />
        </div>
      </button>
    </div>
  );
}
