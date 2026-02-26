# Interactive Profile Card System

A reusable React-based Profile Card application demonstrating core React concepts like components, props, state management, conditional rendering, and list rendering.

---

## 🚀 Project Overview

The Interactive Profile Card System is a beginner-friendly React project designed to demonstrate fundamental React concepts in a clean and practical way.

This project displays multiple profile cards where users can toggle between Follow and Unfollow states dynamically.

---

## 🎯 Objective

- Build reusable React components
- Pass data using props
- Manage component state using useState
- Implement conditional rendering
- Render lists using map()
- Apply clean and responsive CSS styling

---

## 🧠 Concepts Covered

### 1️⃣ Components
Reusable `ProfileCard` component created for displaying user profiles.

### 2️⃣ Props
Data such as:
- `name`
- `role`
- `description`

is passed from parent (`App.js`) to child component (`ProfileCard.js`).

### 3️⃣ useState Hook
Used to manage follow/unfollow toggle state inside each profile card.

```js
const [isFollowing, setIsFollowing] = useState(false);
```

### 4️⃣ Conditional Rendering
Button text and styling changes dynamically:

- "Follow" → when not following
- "Unfollow" → when following

### 5️⃣ List Rendering
Multiple profile cards rendered using:

```js
profiles.map()
```

### 6️⃣ Keys in Lists
Each profile card uses a unique `key` prop for efficient rendering.

---

## 🛠 Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Create React App

---

## 📂 Project Structure

```
interactive-profile-card/
│
├── src/
│   ├── components/
│   │   ├── ProfileCard.js
│   │   └── ProfileCard.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-link>
```

### 2️⃣ Navigate to project folder

```
cd interactive-profile-card
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Run the application

```
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## ✨ Features

- Reusable Profile Card component
- Dynamic Follow / Unfollow toggle
- Clean card UI with hover effects
- Responsive layout using flexbox
- Organized folder structure
- Beginner-friendly and scalable structure

---

## 📸 Future Enhancements

- Add profile images
- Add follower count
- Add search functionality
- Add dark mode
- Connect with backend API
- Store follow state in localStorage

---

## 👩‍💻 Author

**Ananya Kushi**

Frontend Developer | React Enthusiast  
Passionate about building interactive and user-friendly web applications.

---

## 📜 License

This project is open-source and available for learning purposes.