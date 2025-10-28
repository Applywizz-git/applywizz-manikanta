import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <Button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={toggle}
      variant="ghost"
      className={`p-2 rounded-full hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] focus-visible:ring-2 focus-visible:ring-yellow-500 ${className}`}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-yellow-600" />
        )}
      </motion.span>
    </Button>
  );
}
