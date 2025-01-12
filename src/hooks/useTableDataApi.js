import { BASE_URL } from "../constants/constants";

export const useTableDataApi = () => {
  const getTableData = async () => {
    try {
      const data = await fetch(BASE_URL);
      const response = await data.json();
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  return { getTableData };
};
