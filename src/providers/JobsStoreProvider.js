import React, { createContext, useEffect, useState } from "react";
import { myConfig } from "../config.js";

export const JobsStoreContext = createContext(undefined);
export const SetJobsStoreContext = createContext(undefined);

function JobsStoreProvider(props) {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(()=>{
    getData(currentPage)
  },[currentPage]);

  const getData = async (page) => {
    try {
      const res = await fetch(`${myConfig.API_URL}/v1/jobs?page=${page}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const data = await res.json();
      // console.log("jobs data fetch (data):", data);
      const { jobs } = data;
      const J = jobs.data;
      setJobs((prev) => {
        if (page > 1) {
          return [...prev, ...J];
        } else {
          return [...J];
        }
      });
      // console.log('jobs.last_page',jobs.last_page)
      setLastPage(jobs.last_page);
      return;
    } catch (err) {
      return;
    }
  };

  return (
        <JobsStoreContext.Provider value={{ jobs , currentPage , lastPage  }}>
          <SetJobsStoreContext.Provider value={{ setCurrentPage }}>
            {props.children}
          </SetJobsStoreContext.Provider>
        </JobsStoreContext.Provider>
  );
}

export default JobsStoreProvider;
