# React Developer Technical Assignment - Threshold

## Live and Repo URL
- **Repo** https://github.com/Ahmed-Sadek89/task-14-12-2024

## Project Duration
- **Start** 12/15/2024 at 7.00 PM
- **Start** 12/15/2024 at 11.00 PM
- **Total hours per day** 5 hours

## Overview

This project is a technical assignment for the React Developer position at Threshold. The goal of this project was to demonstrate my skills in front-end development using **React.js**, **TypeScript**, **JSON SERVER** and **Tailwind.css**. The application interacts with the **JSON SERVER API** to fetch and manipulate data, with error handling and a user-friendly interface.

## Objectives

1. **Fetch and Display Data**:
   - Fetched data from the `/products` endpoint of the [JSON SERVER API](http://localhost:3001/products).
   - Displayed the fetched data in a card using **Tailwind css** and **CSS GRID**.

2. **Form for Login and Register**:
   - Created a form with **Tailwind css** for Login and Register.
   - On Register, sent a **POST request** to `/users` to simulate Register and displayed the returned data.
   - On login, sent a **GET request** to `/users` check if user has an account.

3. **Error Handling**:
   - Implemented basic error handling for API requests.
   - Used **React-router-dom** to display error messages to the user when something goes wrong.

4. **TypeScript Usage**:
   - Defined TypeScript **interfaces/types** for the data fetched from the API.
   - Ensured the code is **type-safe** and followed best practices for clean, maintainable code.

5. **Logout option**:
   - Added a **Logout button** in the header of homepage `/`.
   - Clicking the button will **DELETE users cookies** and redirect to `/user/login` to simulate the authentication.

6. **Form validation**:
   - In **Login and Register** pages, user must fill all inputs, with certain schema (ex: password must be min:5 max:20).
   - after validation, user allow to send request to the JSON SERVER backend and wait for responses.

7. **Middleware**:
   - After **Login** response is success, the user will not allowed to visit `/user/login` or `/user/register` untill he/she logged out.
   - User do not allowed to visit homepage `/`, untill he/she is authenticated.

8. **Notifications**:
   - For every response user make, if something wrong or success , it give to him a notification to explain to user what happened!.

## Features
- **responsive design** using Tailwind.css, grid and flexbox css.
- **using Tailwind.css** for input, div, Form and Button components.
- **Type-safe** development with **TypeScript** to ensure reliable and maintainable code.
- **User-friendly** form for login or regiser.
- **Error Handling**: with **React router dom** for a smooth user experience.

## Technologies Used

- **React.js**: Framework for building the application with SPA (singe-page application).
- **react-router-dom**: for routes and navigations.
- **json-server**: for API semulations.
- **TypeScript**: For type-safe development.
- **Tailwind.css**: UI framework for building styles for components like div, forms, buttons, ....
- **Formik and yup**: For Instalizing form components, initial values and validation schemas.
- **react-toastify**: for ui/ux notifications
- **axios**: for API requests and responses
- **unversal-cookie**: for set, get and delete cookies
- **sweetalert2**: for logout alert

## API
- **JSON SERVER API**: Public API used to fetch data for products and simulate  operations for users like (create, read).

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16.x or higher)
- **npm** or **yarn** for managing packages

### Installation and Run in development mode

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-14-12-2024.git
   cd task-14-12-2024
   npm install or yarn install
   npm run server for api semulation
   npm run dev or yarn dev 
   open http://localhost:5173/
