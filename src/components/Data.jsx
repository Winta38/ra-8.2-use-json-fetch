import React from "react";
import { useFetchJson } from "./hooks/useJsonFetch";

export default function Data() {
  const { data, loading, error } = useFetchJson("http://localhost:7070/data");

  return (
    <React.Fragment>
      {loading ? (
        <div>Загрузка...</div>
      ) : error ? (
        <div>Ошибка: {error}</div>
      ) : data ? (
        <div className="data">Получение данных: {data.status}</div>
      ) : null}
    </React.Fragment>
  );
}
