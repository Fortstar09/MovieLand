import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(true);

  // useEffect(() => {
  //   const data = window.localStorage.getItem("modalstate");
  //   console.log("data", data);
  //   if (data !== null) setModal(JSON.parse(data));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("modalstate", modal);
  // }, [modal]);gi

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="modal-head">
              <h2>Note</h2>
              <img
                src="icon.svg"
                alt="icon"
                onClick={() => {
                  setModal(false);
                  console.log(modal);
                }}
                className="close-button"
              />
            </div>

            <hr />
            <p className="modal-text">
              Right now, the website is configured for movie searches. However,
              the search results mostly return older videos because of the API
              that was used. This is a limitation because the API is not
              comprehensive or current with the most recent film releases.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
