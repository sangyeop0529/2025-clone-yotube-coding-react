import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

const SearchHeader = () => {
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header>
      <Link to="/">
        <FaYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button>
          <IoSearchOutline />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
