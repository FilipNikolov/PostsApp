import { useEffect} from 'react';
import { MergedData } from '../getMergedData/types';
import getMergedData from '../getMergedData/getMergedData';

const useMergedData = (): MergedData => {
 const {completePost, mergedData, isError, loading} = getMergedData();

 useEffect(()=>{
  if(!isError || !loading) completePost();
  },[loading, isError]);

return {
  mergedData,
  isError,
  loading
};
};
export default useMergedData;