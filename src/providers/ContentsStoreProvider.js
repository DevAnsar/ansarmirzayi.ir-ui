import React, { createContext, useState, useEffect } from "react";
import { myConfig } from "../config.js";

export const ContentsStoreContext = createContext(undefined);
export const SetContentsStoreContext = createContext(undefined);



function ContentsStoreProvider(props) {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    try {
      const res = await fetch(myConfig.API_URL + "/v1/index", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      });
      const { contents } = await res.json();
      setContents(contents);
      return;
    } catch (err) {
      return;
    }
  };

  return (
    <ContentsStoreContext.Provider value={{ contents }}>
        {props.children}
    </ContentsStoreContext.Provider>
  );
}

export default ContentsStoreProvider;
