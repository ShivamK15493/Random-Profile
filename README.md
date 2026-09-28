# Random Profile

A **Random Profile Web Application** built using **HTML, CSS, and Vanilla JavaScript**. The application fetches random user information from the **Random User API** and displays a new profile whenever the user clicks the **New Profile** button.

## 🚀 Features

* Fetches random user profiles using an API.
* Displays the user's profile picture.
* Shows name, gender, email, and phone number.
* Displays city, state, postcode, and country.
* Shows the user's nationality code.
* Generates a new random profile with a button click.
* Handles API errors with an error message.
* Simple and responsive user interface.

## 🛠️ Technologies Used

* **HTML5** – Structure of the web page.
* **CSS3** – Styling and layout of the application.
* **JavaScript** – API fetching, DOM manipulation, and application functionality.
* **Random User API** – Provides random user profile data.

## 📋 Profile Information

The application displays the following information for each randomly generated profile:

* Profile Picture
* Name
* Gender
* E-mail
* Phone
* City
* State
* Postcode
* Nationality Code
* Country

## 📂 Project Structure

```text
Random-Profile/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## ⚙️ How It Works

1. When the webpage loads, JavaScript automatically requests a random user from the API.
2. The API returns user information in JSON format.
3. JavaScript extracts the required profile details.
4. The information is dynamically inserted into the profile container.
5. Clicking the **New Profile** button sends another API request.
6. A new random profile is displayed.

## ▶️ How to Run

1. Download or clone this repository.
2. Open the project folder in **Visual Studio Code**.
3. Open `index.html` in your browser.
4. Click the **New Profile** button to generate different profiles.

You can also use the **Live Server** extension in VS Code for a better development experience.

## 🎯 Purpose

The main purpose of this project is to practice:

* Working with REST APIs
* Using the JavaScript `fetch()` method
* Handling JSON data
* Using Promises
* DOM manipulation
* Dynamic HTML generation
* Event handling
* Basic error handling


