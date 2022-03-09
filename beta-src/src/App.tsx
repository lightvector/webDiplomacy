import * as React from "react";
import "./assets/css/App.css";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import gameActionCreators from "./state/action-creators/game";

const App: React.FC = function (): React.ReactElement {
  const gameState = useSelector((state) => state);
  const dispatch = useDispatch();
  const { getGameOverview } = bindActionCreators(gameActionCreators, dispatch);

  React.useEffect(() => {
    getGameOverview("2");
  }, []);

  return (
    <Box className="App">
      <div>{JSON.stringify(gameState)}</div>
    </Box>
  );
};

export default App;
