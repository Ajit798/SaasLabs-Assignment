import PropTypes from "prop-types";
import { tableHeader } from "../../constants/constants";
const Table = ({ tableData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{tableHeader.serialNo}</th>
          <th>{tableHeader.percentageFunded}</th>
          <th>{tableHeader.amountPledged}</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data["s.no"]}>
              <td>{data["s.no"]}</td>
              <td>{data["percentage.funded"]}</td>
              <td>{data["amt.pledged"]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
