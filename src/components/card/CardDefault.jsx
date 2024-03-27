import React from "react";
import { CiStar } from "react-icons/ci";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({ book }) => {
  const { bookName, bookId, author, image, rating, category, tags } = book;
  return (
    <div className="w-full">
      <Link to={`/book-details/${bookId}`}>
        <Card className="mt-6 w-full shadow-none border-2 p-5">
          <CardHeader className="m-0 max-w-[374px] bg-[#F3F3F3] shadow-none h-56">
            <img className="h-56 mx-auto" src={image} alt="card-image" />
          </CardHeader>
          <CardBody className="p-0 mt-8">
            <div className="flex gap-4 mb-4">
              <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">
                {tags?.[0]}
              </h3>
              <h3 className="px-3 py-1 rounded-full bg-[#23be0a0d] text-[#23BE0A]">
                {tags?.[1]}
              </h3>
            </div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 font-[Playfair-Display]"
            >
              {bookName}
            </Typography>
            <Typography>By: {author}</Typography>
          </CardBody>
          <CardFooter className="border-t-2 flex justify-between px-0 pb-0 mt-5 border-dashed">
            <h1 className="font-bold">{category}</h1>
            <h1 className="flex items-center gap-2">
              <span>{rating}</span> <CiStar className="inline text-3xl" />
            </h1>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default CardDefault;
