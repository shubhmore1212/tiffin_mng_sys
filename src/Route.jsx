import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";

import App from "./App";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const RouteComponent = () => {
  return (
    // <>Hi</>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        type="success"
      />
    </Router>
  );
};

export default RouteComponent;
