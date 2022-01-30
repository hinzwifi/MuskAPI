import { useState, useEffect } from "react";
import axios from "axios";

import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
function App() {
  const [word, setWord] = useState({
    id: "Loading...",
    quote: "Loading...",
  });
  const getQuote = async () => {
    axios
      .get("https://muskapi.herokuapp.com/api/random")
      .then((response) => {
        const data = response.data;
        const message = data.message;
        setWord({
          id: message.quoteId,
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
          <div className="text-center text-4xl">MuskAPI🚀</div>
          <div data-prefix="$" className="text-lg text-center">
            REST API for random Elon Musk quotes
          </div>
        </div>
        <div className="mb-2 max-w-lg mx-auto mt-3 flex  justify-between">
          <a
            href={`http://twitter.com/home?status=${word.quote} - https://muskapi.hinzwifi.xyz`}
            target="_blank"
            className="btn mr-2 "
          >
            <AiOutlineTwitter size={24} className=" pr-2" />
            Twitter
          </a>
          <a
            href={`https://muskapi.herokuapp.com/api/quote/${word.id}`}
            target="_blank"
            className="btn "
          >
            <AiOutlineLink size={24} className=" pr-2" />
            Link
          </a>
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
            <p>
              Made with 💗 by{" "}
              <a
                href="https://github.com/hinzwifi/MuskAPI"
                className="link link-neutral-focus"
              >
                hinzwifi
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
