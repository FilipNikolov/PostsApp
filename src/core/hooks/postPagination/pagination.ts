import React,{useState,useEffect,useCallback} from 'react';
import { PAGE_SIZE } from '../../route/constant-routes';
import useMergedData from '../useMergedData/useMergedData';


const pagePagination = () =>{
    const { mergedData:initialMergedData, isError, loading} = useMergedData();
    const [mergedData, setMergedData] = useState(initialMergedData);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(initialMergedData.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = mergedData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };

      useEffect(() => {
        if (mergedData.length === 0) setMergedData(initialMergedData);
      }, [initialMergedData, mergedData]);

      const handleChange = useCallback((e: { target: { value: string; }; }) => {
        const searchValue = e.target.value.toLowerCase();
        const searchedData = initialMergedData.filter((item) => 
        {return item.user?.name.toLowerCase().includes(searchValue)});
        setMergedData(searchedData);
      },[initialMergedData]);

    return {
        mergedData,
        totalPages,
        currentData,
        handlePageChange,
        handleChange,
        isError,
        loading, 
        currentPage
    }

};
export default pagePagination;