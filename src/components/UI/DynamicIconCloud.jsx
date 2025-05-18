import React, { useState, useEffect } from "react";
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from "react-icon-cloud";

const slugs = [
  "react",
  "tailwindcss",
  "html5",
  "css3",
  "javascript",
  "nodedotjs",
  "git",
  "github",
  "redux",
  "express",
  "mongodb",
  "mysql",
  "python",
];

const useIcons = (slugs) => {
  const [icons, setIcons] = useState(null);

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 80,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      })
    );
  }

  return <a>Loading</a>;
};

const DynamicIconCloud = () => {
  const icons = useIcons(slugs);

  return (
    <Cloud
      options={{
        zoomOnScroll: false,
        wheelZoom: false,
        pinchZoom: false,
        initial: [0.3, 0], // horizontal spin at 30% of maxSpeed
        decel: 0.95, // no slowdown
        maxSpeed: 0.02, // cap absolute speed
        minSpeed: 0.02,
      }}
    >
      {icons}
    </Cloud>
  );
};

export default DynamicIconCloud;
