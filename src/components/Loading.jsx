import React from "react";
import { useFetchJson } from "./hooks/useJsonFetch";

export default function Loading() {
  const { loading } = useFetchJson("http://localhost:7070/loading");

  return (
    <React.Fragment>
      {loading && <div className="loading">Загрузка...</div>}
    </React.Fragment>
  );
}
