import { Search } from "lucide-react";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center mt-10">
      <input
        type="text"
        placeholder="🔍 Search your meme..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] 
                   px-6 py-4 text-lg rounded-full 
                   bg-white/70 dark:bg-gray-800/70 
                   border border-violet-400 shadow-md 
                   focus:shadow-xl focus:ring-2 focus:ring-violet-500 
                   focus:outline-none transition-all duration-300 
                   placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-white"
      />
    </div>
  );
}
