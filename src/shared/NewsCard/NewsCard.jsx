/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { image_url, title, details, total_view, _id } = news;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}{" "}
              <Link className="text-blue-500 font-bold " to={`news/${_id}`}>
                See More...
              </Link>
            </>
          ) : (
            details
          )}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{total_view} views</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
