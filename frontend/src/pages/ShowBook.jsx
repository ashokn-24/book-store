import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <div>
            <span>Id</span>
            <span>{book._id}</span>
          </div>
          <div>
            <span>Title</span>
            <span>{book.title}</span>
          </div>
          <div>
            <span>Author</span>
            <span>{book.author}</span>
          </div>
          <div>
            <span>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
