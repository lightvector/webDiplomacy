import * as React from "react";
import getDevice from "../../utils/getDevice";
import useViewport from "../../hooks/useViewport";
import WDUI from "./WDUI";

const WDMapController = React.lazy(() => import("../map/WDMapController"));

const WDMain: React.FC = function (): React.ReactElement {
  const [viewport, setViewport] = useViewport();

  React.useLayoutEffect(() => {
    window.addEventListener("resize", setViewport);
    return () => window.removeEventListener("resize", setViewport);
  }, []);

  const device = getDevice(viewport);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <WDMapController device={device} viewport={viewport} />
      <WDUI device={device} />
    </React.Suspense>
  );
};

export default WDMain;
