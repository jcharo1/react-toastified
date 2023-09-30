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

\```bash
npm install react-toastified

# or

yarn add react-toastified
\```

---

## How to Use 🛠️

Firstly, wrap your root component with `ToastProvider`.

\```jsx
import { ToastProvider } from 'react-toastified';

function App() {
return (
<ToastProvider>
{/_ Your code here _/}
</ToastProvider>
);
}
\```

Now, you can use the `useToast` hook to show toasts wherever you need them.

### Basic Example

Here is how you can trigger a simple info toast:

\```jsx
import { useToast, TOAST_TYPES } from 'react-toastified';

function MyComponent() {
const { addToast } = useToast();

const handleClick = () => {
addToast("Hey there! This is an info toast.");
};

return (
<button onClick={handleClick}>Show Toast</button>
);
}
\```

### More Toast Types

Need more than just info? We've got you covered! 🎨

\```jsx
const handleClick = (type) => {
  addToast(`This is a ${type} toast!`, { type });
};

// For a success toast
handleClick(TOAST_TYPES.SUCCESS);

// For an error toast
handleClick(TOAST_TYPES.ERROR);

// For a warning toast
handleClick(TOAST_TYPES.WARNING);
\```

### Customize your Toast 🎨

Want to make your toast snazzier? Add some options!

\```jsx
addToast("This toast will disappear in 3 seconds!", {
type: TOAST_TYPES.SUCCESS,
duration: 3000,
});

addToast("This is a red toast!", {
style: { backgroundColor: 'red' },
});
\```

---

## API 📖

### `addToast(message, options?)`

#### Parameters

- `message` (String): The message to be displayed in the toast.
- `options` (Object): Optional settings.
  - `type` (Enum): Type of the toast. Default is `TOAST_TYPES.INFO`.
  - `style` (Object): Custom styles for the toast.
  - `duration` (Number): Duration in milliseconds. Pass `null` for indefinite.

---

## Future Plans 🌈

- Support for action buttons in toasts
- More customization options

---

## Contributions 🤝

Feel free to contribute, raise issues, or suggest new features! Let's make this the best toast package out there!

---

Made with ❤️ by [Your Name]
