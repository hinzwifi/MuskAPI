import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import { AiOutlineTwitter, AiOutlineLink } from "react-icons/ai";
function App() {
  const [Word, setWord] = useState({
    id: 0,
    quote: "Loading...",
  });
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <>
      <div className=" max-w-4xl   mx-auto mt-3     h-auto">
        <div className="text-center text-3xl">MuskApi🚀</div>
        <div data-prefix="$" className="text-lg text-center">
          A hand curated quotes from Elon Musk.
        </div>
        <div className="mb-2 max-w-lg mx-auto mt-3 flex   justify-between">
          <div class="dropdown dropdown-hover">
            <div tabindex="0" class="m-1 btn">
              open on hover
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className="hover:bg-red-300     "
                  data-set-theme="cyberpunk"
                  data-act-class="ACTIVECLASS"
                >
                  🤖 Cyberpunk
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="btn mr-2 ">
              <AiOutlineTwitter size={24} className=" pr-2" />
              Tweet
            </div>
            <div className="btn ">
              <AiOutlineLink size={24} className=" pr-2" />
              Link
            </div>
          </div>
        </div>
        <div class="card max-w-lg mx-3 md:mx-auto rounded-t-lg rounded-b-none    shadow-md lg:card-side bg-accent text-accent-content ">
          <div class="card-body bg-primary">
            <div className=" relative p-4 bg-primary-focus   rounded-lg">
              <p className=" text-md md:text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                provident sapiente rerum maiores temporibus distinctio, ipsum
                perferendis dolore eum qui laboriosam dolor modi aut? Laborum
                atque corrupti error quaerat aspernatur.
              </p>
              <span className=" text-lg absolute bottom-2 right-2">
                - Elon Musk
              </span>
            </div>
            <div class="justify-center card-actions">
              <button class="btn btn-secondary">Get a new quote</button>
            </div>
          </div>
        </div>
        <footer class="p-4 max-w-lg  rounded-b-lg  mx-3 md:mx-auto  bg-base-300 text-base-content footer-center">
          <div>
            <p>Made with 💗 by hinzwifi</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
