import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("adds jokes to the correct list", async () => {
  const user = userEvent.setup();

  render(<App />);

  const getJokeBtn = screen.getAllByRole("button", { name: /get dad joke/i });

  await user.click(getJokeBtn);

  // These buttons are rendered after the first joke is fetched
  let goodJokeBtn = await screen.findByRole("button", { name: "Good Joke 👍" });
  let badJokeBtn = await screen.findByRole("button", { name: "Bad Joke 👎" });

  // First is 👍🏾, second is 👎🏾

  // Add 3 goods and 2 bads
  await fireEvent.click(goodJokeBtn);

  await fireEvent.click(getJokeBtn);

  // Keep awaiting these buttons to come back after we click the get joke button
  goodJokeBtn = await screen.getByRole("button", { name: "Good Joke 👍" });
  await fireEvent.click(goodJokeBtn);

  await fireEvent.click(getJokeBtn);
  goodJokeBtn = await screen.getByRole("button", { name: "Good Joke 👍" });
  await fireEvent.click(goodJokeBtn);

  await fireEvent.click(getJokeBtn);
  badJokeBtn = await screen.getByRole("button", { name: "Bad Joke 👎" });
  await fireEvent.click(badJokeBtn);

  await fireEvent.click(getJokeBtn);
  badJokeBtn = await screen.getByRole("button", { name: "Bad Joke 👎" });
  await fireEvent.click(badJokeBtn);

  const goodJokeItems = within(jokeLists[0]).getAllByRole("listitem");
  const badJokeItems = within(jokeLists[1]).getAllByRole("listitem");

  expect(goodJokeItems).toHaveLength(3);
  expect(badJokeItems).toHaveLength(2);
});
