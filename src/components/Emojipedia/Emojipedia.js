import React from "react";
import "./Emojipedia.css";
import EmojiCard from "./EmojiCard";
import emojis from "./data";

const Emojipedia = () => {
  function createEmojiCard(emoji) {
    return (
      <EmojiCard
        key={emoji.id}
        id={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
      />
    );
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojis.map(createEmojiCard)}</dl>
    </div>
  );
};

export default Emojipedia;
