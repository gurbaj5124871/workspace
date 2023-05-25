import React from "react";

export default function Spotify() {
  return (
    <iframe
      src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcXBWjiVEM8R?si=3edfb8b8394c476e"
      frameBorder="0"
      title="Spotify"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displaySpotify = () => {
  <Spotify> </Spotify>;
};
