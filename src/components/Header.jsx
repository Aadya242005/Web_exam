export default function Header({ title = "Meme Explorer", subtitle }) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
      <div className="text-center sm:text-left">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
          {title}
        </h1>
        {subtitle && <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">{subtitle}</p>}
      </div>

      {/* small decorative / placeholder to keep header balanced on wide screens */}
      <div className="hidden sm:block" aria-hidden>
        {/* empty block intentionally left for alignment with other header controls */}
      </div>
    </header>
  );
}
