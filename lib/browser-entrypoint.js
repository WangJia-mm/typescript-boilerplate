"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preact = require("preact");
class Greeting extends preact.Component {
    render() {
        return preact.h("p", null, "hey");
    }
}
preact.render(preact.h(Greeting, null), document.body);