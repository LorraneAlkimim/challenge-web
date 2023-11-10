import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from ".";

describe("<Header>", () => {
  it("should render menu hamburger button", () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Header title="" />
      </MemoryRouter>
    );

    const menuButton = getByLabelText("Menu Hamburger");

    expect(menuButton).toBeInTheDocument();
  });

  it("should render header with a correct title", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header title="Title example" />
      </MemoryRouter>
    );

    const header = getByText("Title example");

    expect(header).toBeInTheDocument();
  });
});
