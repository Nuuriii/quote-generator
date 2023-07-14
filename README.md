# Quote Generator

A simple web application that generates random quotes based on a selected category.

## Description

This project is a web application built using React. It fetches quotes from an API and displays them to the user. The user can click a button to get a new random quote from the selected category. The project utilizes TypeScript for type safety.

## Features

-  Fetches random quotes from an API.
-  Displays the quote and its author.
-  Provides a button to get a new random quote.

## Technologies Used

-  React
-  TypeScript
-  Axios

## Setup and Installation

1. Clone the repository.
2. Install the dependencies by running `yarn`.
3. Start the application by running `yarn dev`.
4. Open your browser and navigate to `http://localhost:5173/` to view the application.

## API Configuration

The project uses an API to fetch the quotes. To configure the API, follow these steps:

1. Obtain an API key from [API Ninjas](https://www.api-ninjas.com/).
2. Open the `QuoteGenerator.tsx` file.
3. Set the `API_KEY` constant to your API key.
4. Customize the `CATEGORY` constant to the desired category of quotes.
