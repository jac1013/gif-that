import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";

const hotModule: any = module as any;

import {Hello} from "./AwesomeComponent";

function render(App: any) {
  ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById("app"));
}

render(Hello);

if (hotModule.hot) {
  hotModule.hot.accept();
}
