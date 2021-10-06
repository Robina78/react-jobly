import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Routes from "./Routes";
import { UserProvider } from "../testUtils";

it("render without crashing", () => {
    render(
        <MemoryRouter>
            <UserProvider>
                <Routes />
            </UserProvider>
        </MemoryRouter>
    );
});

it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <UserProvider>
                <Routes />
            </UserProvider>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});