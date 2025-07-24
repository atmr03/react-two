import { useState } from "react";

function App() {
  const [like, setLike] = useState(0);
  const handleClick = () => {
    setLike(like + 1);
  };
  const [emot, setEmot] = useState("😜");
  const handleEmot = (e) => {
    setEmot(e.target.textContent);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="p-11 bg-slate-500 flex justify-center items-center h-auto mx-auto text-white font-bold"
      >
        👍{like}
      </button>

      <div className="flex flex-col justify-center items-center h-screen text-9xl ">
        <div className="p-10">{emot}</div>
        <div className="flex text-3xl font-bold gap-8">
          <button
            onClick={handleEmot}
            className="p-5 bg-white rounded-lg shadow-xl"
          >
            🤧
          </button>
          <button
            onClick={handleEmot}
            className="p-5 bg-white rounded-lg shadow-xl"
          >
            🤣
          </button>
          <button
            onClick={handleEmot}
            className="p-5 bg-white rounded-lg shadow-xl"
          >
            😜
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
