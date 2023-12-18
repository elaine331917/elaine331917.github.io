import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-row items-center gap-1">
        <Sun />
        <Switch onCheckedChange={toggleTheme} checked={theme === "dark"} />
        <Moon />
    </div>
  )
}
