import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold mb-8">All Category</h1>

      <div>
        {categories.map((category) => (
          <Link
            className="block px-3 text-xl mb-4"
            to={`category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
