import React,{ lazy, useMemo} from 'react';
import { useParams } from 'react-router-dom';
import useMergedData from '../getMergedData/useMergedData';

const filteredData = () => {
  const { id } = useParams();
  const { mergedData, loading, isError } = useMergedData();
  
  const filterData = useMemo(()=> mergedData.filter((item) => item.post.id === Number(id)),[mergedData]);
  
  const result = useMemo(()=>({
      filterData,
      loading,
      isError
    }),
    [filterData, loading, isError])
  return result;

};
export default filteredData;
