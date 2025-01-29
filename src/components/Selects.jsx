import React from "react";
import {
  borabora,
  borabora2,
  maldives,
  maldives2,
  maldives3,
  keywest,
} from "../assets";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <section className="max-w-[1240px] mx-auto grid sm:grid-col-2 lg:grid-cols-3 py-16 px-4 gap-4">
      <SelectCard bg={borabora} text="Bora Bora" />
      <SelectCard bg={borabora2} text="Maldives" />{" "}
      <SelectCard bg={maldives} text="Cozumel" />{" "}
      <SelectCard bg={maldives2} text="Jamaica" />{" "}
      <SelectCard bg={maldives3} text="Antigua" />{" "}
      <SelectCard bg={keywest} text="Keywest" />
    </section>
  );
};

export default Selects;
