import singleSpaReact from "single-spa-react";
import AuthMain from "./components/AuthMain";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: AuthMain,
    errorBoundary(err, info, props) {
      return <div>Error in Auth Microfrontend</div>;
    },
  });

export const { bootstrap, mount, unmount } = reactLifecycles;