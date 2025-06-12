
import { useState, useEffect } from "react";
import { User, Settings, LogOut, Sun, Moon, LogIn } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const ProfileDropdown = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for premium look
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);

    // Check current theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    
    // Apply theme to document
    applyTheme(isDarkMode);
  }, []);

  const applyTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('userLocation');
    localStorage.removeItem('userPlan');
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
    window.location.href = '/';
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    applyTheme(newTheme);
    toast.success(`Switched to ${newTheme ? 'dark' : 'light'} mode!`);
  };

  if (!isLoggedIn) {
    // Show only login option when not logged in
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 border border-cyan-500/30 bg-gray-800/30 backdrop-blur-sm" 
        asChild
      >
        <Link to="/login">
          <LogIn className="w-4 h-4" />
          <span>Login</span>
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 border border-cyan-500/30 bg-gray-800/30 backdrop-blur-sm"
        >
          <User className="w-4 h-4" />
          <span>Profile</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 bg-gray-900/95 backdrop-blur-sm border border-cyan-500/30 shadow-xl shadow-cyan-500/10" 
        align="end"
      >
        <DropdownMenuLabel className="text-gray-200">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">
            <User className="w-4 h-4" />
            <span>Personal Details</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={toggleTheme} 
          className="flex items-center space-x-2 cursor-pointer text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-700" />
        <DropdownMenuItem 
          onClick={handleLogout} 
          className="flex items-center space-x-2 cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
