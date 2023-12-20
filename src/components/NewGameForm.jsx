import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput";

NewFormGame.propTypes = {
  addGame: PropTypes.func,
};

export default function NewFormGame({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setCover("");
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id={"title"}
        value={title}
        setValue={setTitle}
        label={"Título:"}
      />
      <TextInput
        id={"cover"}
        value={cover}
        setValue={setCover}
        label={"Capa: "}
      />
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  );
}
