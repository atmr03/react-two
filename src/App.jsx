import { useState } from "react";

function App() {
  const [like, setLike] = useState(0);
  const handleClick = () => {
    setLike(like + 1);
  };
  return (
    <button
      onClick={handleClick}
      className="p-11 bg-slate-500 flex justify-center items-center h-auto mx-auto text-white font-bold"
    >
      👍{like}
    </button>
  );
}

export default App;
