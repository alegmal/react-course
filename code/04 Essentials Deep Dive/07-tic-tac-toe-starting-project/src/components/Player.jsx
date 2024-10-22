import { useState } from "react";

export function Player({ name, symbol }) {
  const [buttonText, setButtonText] = useState("Edit");
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = () => {
    if (!isEditing) {
        setButtonText("Save");
      setIsEditing(true);
    } else {
      setButtonText("Edit");
      setIsEditing(false);
    }
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required/>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{buttonText}</button>
    </li>
  );
}
