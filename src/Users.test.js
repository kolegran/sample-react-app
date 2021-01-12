import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Users from "./Users";

// prepare DOM-component
let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

// clean
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<Users flag={false}/>, container);
    });
    expect(container.textContent).toBe("Cannot find list of users");

    act(() => {
        render(<Users flag={true} />, container);
    });
    expect(container.textContent).toBe("Users");
});