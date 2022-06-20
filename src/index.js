import { App } from "./App";

const root = document.getElementById("root");
root.innerHTML = `<h1>Welcome to your own CRA</h1> \n ${App({
  name: "Rohan",
})}`;
