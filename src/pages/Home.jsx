import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Loader from "../components/Loader";
import NoResults from "../components/NoResults";
import emoji from "../assets/emoji.svg"; // 👈 Emoji asset

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchMemes() {
      try {
        setLoading(true);
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
        if (data.success) {
          setMemes(data.data.memes);
          setFiltered(data.data.memes);
        }
      } catch (error) {
        console.error("Error fetching memes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMemes();
  }, []);

  const handleSearch = (query) => {
    setQuery(query);
    if (!query) {
      setFiltered(memes);
      return;
    }
    const lower = query.toLowerCase();
    const result = memes.filter((meme) => meme.name.toLowerCase().includes(lower));
    setFiltered(result);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    handleSearch(tag);
  };

  const handleRandomMeme = () => {
    if (memes.length > 0) {
      const random = memes[Math.floor(Math.random() * memes.length)];
      setFiltered([random]);
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto p-6 text-center min-h-screen bg-gradient-to-br from-violet-100 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-violet-900 transition-colors duration-500">
      
      {/* ✨ Floating Emoji (bigger + glowing) */}
      <img
        src={emoji}
        alt="Meme Emoji"
        className="hidden sm:block absolute top-4 right-8 w-28 h-28 sm:w-36 sm:h-36 animate-bounce 
                   drop-shadow-[0_0_25px_rgba(147,51,234,0.6)] opacity-95 
                   hover:rotate-6 hover:scale-105 transition-transform duration-300"
      />

      <Header title="Meme Explorer 😎" subtitle="Find and laugh with the best memes!" />
      <SearchBar onSearch={handleSearch} />

      {/* 🔥 Trending Tags */}
      <div className="flex justify-center mt-6 flex-wrap gap-3">
        {["Funny", "Relatable", "Animals", "Celebs", "Movies", "Gaming"].map((tag) => (
          <span
            key={tag}
            onClick={() => handleTagClick(tag)}
            className="cursor-pointer bg-gradient-to-r from-violet-500 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold 
                       hover:scale-110 hover:shadow-lg hover:from-pink-500 hover:to-violet-500 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 🖼️ Meme Grid */}
      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <NoResults message="No memes found matching your search 😕" />
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((meme) => (
            <Card key={meme.id} meme={meme} />
          ))}
        </div>
      )}

      {/* 🎲 Random Meme Button */}
      <button
        onClick={handleRandomMeme}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold px-5 py-3 rounded-full shadow-xl 
                   hover:scale-110 hover:shadow-2xl hover:brightness-110 transition-all duration-300"
      >
        🎲 Random Meme
      </button>
    </div>
  );
}
