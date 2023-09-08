/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Application from "components/Application";

/*
  A test that renders a React Component
*/
describe("Appointment", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday")).then(() => {
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  });

  it("does something it is supposed to do", () => {
    // ...
  });

  it("does something else it is supposed to do", () => {
    // ...
  });

  it("doesn't call the function", () => {
    const fn = jest.fn();
    expect(fn).toHaveBeenCalledTimes(0);
  });
  
});
