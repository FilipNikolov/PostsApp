import { useParams } from 'react-router-dom';
import useMergedData from '../useMergedData/useMergedData';

const filteredData = () => {
  const { id } = useParams();
  const { mergedData } = useMergedData();
  const filterData = mergedData.filter((item) => item.post.id === Number(id));
  return filterData;
};
export default filteredData;
