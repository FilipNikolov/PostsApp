import {useState,useEffect,useCallback,useMemo} from 'react';
import debounce from 'debounce';
import { PAGE_SIZE } from '../../route/constant-routes';
import useMergedData from '../useMergedData/useMergedData';

const pagePagination = () => {
    const { mergedData:initialMergedData, isError, loading} = useMergedData();
    const [mergedData, setMergedData] = useState(initialMergedData);
    const [currentPage, setCurrentPage] = useState(1);
    
    const totalPages = useMemo(()=>{ return Math.ceil(initialMergedData.length / PAGE_SIZE)},[initialMergedData]);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = mergedData.slice(startIndex, endIndex);
    const nextPage = (currentPage + 1);
    const previousPage = (currentPage -1);

      const handlePageChange = (page: number) => {
        setTimeout(()=>{return setCurrentPage(page)},600)
      };

      useEffect(() => {
        if (mergedData.length === 0) setMergedData(initialMergedData)
      }, [initialMergedData,mergedData,currentData]);

      const debouncedHandleChange = debounce((e: { target: { value: string; }; }) => {
        const searchValue = e.target.value.toLowerCase().trim();
        const searchedData = initialMergedData.filter((item) => 
        {return item.user?.name.toLowerCase().includes(searchValue)});
        setMergedData(searchedData);
      }, 700);

      const handleChange = useCallback((e: { target: { value: string; }; }) => {
          debouncedHandleChange(e);
      }, [initialMergedData, debouncedHandleChange]);

    return {
        totalPages,
        currentData,
        handlePageChange,
        handleChange,
        isError,
        loading, 
        currentPage,
        nextPage,
        previousPage
    }

  };
export default pagePagination;