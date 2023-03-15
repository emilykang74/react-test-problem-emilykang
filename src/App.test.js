import { render, screen, fireEvent } from '@testing-library/react';
import { Default, Clicked } from "./App.stories";

// import your story from App.stories.js


// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library



it("Button to click me", () => {
    render(<Default />);
    expect(screen.getByText(/click me/i)).not.toBeNull();
  });
  
it("Clicking button to thanks", () => {
    render(<Default />);
    expect(screen.getByText(/click me/i)).not.toBeNull();
    fireEvent.click(screen.getByText(/click me/i));
    expect(screen.getByText(/thanks/i)).not.toBeNull();
  });