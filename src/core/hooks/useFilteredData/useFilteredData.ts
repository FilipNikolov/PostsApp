import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useMergedData from '../useMergedData/useMergedData';

const filteredData = () => {
  const { id } = useParams();
  const { mergedData, loading, isError } = useMergedData();
  
  const filterData = useMemo(()=> {return mergedData.filter((item) => 
    {return item.post.id === Number(id)})},
    [mergedData]);
  
  return {
    filterData,
    loading,
    isError
  };

};
export default filteredData;
