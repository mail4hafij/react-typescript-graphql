import "./App.css";
import { gqlClient } from "./api";
import { useEffect, useState } from "react";
import { GetPropertiesQuery } from "./generated/sdk.generated";

function App() {
  const [data, setData] = useState<GetPropertiesQuery>();

  useEffect(() => {
    gqlClient.getProperties().then((resp) => {
      setData(resp);
    });
  }, []);

  return (
    <div className="App">
      {data?.properties?.map((d) => {
        return d?.payments?.map((p) => {
          return (
            <div>
              {d.city} - {p?.value}
            </div>
          );
        });
      })}
    </div>
  );
}

export default App;
