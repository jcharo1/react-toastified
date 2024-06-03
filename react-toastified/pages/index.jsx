import { useState } from "react";
import { useToast } from "@/components/Toast";

const getOnLeaveClassName = (position) => {
  switch (position) {
    case "top-center":
      return "slide-fade-out-up";
    case "top-right":
      return "slide-right-fade-out";
    case "top-left":
      return "slide-left-fade-out";
    case "bottom-left":
      return "slide-left-fade-out";
    case "bottom-center":
      return "slide-fade-out-down";
    case "bottom-right":
      return "slide-right-fade-out";
    default:
      return "";
  }
};

export default function DevelopmentComponent() {
  const [toastType, setToastType] = useState("info");
  const [position, setPosition] = useState("top-right");
  const { addToast } = useToast();
  const [count, setCount] = useState(0);

  const tryToast = () => {
    console.log("tryToast");
    setCount(count + 1);
    if (count >= 10) {
      setCount(0);
    }
    addToast(`This is a ${toastType} toast number ${count}!`, {
      type: toastType,
      rtl: false,
      theme: "dark",
      // duration: 4000,
      position: position,
    });
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 p-10 text-white">
      <div className="flex items-center justify-center">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-transparent shadow ">
              <div className="p-6">
                <div className="w-3/4 p-4">
                  <h1 className="text-2xl font-bold mb-4"></h1>
                  <div>
                    <button
                      className="mr-2 p-2 bg-blue-500 text-white rounded"
                      onClick={() => setToastType("info")}
                    >
                      Info
                    </button>
                    <button
                      className="mr-2 p-2 bg-green-500 text-white rounded"
                      onClick={() => setToastType("success")}
                    >
                      Success
                    </button>
                    <button
                      className="mr-2 p-2 bg-red-500 text-white rounded"
                      onClick={() => setToastType("error")}
                    >
                      Error
                    </button>
                    <button
                      className="mr-2 p-2 bg-yellow-500 text-white rounded"
                      onClick={() => setToastType("warning")}
                    >
                      Warning
                    </button>
                  </div>
                  <div className="mt-4">
                    <button
                      className="mr-2 p-2 bg-blue-500 text-white rounded"
                      onClick={() => setPosition("top-center")}
                    >
                      Top Center
                    </button>
                    <button
                      className="mr-2 p-2 bg-green-500 text-white rounded"
                      onClick={() => setPosition("top-right")}
                    >
                      Top Right
                    </button>
                    <button
                      className="mr-2 p-2 bg-red-500 text-white rounded"
                      onClick={() => setPosition("top-left")}
                    >
                      Top Left
                    </button>
                    <button
                      className="mr-2 p-2 bg-yellow-500 text-white rounded"
                      onClick={() => setPosition("bottom-left")}
                    >
                      Bottom Left
                    </button>
                    <button
                      className="mr-2 p-2 bg-purple-500 text-white rounded"
                      onClick={() => setPosition("bottom-center")}
                    >
                      Bottom Center
                    </button>
                    <button
                      className="mr-2 p-2 bg-indigo-500 text-white rounded"
                      onClick={() => setPosition("bottom-right")}
                    >
                      Bottom Right
                    </button>
                  </div>
                  <button
                    className="mt-4 p-2 bg-indigo-500 text-white rounded"
                    onClick={tryToast}
                  >
                    Try Toast
                  </button>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Code Example</h2>
                    <div className="bg-gray-900 text-white p-4 rounded w-[600px] overflow-x-scroll">
                      <code>
                        {`
        import { useToast } from 'your-toast-package';
        
        const { addToast } = useToast();
        
        addToast("This is a ${toastType} toast!", { type: '${toastType}', position: '${position}' });
      `}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
