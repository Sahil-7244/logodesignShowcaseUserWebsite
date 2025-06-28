import React, { Suspense } from "react";

// Helper function to delay the lazy loading
const delayLazy = (factory, delay = 5000) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(factory()), delay)
  );

// Lazy load components with delay
const HOME = React.lazy(() => delayLazy(() => import("./pages/homefolder/home"), 500));
const SERVICES = React.lazy(() => delayLazy(() => import("./pages/servicesfolder/services"), 500));
const PROJECT = React.lazy(() => delayLazy(() => import("./pages/projectfolder/project"), 500));
const ABOUTUS = React.lazy(() => delayLazy(() => import("./pages/aboutusfolder/aboutus"), 500));
const CONTACTUS = React.lazy(() => delayLazy(() => import("./pages/contactusfolder/contactus"), 500));
const FOOTER = React.lazy(() => delayLazy(() => import("./pages/footerfolder/footer"), 500));

function App() {
  return (
    <div className="page">
      <Suspense
        fallback={
          <div className="preloader">
            <div className="preloader-body">
              <div className="cssload-container">
                <span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
        }
      >
        <HOME />
        <SERVICES />
        <PROJECT />
        <ABOUTUS />
        <CONTACTUS />
        <FOOTER />
      </Suspense>
    </div>
  );
}

export default App;
