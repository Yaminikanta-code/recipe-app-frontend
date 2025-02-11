# Recipe App

A feature-rich recipe application built using React.js with authentication, allowing users to add, edit, and delete recipes. The app includes filtering, rating, and comment functionalities, with a user-friendly interface.

## Features

### Authentication

- User authentication using JWT.
- Persisted login sessions with `redux-persist`.

### Home Page

- Displays all recipes in **card format** with **pagination**.
- **Filters:** Recipes can be filtered based on:
  - **Preparation time**
  - **Ingredients**
- Clicking a recipe card navigates to the **recipe detail page**.

### Recipe Detail Page

- Shows **recipe details**.
- **Ratings:** Users can add one rating per recipe and edit it afterward.
- **Comments Section:**
  - Users can **add, edit, and delete** their own comments.
  - Comments are displayed with infinite scrolling.

### Profile Page

- Displays all user-posted recipes in a **table format** with **pagination**.
- Users can **edit** or **delete** their recipes.
- A **floating button** at the bottom right corner allows users to add new recipes.

## Tech Stack

- **Frontend:** React.js
- **State Management:** Redux, Redux-Persist
- **Form Management:** React-Hook-Form
- **Routing:** React-Router-Dom
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Yaminikanta-code/recipe-app-frontend.git
   cd recipe-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
