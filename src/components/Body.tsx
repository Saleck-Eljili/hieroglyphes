import { useState } from "react";

function Body() {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };
  return (
    <div className="body">
      <input
        type="text"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <>
        Message:{" "}
        {message
          .split("")
          .map((x) =>
            x.match(/[a-zA-Z]/) ? (
              <img
                src={require(`../img/${x.toLowerCase()}.png`)}
                width={100}
                height={100}
                alt={`${x}`}
              />
            ) : (
              ""
            )
          )}
      </>
    </div>
  );
}

export default Body;
