import React from "react";

const DescriptionContent = ({movieDescription}) => {
  return (
    <>
      <p className="description">{movieDescription.large_description}</p>
      <p className="dates">
        {movieDescription.extendedcommon.media.publishyear}{" "}
        {movieDescription.extendedcommon.media.duration}s
        {movieDescription.extendedcommon.media.language.subbed ? (
          <span className="subtitled">Subtitled</span>
        ) : null}
        {movieDescription.extendedcommon.media.language.dubbed ? (
          <span className="dubbed">Dubbed</span>
        ) : null}
      </p>
    </>
  );
};

export default DescriptionContent;
