import Pagination from "./components/Pagination";
import { FaBell } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import ProgressMovies from "./components/ProgressMovies";

const App = () => {
  return (
    <>
      <div>
        <nav>
          <div className="start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/Marvel_Studios_logo.jpg"
              alt=""
              width="210px"
            />
            <div className="buttons-nav">
              <a href="#">Home</a>
            </div>
            <div className="buttons-nav">
              <a href="#">Personajes</a>
            </div>
          </div>
          <div className="end">
            <FaBell className="bell" />
            <FaCog className="tool" />
          </div>
        </nav>
        <div className="video-image">
          <ProgressMovies />
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/os2C0TdDphc?playlist=os2C0TdDphc&loop=1"
            title="YouTube video player"
            allowfullscreen
          ></iframe>
          <img
            src="https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg"
            alt="marvel-img"
            width="400px"
          />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default App;
