import React, { useState, useEffect } from "react";
import "../Popular/popular.css";
import ReactPaginate from "react-paginate";

const Popular = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const resultsPerPage = 20;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${currentPage}&api_key=747fc47fa2622f5ad57e3169c6c55ba4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.results);
        setTotalPages(Math.ceil(result.total_results / resultsPerPage));
      })
      .catch((error) => console.log("error", error));
  }, [currentPage, resultsPerPage]);

  const handlePersonClick = (personId) => {
    window.location.href = `https://www.themoviedb.org/person/$%7BpersonId%7D?language=vi`;
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="page">
      <h1 className="page-title">Popular People</h1>
      <div className="popular-container">
        {data.slice(0, resultsPerPage).map((item) => (
          <div
            key={item.id}
            className="person-container"
            onClick={() => handlePersonClick(item.id)}
          >
            <a
              href={`https://www.themoviedb.org/person/${item.id}?language=vi`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
                className="person-image"
              />
            </a>
            <div className="person-info">
              <h2 className="person-name">{item.name}</h2>
              <p className="person-known-for"></p>
              <ul className="person-movies-list">
                {item.known_for.map((movie) => (
                  <li key={movie.id} className="person-movie">
                    {movie.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => setPage(currentPage - 1)}>Prev</button>
        )}

        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />

        {currentPage < totalPages && (
          <button onClick={() => setPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Popular;
