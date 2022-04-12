import { useContext } from "react";
import {
  JobsStoreContext,
  SetJobsStoreContext
} from "../providers/JobsStoreProvider";

function useJobs() {
  const { jobs , currentPage , lastPage } = useContext(JobsStoreContext);
  const { setCurrentPage } = useContext(SetJobsStoreContext);
  // console.log('currentPage:',currentPage);
  // console.log('lastPage:',lastPage)
  const setNextJobs = () => {
    console.log("getNextJobs", currentPage);
    setCurrentPage((prev) => {
      if (prev + 1 <= lastPage) {
        return prev + 1;
      } else {
        return prev;
      }
    });
  };
  return [jobs, currentPage, lastPage, setNextJobs];
}

export { useJobs };
