# React-Toastified 🍞✨

Light up your React app with snazzy notifications!

---

## Introduction 🚀

React-Toastified provides you with an easy-to-use, customizable, and efficient toast notification system. No fuss, just toasts. Keep your users informed in style.

---

## Features 🔥

- **Four Toast Types**: Success 🎉, Error 😢, Warning ⚠️, and Info ℹ️.
- **Customizable**: Tailor your toasts with custom styles, durations, and more.
- **Easy to Implement**: Integrate seamlessly with any React application.

---

## Installation 📦

```bash
npm install react-toastified

# or

yarn add react-toastified
```

---

## How to Use 🛠️

Firstly, wrap your root component with `ToastProvider`.

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

Now, you can use the `useToast` hook to show toasts wherever you need them.

### Basic Example

Here is how you can trigger a simple info toast:

```jsx
import { useToast } from "react-toastified";

function MyComponent() {
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("Hey there! This is an info toast.");
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

### More Toast Types

Need more than just info? We've got you covered! 🎨

````jsx
function MyComponent() {

  const { addToast } = useToast();

  const toastTypes = ["info", "success", "error", "warning"];

  const handleClick = () => {
    // Display the toast based on the current type
    addToast(`Hey there! This is a ${currentType} toast.`, {
      type: currentType,
    });

    // Rotate to the next toast type for the next click
    const nextTypeIndex =
      (toastTypes.indexOf(currentType) + 1) % toastTypes.length;
    setCurrentType(toastTypes[nextTypeIndex]);
  };
  return <button onClick={handleClick}>Show Toast</button>;
}```
### Customize your Toast 🎨

Want to make your toast snazzier? Add some options!

### How to Use

To specify the type of your toast notification, simply pass the desired value to the `type` key in the options object when calling the toast function:

```javascript
import { useToast } from "react-toastified";

const { addToast } = useToast();
// For a success message
addToast("Operation completed successfully!", {
  type: "success",
});

// For an error message
addToast("Failed to fetch data.", {
  type: "error",
});

// And so on for "warning" and "info"
````

---

## Future Plans 🌈

- Support for action buttons in toasts
- More customization options

---

## Contributions 🤝

Feel free to contribute, raise issues, or suggest new features! Let's make this the best toast package out there!

---

Made with ❤️ by [@jcharo]
Inspired by Vercel Notification
