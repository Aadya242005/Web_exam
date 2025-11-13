export default function NoResults({ message = "No memes found 😢" }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 text-gray-500">
      <span className="text-6xl mb-2">😢</span>
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
