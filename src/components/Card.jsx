import { useState } from "react";
import { Download, Copy } from "lucide-react";

export default function Card({ meme }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(meme.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadMeme = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = meme.url;
    link.download = `${meme.name}.jpg`;
    link.click();
  };

  return (
    <div
      className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-md p-3 hover:shadow-xl transition transform hover:-translate-y-1 active:scale-95"
      onClick={copyLink}
    >
      <img
        src={meme.url}
        alt={meme.name}
        className="rounded-xl w-full h-48 object-cover"
      />
      <h2 className="mt-3 text-gray-700 dark:text-gray-200 font-semibold text-base text-center truncate">
        {meme.name}
      </h2>

      
      {copied && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md animate-fade">
          ✅ Meme link copied!
        </div>
      )}

     
      <button
        onClick={downloadMeme}
        className="absolute top-2 right-2 bg-white/80 dark:bg-gray-700/70 rounded-full p-1.5 shadow hover:bg-indigo-100 dark:hover:bg-gray-600 transition"
      >
        <Download size={18} className="text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
}
