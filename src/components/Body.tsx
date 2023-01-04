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

      <h2>{message}</h2>
    </div>
  );
}

export default Body;
