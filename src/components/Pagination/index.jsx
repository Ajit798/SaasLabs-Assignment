import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { pageCount } from "../../constants/constants";

const Pagination = ({ count, handlePageClick }) => {
  const pageRef = useRef(0);
  const [pagesArray, setPagesArray] = useState([]);

  useEffect(() => {
    const updatedArray = [...pagesArray];
    for (let i = 0; i < count; i++) {
      updatedArray.push(i);
    }
    setPagesArray(updatedArray.slice(0, 5));
  }, [count]);

  const handlePrev = () => {
    pageRef.current -= 1;
    setPagesArray(() => {
      const newArray = [];
      for (
        let i = pageRef.current * pageCount;
        i < pageCount + pageRef.current * pageCount;
        i++
      ) {
        newArray.push(i);
      }
      return newArray;
    });
  };

  const handleNext = () => {
    pageRef.current += 1;
    setPagesArray((prevData) => {
      if (prevData[prevData.length - 1] + 1 === count - 1) {
        return [count - 1];
      }
      const newArray = [];
      for (
        let i = pageRef.current * pageCount;
        i < pageCount + pageRef.current * pageCount;
        i++
      ) {
        newArray.push(i);
      }
      return newArray;
    });
  };

  return (
    <div className="pagination-container">
      <button
        disabled={pagesArray[pagesArray.length - 1] + 1 === pageCount}
        onClick={handlePrev}
      >
        Prev
      </button>
      {pagesArray.map((item, ind) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handlePageClick(item)}
          key={ind}
        >
          {item + 1}
        </div>
      ))}
      <button
        disabled={pagesArray[pagesArray.length - 1] === count - 1}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  handlePageClick: PropTypes.func,
};

export default Pagination;

//[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//
