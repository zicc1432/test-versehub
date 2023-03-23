import { React, useState } from "react";
import "./index.css";
import Items from "./Items";

const data = [
  {
    id: 1,
    label: "Information 1",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 2,
    label: "Information 2",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 3,
    label: "Information 3",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 4,
    label: "Information 4",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
  {
    id: 5,
    label: "Information 5",
    url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
  },
];

const HorizontalSlideShow = () => {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <div className="image-list">
        <div>
          <div className="slide">
            {data.map((item) => {
              return (
                <Items
                  selected={selected}
                  onClick={setSelected}
                  id={item.id}
                  href={item.url}
                  label={item.label}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlideShow;
