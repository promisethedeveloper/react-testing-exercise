import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

// Smoke test
it("renders without crashing", () => {
	render(<Card />);
});

// Snapshot test
it("should match snapshots", () => {
	const { asFragment } = render(
		<Card
			caption="Photo by Richard Pasquarella on Unsplash"
			src={image1}
			currNum={1}
			totalNum={3}
		/>
	);
	expect(asFragment()).toMatchSnapshot();
});
