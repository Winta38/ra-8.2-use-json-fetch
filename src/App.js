import React, { useState } from "react";
import "./App.css";
import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";

export default function App() {
  const useData = () => useState(null);
  const useLoading = () => useState(false);
  const useError = () => useState(null);

  const { data } = useData();
  const { loading } = useLoading();
  const { error } = useError();

  return (
    <div className="App">
      {loading ? <Loading /> : error ? <Error /> : <Data data={data} />}
    </div>
  );
}
