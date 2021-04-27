import { Link } from "react-router-dom";

const Resources = () => {
  const resource_map = [
    {
      path: "/competitions",
      name: "Competitions",
    }
  ];

  return (
    <div className="home">
      <div id="content">
        {lesson_map.map(({ path, name }) => (
          <Link to={path}>
            <li>{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resources;