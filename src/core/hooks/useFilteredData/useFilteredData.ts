import React,{ useMemo} from 'react';
import { useParams } from 'react-router-dom';
import useMergedData from '../getMergedData/useMergedData';

const filteredData = () => {
  const { id } = useParams();
  const { mergedData, loading, isError } = useMergedData();
  
  const filterData = useMemo(()=> mergedData.filter((item) => item.post.id === Number(id)),[mergedData]);
  
  return {
    filterData,
    isError,
    loading
  };

};
export default filteredData;
