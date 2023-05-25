import React from "react";

export default function VsCode(project) {
  let src =
    project ||
    "https://github1s.com/gurbaj5124871/workspace/blob/main/README.md";

  return (
    <iframe
      src={src}
      frameBorder="0"
      title="VsCode"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displayVsCode = (project) => {
  <VsCode project={project}> </VsCode>;
};
