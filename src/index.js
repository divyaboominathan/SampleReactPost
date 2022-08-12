import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
 <QueryClientProvider client={queryClient}>
 <ReactQueryDevtools initialIsOpen={false} />
    <App />  
</QueryClientProvider>
  </StrictMode>
);
