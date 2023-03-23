import React, { useRef } from "react";

const Items = ({ selected, href, label, onClick, id }) => {
  const ref = useRef(null);

  const handleCenterItem = () => {
    onClick(id);
    ref.current.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        cursor: "pointer",
        transform: selected === id ? "scale(1)" : "scale(0.8)",
      }}
      onClick={handleCenterItem}
    >
      <img ref={ref} className="img" alt="" src={href} />
      <div>{label}</div>
    </div>
  );
};

export default Items;
