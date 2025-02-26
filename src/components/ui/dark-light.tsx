import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { setTheme } = useTheme();
  return (
    <>
      <div className="flex">
        <Button onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
        <Button onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      </div>
    </>
  );
}
