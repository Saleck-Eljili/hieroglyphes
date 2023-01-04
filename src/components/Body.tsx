import { useState } from "react";

function Body() {
  const [message, setMessage] = useState("");

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };
  return (
    <div className="body">
      <h3>
        <>
          {"Entrez votre nom"
            .split("")
            .map((x) =>
              x.match(/[a-zA-Z]/) ? (
                <img
                  src={require(`../img/${x.toLowerCase()}.png`)}
                  width={14}
                  height={14}
                  alt={`${x}`}
                />
              ) : (
                " "
              )
            )}
        </>
      </h3>
      <h3>Entrez votre nom</h3>
      <h3>
        <>
          {"Entrez votre nom"
            .split("")
            .map((x) =>
              x.match(/[a-zA-Z]/) ? (
                <img
                  src={require(`../img/${x.toLowerCase()}.png`)}
                  width={14}
                  height={14}
                  alt={`${x}`}
                />
              ) : (
                " "
              )
            )}
        </>
      </h3>
      <input
        type="text"
        name="message"
        onChange={handleChange}
        value={message}
      />
      <div>
        <>
          {message
            .split("")
            .map((x) =>
              x.match(/[a-zA-Z]/) ? (
                <img
                  src={require(`../img/${x.toLowerCase()}.png`)}
                  width={80}
                  height={80}
                  alt={`${x}`}
                />
              ) : (
                ""
              )
            )}
        </>
      </div>
    </div>
  );
}

export default Body;
