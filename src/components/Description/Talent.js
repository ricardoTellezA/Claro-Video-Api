import React from "react";
import DescriptionTalent from "./DescriptionTalent";

const Talent = ({ talent }) => {
  return (
    <>
      {talent.desc === "Actor" && (
        <DescriptionTalent talent={talent.talents} title="Actors" />
      )}
      {talent.desc === "Director" && (
        <DescriptionTalent talent={talent.talents} title="Director" />
      )}
      {talent.desc === "Productor" && (
        <DescriptionTalent talent={talent.talents} title="Productor" />
      )}
      {talent.desc === "Escritor" && (
        <DescriptionTalent talent={talent.talents} title="Escritor" />
      )}
    </>
  );
};

export default Talent;
