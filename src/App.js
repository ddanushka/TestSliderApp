import React, { useState, useEffect } from "react";
import ReactPageScroller from "react-page-scroller";
import FirstSlider from "./views/firstSlider";
import SecondSlider from "./views/secondSlider";
import "./styles/index.scss";

function App() {
  const handlePageChange = (a) => {
    setPage(a);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };

  const [page, setPage] = useState(0);
  const [pageData, setPageData] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/data", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);
      })
      .catch((error) => {
        console.error(error);
        setPageData(0);
      });
  }, []);

  return (
    <main className={page === 1 ? "fadeIn-fadeOut" : ""}>
      { pageData && (
        <>
          <header className="main-header">
            <div className="logo">Logo</div>
            <nav className="slider-nav">
              <ul className="slider-nav__icon">
                <li
                  className={page === 0 ? "active" : "dark-bk"}
                  onClick={() => {
                    setPage(0);
                  }}
                ></li>
                <li
                  className={page === 1 ? "active" : null}
                  onClick={() => {
                    setPage(1);
                  }}
                ></li>
              </ul>
            </nav>
            {page === 0 && (
              <div
                className="nav-arrow bottom"
                onClick={() => {
                  setPage(1);
                }}
              ></div>
            )}
            {page === 1 && (
              <div
                className="discover-more"
                onClick={() => {
                  setPage(1);
                }}
              >
                {pageData.sliderPage.link}
              </div>
            )}
          </header>
          <ReactPageScroller
            pageOnChange={handleBeforePageChange}
            onBeforePageScroll={handlePageChange}
            customPageNumber={page}
          >
            <FirstSlider pageData={pageData} />
            <SecondSlider pageData={pageData} />
          </ReactPageScroller>
        </>
      )}
      {
        (console.error("JSON error occured, Please check you json server."),
        pageData === 0 ? (
          <h1>JSON error occured, Please check you json server.</h1>
        ) : (
          ""
        ))
      }
    </main>
  );
}

export default App;
