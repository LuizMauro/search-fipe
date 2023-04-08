import React from "react";
import { CustomProvider } from "rsuite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FipeProvider } from "./context/fipe/fipeContext";
import { Home } from "./pages/Home";
import ptBr from "rsuite/locales/pt_BR";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <CustomProvider locale={ptBr} theme="dark">
      <QueryClientProvider client={client}>
        <FipeProvider>
          <Home />
        </FipeProvider>
      </QueryClientProvider>
    </CustomProvider>
  );
};

export default App;
