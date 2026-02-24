import { useState } from "react";

function Message() {
  const [status, setStatus] = useState(false);
  //   const [numPizza, setNumPizza] = useState(0);

  //   if (status === true) return <p>im open</p>;

  //   function handleAdditional() {
  //     // update the state is the async

  //     setNumPizza((numPizza) => numPizza + 1);
  //     setNumPizza((numPizza) => numPizza + 1);

  //     // setNumPizza(numPizza + 1);
  //     // setNumPizza(numPizza + 1);
  //   }

  return (
    <>
      {/* {status ? <p>the resturant is open</p> : <p>the resturant is closed</p>} */}

      {status && <p>the resturant is open</p>}
      <button onClick={() => setStatus(!status)}>changeStatus</button>

      {/* <p>countity of pizza {numPizza}</p>
      <button onClick={handleAdditional}>+</button> */}
    </>
  );
}

export default Message;
