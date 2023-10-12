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
import { useToast, TOAST_TYPES } from "react-toastified";

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

```jsx
const handleClick = (type) => {
  addToast(`This is a ${type} toast!`, { type });
};

// For a success toast
handleClick("success");

// For an error toast
handleClick("error");

// For a warning toast
handleClick("warning");
```

### Customize your Toast 🎨

Want to make your toast snazzier? Add some options!

## API 📖

### `addToast(message, options?)`

#### Parameters

- `message` (String): The message to be displayed in the toast.
- `options` (Object): Optional settings.
  - `type` (String): Type of the toast. Default is `INFO`. -
    export const TOAST_TYPES = {

## `type` Option in Toast Notification

When you're using our React toast notification package, you have the flexibility to customize the appearance and behavior of your toast notifications. One of the keys available in the options object is `type`.

### What is the `type` Option?

The `type` option determines the visual theme and intent of the toast notification. Depending on the context of the message you want to convey to the user, you can choose among various predefined types.

### Available Types

Here are the types you can use:

- **`success`**: Use this type when you want to notify the user of a successful operation or task completion. This typically displays the toast in a green theme.
- **`error`**: This type is ideal for conveying errors or failures in operations. It commonly comes with a red theme to indicate the severity.
- **`warning`**: Opt for this type when you want to warn the user about potential issues or require their attention for specific matters. It's generally represented in a yellow theme.
- **`info`**: This type is for general informational messages. It might have a blue or neutral theme to represent non-critical information.

### How to Use

To specify the type of your toast notification, simply pass the desired value to the `type` key in the options object when calling the toast function:

```javascript
import { showToast } from "your-toast-notification-package";

// For a success message
showToast("Operation completed successfully!", {
  type: "success",
});

// For an error message
showToast("Failed to fetch data.", {
  type: "error",
});

// And so on for "warning" and "info"
```

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
