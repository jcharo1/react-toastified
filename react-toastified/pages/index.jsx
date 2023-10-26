import Image from 'next/image'
import { Inter } from 'next/font/google'
import { use, useState } from 'react';

import { useToast } from '@/components/Toast'


export default function DevelopmentComponent() {
  const [toastType, setToastType] = useState("info");
  const { addToast } = useToast();
  const [count, setCount] = useState(0);

  const tryToast = () => {
    console.log("tryToast");
    setCount(count + 1);
    if (count >= 10) {
      setCount(0);
    }
    addToast(`This is a ${toastType} toast  number ${count}!`, {
      type: toastType,
      rtl: false,
      onCloseEffect: "slideDown",
      position: " center-top",
      style: { fontSize: "1.2rem" },
    });
  };
  return (

    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 p-10 bg-slate-500 h-[400vh] ">

      <h1 className="sr-only">Page title</h1>
      {/* Main 3 column grid */}
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8 ">
        {/* Left column */}
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="section-1-title">
            <h2 className="sr-only" id="section-1-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6"> <div className="w-3/4 p-4">
                <h1 className="text-2xl font-bold mb-4">🍞✨ React-Toastified — Get Your Notifications Toasty!</h1>
                <div>
                  <button className="mr-2 p-2 bg-blue-500 text-white rounded" onClick={() => setToastType("info")}>Info</button>
                  <button className="mr-2 p-2 bg-green-500 text-white rounded" onClick={() => setToastType("success")}>Success</button>
                  <button className="mr-2 p-2 bg-red-500 text-white rounded" onClick={() => setToastType("error")}>Error</button>
                  <button className="mr-2 p-2 bg-yellow-500 text-white rounded" onClick={() => setToastType("warning")}>Warning</button>
                </div>
                <button className="mt-4 p-2 bg-indigo-500 text-white rounded" onClick={tryToast}>Try Toast</button>
                <div className="mt-4 ">
                  <h2 className="text-xl font-bold mb-2">Code Example</h2>
                  <div className="bg-gray-900 text-white p-4 rounded w-[600px] overflow-x-scroll">
                    <code>
                      {`
        import { useToast } from 'your-toast-package';
        
        const { addToast } = useToast();
        
        addToast("This is a ${toastType} toast!", { type: '${toastType}' });
      `}
                    </code>
                  </div>
                </div>

              </div></div>
            </div>
          </section>
        </div>

        {/* Right column */}
        {/* <div className="grid grid-cols-1 gap-4">
          <section aria-labelledby="section-2-title">
            <h2 className="sr-only" id="section-2-title">
              Section title
            </h2>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6"></div>
            </div>
          </section>
        </div> */}
      </div>
    </div>
  )
}
