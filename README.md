[![npm](https://img.shields.io/npm/v/react-toastified)](https://www.npmjs.com/package/react-toastified)
[![Made by Justin Charo](https://img.shields.io/badge/Made%20by-Justin%20Charo-blue)](https://justin.charo.gg/)
[![npm version](https://badge.fury.io/js/react-toastified.svg)](https://badge.fury.io/js/react-toastified)
![npm](https://img.shields.io/npm/dm/react-toastified)
![NPM](https://img.shields.io/npm/l/react-toastified)

# 🍞✨ React-Toastified — Get Your Notifications Toasty!

Elevate the UX of your React apps with toasts that are as informative as they are delicious.

---

## 🚀 Quick Intro

Why settle for boring alerts when you can have toast? React-Toastified serves up a feast of eye-catching notifications with zero hassle. Hover over and feel the warmth of our interactive toasts. More style, less stress. Let's get toastified! 🥂

---

## 🔥 What’s Cooking?

- 🎉 **Flavorsome Toast Types**: Success, Error, Warning, and Info.
-  🌌 Hover & Glow: Experience the magical hover effect that makes your notifications pop!
- 👔 **Tailor-Made**: Spice up your toasts with custom styles, durations, and more.
- 🛠️ **Plug 'n' Play**: Pairs perfectly with any React dish.


---

## 📦 Pantry Essentials (Installation)

You can add this package to your project using npm or yarn:

```bash
npm install react-toastified

# or if you're a yarn fan

yarn add react-toastified
```

---

## 🛠️ Cooking Time (Usage)

Before cooking up some toasts, wrap your root component in `ToastProvider`.

```jsx
import App from "./App";
import { ToastProvider } from "react-toastified";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
```

### 🍞 Basic Toast Recipe

Triggering a simple info toast is as easy as pie!

```jsx
import { useToast } from "react-toastified";

function MyComponent() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("Hey, check this out! Info toast, coming right up!");
  };

  return <button onClick={handleClick}>Serve Toast</button>;
}
```

### 🌈 Rainbow of Toasts

Why stick to one flavor when you can have them all? 🌈

```jsx
function MyComponent() {
  const { addToast } = useToast();
  const toastTypes = ["info", "success", "error", "warning"];

  const handleClick = (type) => {
    addToast(`A fresh ${type} toast, just for you!`, {
      type,
      position:"bottom-right" // Default is bottom-right , full list of position arguments  are ['bottom-right', 'bottom-left', 'top-left', 'top-right']
      style: {
        color: "black",
        // backgroundColor: "pink", // Add some flair with custom styles
        // padding: "24px"
      },
    });
  };

  return (
    <>
      {toastTypes.map((type) => (
        <button onClick={() => handleClick(type)}>Serve {type} Toast</button>
      ))}
    </>
  );
}
```

### 🎨 Garnish Your Toast

Add some jazz to your toasts with custom options.

```javascript
import { useToast } from "react-toastified";

const { addToast } = useToast();
addToast("Yay! You did it!", { type: "success" });
addToast("Oops! Something went wrong.", { type: "error" });
```

---

## 🌈 Coming Up Next!

- 🚀 Action buttons for your toasts
- 🎨 Even more ways to customize

---

## 🤝 Share Your Recipes (Contributions)

If you’ve got some zesty ideas, we’re all ears! Issue reports, feature requests, and contributions are always welcome. Let's make some toast magic together!

---

💌 Lovingly baked by [@jcharo], seasoned with inspiration from Vercel Notification.

## Also Check Out My Other Package 🌟

Interested in displaying GitHub activity in a stylish calendar format within your React apps? Check out my other package, **React GitHub Activity Calendar**!

- **NPM**: [React GitHub Activity Calendar on NPM](https://www.npmjs.com/package/react-github-activity-calendar)
- **Portfolio**: [View on my Portfolio](https://justin.charo.gg/)
- **GitHub**: [@jcharo1](https://www.github.com/jcharo1)

![React GitHub Activity Calendar Screenshot](https://github.com/jcharo1/react-github-activity-calendar/blob/main/github.png)

It's a simple and customizable React component for showing GitHub activity. To learn more about how to use it and integrate it into your projects, head over to the [official documentation](https://www.npmjs.com/package/react-github-activity-calendar).
