import { useState } from "react";
import { MovieComponentProps, formatNumber } from "../utils";
import {
  Heart,
  HeartFill,
  HandThumbsUp,
  HandThumbsDown,
  Trash,
} from "react-bootstrap-icons";

// Movie Displayer Component, charged to display a movie datas
export function Movie({ movie, handleLike, handleDelete }: MovieComponentProps) {
  const [isLiked, setIsLiked] = useState(false);

  const clickOnLikeButton = () => {
    setIsLiked((isLiked) => !isLiked);
    !isLiked === true ? handleLike(movie.id) : handleLike(movie.id, -1);
  };

  const clickOnDeleteButton = () => {
    handleDelete(movie.id);
  };

  return (
    <div className="col">
      <div className="card movie">
        <div className="card-body">
          <h6 className="card-title overflow-auto">{movie.title}</h6>
          <p className="card-text">{movie.category}</p>

          <div className="w-50 d-flex align-items-center justify-content-between my-3 px-2 py-1 border rounded-pill overflow-hidden-text card-text">
            <div className="">
              <span className="">
                <HandThumbsUp />
              </span>
              <span className="ms-1"> {formatNumber(movie.likes)}</span>
            </div>

            <div><span className="border-end"></span></div>

            <div className="">
              <span className="">
                <HandThumbsDown />
              </span>
              <span className="ms-1">{formatNumber(movie.dislikes)}</span>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <button className="btn p-0 border-0 outline-0">
              <span className="" onClick={clickOnLikeButton}>
                {isLiked ? <HeartFill /> : <Heart />}
              </span>
            </button>
            <button
              className="d-flex align-items-center gap-2 btn btn-outline-danger ms-2"
              onClick={clickOnDeleteButton}
            >
              <Trash /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
