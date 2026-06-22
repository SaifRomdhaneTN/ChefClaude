# 👨‍🍳 ChefClaude — AI Recipe Generator

<p align="center">
  <strong>A React app that turns your available ingredients into an AI-generated recipe.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Fast-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/HuggingFace-AI-yellow?style=for-the-badge&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/Mixtral-Recipe_AI-purple?style=for-the-badge" />
</p>

---

## 🚀 About the Project

**ChefClaude** is a small but fun React project that uses AI to generate recipe ideas based on ingredients entered by the user.

The user adds the ingredients they already have, then the app sends them to a HuggingFace-hosted model and receives a recipe suggestion formatted in Markdown.

The goal of the project was to practice **React state**, user input handling, conditional rendering, API integration, and rendering AI-generated Markdown content.

---

## ✨ Main Features

### 🧺 Ingredient List Builder

Users can add ingredients one by one.

The app keeps track of the current ingredient list using React state.

Example:

```text
tomatoes
eggs
cheese
pasta
```

---

### 🤖 AI Recipe Generation

Once the user adds enough ingredients, the app can request a recipe from an AI model.

The app uses:

```text
mistralai/Mixtral-8x7B-Instruct-v0.1
```

through the HuggingFace Inference API.

---

### 📝 Markdown Recipe Display

The AI response is rendered using Markdown, making the recipe easier to read.

This allows the output to include:

* Recipe title
* Ingredients
* Cooking steps
* Notes
* Formatting

---

### 🧼 Clear Ingredients

Users can clear the current ingredient list and start again.

---

### 🎯 Smooth User Experience

When a recipe is generated, the app scrolls smoothly to the recipe section.

---

## 🧱 Tech Stack

| Technology                    | Role                              |
| ----------------------------- | --------------------------------- |
| **React 19**                  | UI development                    |
| **Vite**                      | Development server and build tool |
| **JavaScript**                | Main language                     |
| **HuggingFace Inference API** | AI recipe generation              |
| **React Markdown**            | Markdown rendering                |
| **Remark GFM**                | GitHub-flavored Markdown support  |
| **CSS**                       | Styling                           |

---

## 🧩 How It Works

```text
User adds ingredients
        ↓
Ingredients are stored in React state
        ↓
User clicks “Get a recipe”
        ↓
App sends ingredients to HuggingFace
        ↓
AI generates a recipe
        ↓
Recipe is rendered as Markdown
```

---

## 📁 Project Structure

```text
ChefClaude/
├── public/
├── src/
│   ├── Components/
│   │   ├── ClaudeRecipe.jsx
│   │   ├── Header.jsx
│   │   ├── IngredientList.jsx
│   │   └── MainSection.jsx
│   ├── assets/
│   │   └── chef-claude-icon.png
│   ├── ai.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/SaifRomdhaneTN/ChefClaude.git
cd ChefClaude
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root folder:

```env
VITE_API_TOKEN="YOUR_HUGGINGFACE_TOKEN"
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

---

## 🔐 Environment Variables

This project requires a HuggingFace API token.

```env
VITE_API_TOKEN="YOUR_HUGGINGFACE_TOKEN"
```

⚠️ Since this is a frontend-only learning project, avoid deploying it publicly with a private API token directly exposed in the browser.

For production, the API call should be moved to a backend or serverless function.

---

## 🖼️ Preview

Add screenshots here:

```text
public/screenshots/home.png
public/screenshots/ingredients.png
public/screenshots/generated-recipe.png
```

Example:

```md
![ChefClaude Home](public/screenshots/home.png)
![Generated Recipe](public/screenshots/generated-recipe.png)
```

---

## 🧠 What I Learned

This project helped me practice:

* React state management
* Form handling
* Conditional rendering
* API calls from React
* Environment variables in Vite
* Rendering Markdown in React
* Building interactive AI-powered UI flows

---

## 👨‍💻 Author

**Saif Eddine Romdhane**
Software Engineering Student
Tunisia

```text
Built while learning React state and AI API integration through a Scrimba React course.
```
