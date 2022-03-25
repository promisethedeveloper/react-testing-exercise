import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the arrows", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// expect the first image to show, but not the second
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).not.toBeInTheDocument();

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);

	// expect the second image to show, but not the first
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).not.toBeInTheDocument();
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).toBeInTheDocument();

	// move backwards in the carousal
	const leftArrow = queryByTestId("left-arrow");
	fireEvent.click(leftArrow);

	// expect the first image to show, but not second
	expect(
		queryByAltText("Photo by Pratik Patel on Unsplash")
	).not.toBeInTheDocument();
	expect(
		queryByAltText("Photo by Richard Pasquarella on Unsplash")
	).toBeInTheDocument();
});

it("expects left arrow not to be in document when on first image", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	const leftArrow = queryByTestId("left-arrow");
	expect(leftArrow).not.toBeInTheDocument();
});

it("expects right arrow not to be in document (on the last image) after two clicks", function () {
	const { queryByTestId, queryByAltText } = render(<Carousel />);

	// move forward in the carousel
	const rightArrow = queryByTestId("right-arrow");
	fireEvent.click(rightArrow);
	fireEvent.click(rightArrow);

	expect(rightArrow).not.toBeInTheDocument();
});

// Smoke test
it("renders without crashing", () => {
	render(<Carousel />);
});

// Snapshot test
it("should match snapshots", () => {
	const { asFragment } = render(<Carousel />);
	expect(asFragment()).toMatchSnapshot();
});
