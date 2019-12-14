import React from "react";

export default function CharacterCard({ name, species, status }) {
  return (
    <div>
      <h3>Name:{name}</h3>
      <p>Species:{species}</p>
      <p>Status:{status}</p>
    </div>
  );
}
