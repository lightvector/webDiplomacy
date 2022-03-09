import * as React from "react";
import "./assets/css/App.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { getGameOverview } from "./state/action-creators";

const App: React.FC = function (): React.ReactElement {
  const gameState = useSelector((state) => state);
  const dispatch = useDispatch();
  const getOverview = bindActionCreators(getGameOverview, dispatch);

  React.useEffect(() => {
    getOverview("2");
  }, []);

  return (
    <Box className="App">
      <div>{JSON.stringify(gameState)}</div>
    </Box>
  );
};

export default App;
