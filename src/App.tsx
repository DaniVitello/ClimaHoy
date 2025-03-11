import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/sonner";
import { WeatherDashboard } from "./pages/weather-dashboard";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CityPage } from "./pages/city-page";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Importa la configuración

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      gcTime: 10 * 60 * 1000, // 10 minutos
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider defaultTheme="dark">
            <Layout>
              <Routes>
                <Route path="/" element={<WeatherDashboard />} />
                <Route path="/city/:cityName" element={<CityPage />} />
              </Routes>
            </Layout>
            <Toaster richColors />
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </I18nextProvider>
  );
}

export default App;
