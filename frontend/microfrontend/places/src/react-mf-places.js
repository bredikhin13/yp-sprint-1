
import singleSpaReact from "single-spa-react";
import PlacesGrid from "./components/PlacesGrid";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: PlacesGrid,
    errorBoundary(err, info, props) {
      return <div>Error in Places Microfrontend</div>;
    },
  });

export const { bootstrap, mount, unmount } = reactLifecycles;