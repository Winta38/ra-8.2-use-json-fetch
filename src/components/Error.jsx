import React from "react";
import { useFetchJson } from "./hooks/useJsonFetch";

export default function Error() {
  const { error } = useFetchJson("http://localhost:7070/error");

  return (
    <React.Fragment>
      {error && <div className="error">{error}</div>}
    </React.Fragment>
  );
}
