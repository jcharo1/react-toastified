import "@/styles/globals.css";
import { ToastProvider } from "@/components/Toast";
export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
