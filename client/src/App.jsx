import { useState, useEffect } from "react";
import axios from "axios";

import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
function App() {
  const [word, setWord] = useState({
    id: 0,
    quote: "Loading...",
  });
  const getQuote = async () => {
    axios
      .get("https://muskapi.herokuapp.com/api/random")
      .then((response) => {
        const data = response.data;
        const message = data.message;
        setWord({
          id: message.id,
          quote: message.quote,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div className=" max-w-lg  mx-auto mt-3      h-auto">
        <div className="  py-5">
          <div className="text-center text-4xl">MuskAPI 🚀</div>
          <div data-prefix="$" className="text-lg text-center">
            A hand curated quotes from Elon Musk.
          </div>
        </div>
        <div className="mb-2 max-w-lg mx-auto mt-3 flex  justify-between">
          <div className="btn mr-2 ">
            <AiOutlineTwitter size={24} className=" pr-2" />
            <a
              href={`http://twitter.com/home?status=${word.quote}`}
              target="_blank"
            >
              Twitter
            </a>
          </div>
          <div className="btn ">
            <AiOutlineLink size={24} className=" pr-2" />
            <a
              href={`https://muskapi.herokuapp.com/api/quote/${word.id}`}
              target="_blank"
            >
              Link
            </a>
          </div>
        </div>
        <div className="card max-w-lg mx-3 sm:mx-auto  rounded-none     lg:card-side bg-accent text-accent-content ">
          <div className="card-body p-3 md:p-8 bg-secondary">
            <div className=" relative  p-8 bg-secondary-focus   ">
              <p className="   text-sm md:text-lg">{word.quote}</p>
              <span className=" text-lg absolute bottom-2 right-2">
                - Elon Musk
              </span>
            </div>
            <div className="justify-center card-actions">
              <button className="btn btn-primary" onClick={getQuote}>
                Get a new quote
              </button>
            </div>
          </div>
        </div>
        <footer className="p-4 max-w-lg    mx-3 md:mx-auto  bg-base-300 text-base-content footer-center">
          <div>
            <p>Made with 💗 by hinzwifi</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
