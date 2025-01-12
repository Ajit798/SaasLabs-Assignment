import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { useTableDataApi } from "./hooks/useTableDataApi";
import Pagination from "./components/Pagination";

function App() {
  const { getTableData } = useTableDataApi();
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTableData();
        setTableData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlePageClick = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  return (
    <div className="main-container">
      <Table tableData={tableData.slice(pageNumber * 5, 5 + pageNumber * 5)} />
      <Pagination
        count={Math.ceil(tableData.length / 5)}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

export default App;

//pageNumber*recordPerPage
//recordsPerPage + pageNumber*recordsPerPage
