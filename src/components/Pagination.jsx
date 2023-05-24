import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage /*setItemsPerPage*/] = useState(20);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?apikey=80c0d96a6c1710a704fa06b62e13b53f&offset=${
          currentPage * itemsPerPage
        }&limit=${itemsPerPage}`
      );
      const responseData = response.data.data;
      setItems(responseData.results);
      setTotalItems(responseData.total);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const renderItems = () => {
    return items.map((item) => (
      <div key={item.id}>
        <div className="card">
          <h3>{item.name}</h3>
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
            width="200px"
            height="200px"
          />
          <div className="info">
            <div className="box">
              <p>Comics: <strong>{item.comics.available}</strong></p>
            </div>
            <div className="box">
              <p>Peliculas: <strong>{item.stories.available}</strong></p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div>
        <div className="cards">{renderItems()}</div>
      </div>
      <div>
        <ReactPaginate
          pageCount={Math.ceil(totalItems / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Pagination;
