<!-- [![npm](https://img.shields.io/npm/v/react-toastified)](https://www.npmjs.com/package/react-toastified)
[![Made by Justin Charo](https://img.shields.io/badge/Made%20by-Justin%20Charo-blue)](https://justin.charo.gg/)
[![npm version](https://badge.fury.io/js/react-toastified.svg)](https://badge.fury.io/js/react-toastified)
![npm](https://img.shields.io/npm/dm/react-toastified)
![NPM](https://img.shields.io/npm/l/react-toastified)

# React Toastified

An easy-to-use, customizable toast notification system for React apps.

## Features

- Multiple toast types: Success, Error, Warning, Info
- Customizable positions: top-center, top-right, top-left, bottom-center, bottom-right, bottom-left
- Customizable themes: light, dark, colored
- Progress bar for toasts with durations
- Right-to-left (RTL) support
- Multiple animations for toast entrance and exit
- Queueing system for displaying multiple toasts

## Installation

```bash
npm install react-toastified
```

## Usage

### Basic Setup

Wrap your application with the `ToastProvider`:

```jsx
import React from "react";
import { ToastProvider } from "react-toastified";
import "react-toastified/npm-package/styles/Toast.min.css";

function App() {
  return (
    <ToastProvider theme="dark">
      <MyComponent />
    </ToastProvider>
  );
}
```

### Creating a Toast

Use the `toast` object to create toasts:

```jsx
import React from "react";
import { toast } from "react-toastified";
import "react-toastified/npm-package/styles/Toast.min.css";

function MyComponent() {
  const showToast = () => {
    toast.success("This is a success message!", {
      duration: 3000,
      position: "top-right",
      theme: "light",
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}
```

## Customization

### Toast Types

Available toast types are defined in `toast`:

- `toast.success`
- `toast.error`
- `toast.warning`
- `toast.info`

### Positions

Toasts can be positioned in the following areas:

- `top-center`
- `top-right`
- `top-left`
- `bottom-center`
- `bottom-right`
- `bottom-left`

### Themes

Toasts can have different themes:

- `dark` (default)
- `light`
- `colored`

### Right-to-Left (RTL) Support

Enable RTL support by setting the `rtl` option to `true`:

```jsx
toast.success("This is a success message!", {
  duration: 3000,
  position: "top-right",
  rtl: true,
});
```

### Custom Class Names

Add custom class names to the toast for additional styling:

```jsx
toast.info("Custom styled toast", {
  classNames: "custom-toast",
});
```

### Progress Bar

Toasts with a duration will automatically show a progress bar:

```jsx
toast.info("Toast with progress bar", {
  duration: 5000,
});
```

## Animations

Toasts can have different animations based on their position:

- `slide-fade-out-up`
- `slide-right-fade-out`
- `slide-left-fade-out`
- `slide-fade-out-down`

These are automatically applied based on the toast's position.

## Complete Example

```jsx
import React from "react";
import { ToastProvider } from "react-toastified";
import { toast, Toast } from "react-toastified";
import "react-toastified/styles/Toast.min.css";

function App() {
  const showSuccessToast = () => {
    toast.success("This is a success message!", {
      duration: 3000,
      position: "top-right",
      theme: "light",
      classNames: "custom-toast",
      rtl: true,
    });
  };

  const showErrorToast = () => {
    toast.error("This is an error message!", {
      duration: 3000,
      position: "bottom-left",
      theme: "colored",
    });
  };

  return (
    <ToastProvider theme="dark">
      <Toast />
      <div>
        <button onClick={showSuccessToast}>Show Success Toast</button>
        <button onClick={showErrorToast}>Show Error Toast</button>
      </div>
    </ToastProvider>
  );
}

export default App;
```

## CSS Customization

You can further customize the toasts using CSS. The following class names are available for styling:

- `.toast-container`
- `.toast`
- `.toast-success`
- `.toast-error`
- `.toast-warning`
- `.toast-info`
- `.toast-success-colored`
- `.toast-error-colored`
- `.toast-warning-colored`
- `.toast-info-colored`
- `.progress-bar`

---

This documentation provides a comprehensive overview of how to use and customize the React Toastified package. If you have any questions or encounter issues, please refer to the [GitHub repository](https://github.com/jcharo1/react-toastified) for further information and support.

💌 baked by [@jcharo], seasoned with inspiration from Vercel Notification.

## Also Check Out My Other Package 🌟

Interested in displaying GitHub activity in a stylish calendar format within your React apps? Check out my other package, **React GitHub Activity Calendar**!

- **NPM**: [React GitHub Activity Calendar on NPM](https://www.npmjs.com/package/react-github-activity-calendar)
- **Portfolio**: [View on my Portfolio](https://justin.charo.gg/)
- **GitHub**: [@jcharo1](https://www.github.com/jcharo1)

![React GitHub Activity Calendar Screenshot](https://github.com/jcharo1/react-github-activity-calendar/blob/main/github.png)

It's a simple and customizable React component for showing GitHub activity. To learn more about how to use it and integrate it into your projects, head over to the [official documentation](https://www.npmjs.com/package/react-github-activity-calendar). -->

# React Toastified

An easy-to-use, customizable toast notification system for React apps.

## Features

- Multiple toast types: Success, Error, Warning, Info
- Customizable positions: top-center, top-right, top-left, bottom-center, bottom-right, bottom-left
- Customizable themes: light, dark, colored
- Progress bar for toasts with durations
- Right-to-left (RTL) support
- Multiple animations for toast entrance and exit
- Queueing system for displaying multiple toasts
- Option to display newest toast on top
- Default and custom icons for each toast type

## Installation

```bash
npm install react-toastified
```

## Usage

### Basic Setup

Wrap your application with the `ToastProvider`:

```jsx
import React from "react";
import { ToastProvider } from "react-toastified";
import "react-toastified/styles/Toast.min.css";

function App() {
  return (
    <ToastProvider theme="dark" newestOnTop={true}>
      <MyComponent />
    </ToastProvider>
  );
}
```

### Creating a Toast

Use the `toast` object to create toasts:

```jsx
import React from "react";
import { toast } from "react-toastified";
import "react-toastified/styles/Toast.min.css";

function MyComponent() {
  const showToast = () => {
    toast.success("This is a success message!", {
      duration: 3000,
      position: "top-right",
      theme: "light",
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}
```

### Custom Icons

You can provide custom icons for your toasts:

```jsx
import React from "react";
import { toast } from "react-toastified";
import "react-toastified/styles/Toast.min.css";
import { ReactComponent as CustomSuccessIcon } from "./path/to/custom-success-icon.svg";

function MyComponent() {
  const showToast = () => {
    toast.success("This is a success message!", {
      duration: 3000,
      position: "top-right",
      theme: "light",
      icon: <CustomSuccessIcon />,
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
}
```

## Customization

### Toast Types

Available toast types are defined in `toast`:

- `toast.success`
- `toast.error`
- `toast.warning`
- `toast.info`

### Positions

Toasts can be positioned in the following areas:

- `top-center`
- `top-right`
- `top-left`
- `bottom-center`
- `bottom-right`
- `bottom-left`

### Themes

Toasts can have different themes:

- `dark` (default)
- `light`
- `colored`

### Right-to-Left (RTL) Support

Enable RTL support by setting the `rtl` option to `true`:

```jsx
toast.success("This is a success message!", {
  duration: 3000,
  position: "top-right",
  rtl: true,
});
```

### Custom Class Names

Add custom class names to the toast for additional styling:

```jsx
toast.info("Custom styled toast", {
  classNames: "custom-toast",
});
```

### Progress Bar

Toasts with a duration will automatically show a progress bar:

```jsx
toast.info("Toast with progress bar", {
  duration: 5000,
});
```

## Animations

Toasts can have different animations based on their position:

- `slide-fade-out-up`
- `slide-right-fade-out`
- `slide-left-fade-out`
- `slide-fade-out-down`

These are automatically applied based on the toast's position.

## Complete Example

```jsx
import React from "react";
import { ToastProvider, toast } from "react-toastified";
import "react-toastified/styles/Toast.min.css";

function App() {
  const showSuccessToast = () => {
    toast.success("This is a success message!", {
      duration: 3000,
      position: "top-right",
      theme: "light",
      classNames: "custom-toast",
      rtl: true,
    });
  };

  const showErrorToast = () => {
    toast.error("This is an error message!", {
      duration: 3000,
      position: "bottom-left",
      theme: "colored",
    });
  };

  return (
    <ToastProvider theme="dark" newestOnTop={true}>
      <div>
        <button onClick={showSuccessToast}>Show Success Toast</button>
        <button onClick={showErrorToast}>Show Error Toast</button>
      </div>
    </ToastProvider>
  );
}

export default App;
```

## CSS Customization

You can further customize the toasts using CSS. The following class names are available for styling:

- `.toast-container`
- `.toast`
- `.toast-success`
- `.toast-error`
- `.toast-warning`
- `.toast-info`
- `.toast-success-colored`
- `.toast-error-colored`
- `.toast-warning-colored`
- `.toast-info-colored`
- `.progress-bar`

---

This documentation provides a comprehensive overview of how to use and customize the React Toastified package. If you have any questions or encounter issues, please refer to the [GitHub repository](https://github.com/jcharo1/react-toastified) for further information and support.
