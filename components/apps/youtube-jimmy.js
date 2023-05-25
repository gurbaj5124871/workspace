import React from "react";

export default function YoutubeJimmy() {
  return (
    <iframe
      src="https://www.youtube.com/embed/Onj5I0RC7iM"
      frameBorder="0"
      title="YoutubeJimmy"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displayYoutubeJimmy = () => {
  <YoutubeJimmy> </YoutubeJimmy>;
};
