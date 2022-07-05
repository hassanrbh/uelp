import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SkeletonTheme } from "react-loading-skeleton";

const queryclient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SkeletonTheme baseColor="#dfdfdf" highlightColor="#d6d6d6">
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center space-x-2">
              <div
                className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
                role="status"
              ></div>
              <div
                className="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0"
                role="status"
              ></div>
            </div>
          }
        >
          <App />
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  </SkeletonTheme>
);
