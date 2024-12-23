import UserProfile from "./components/UserProfile";
import singleSpaReact from "single-spa-react";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: UserProfile,
    errorBoundary(err, info, props) {
      return <div>Error in UserProfile Microfrontend</div>;
    },
  });

export const { bootstrap, mount, unmount } = reactLifecycles;