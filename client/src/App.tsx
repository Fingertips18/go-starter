import { Container, Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { AppRoutes } from "./constants/routes";
import { Navbar } from "./components/Navbar";
import ToastProvider from "./lib/provider";
import DetailsPage from "./pages/details";
import RootPage from "./pages/root";

function App() {
  return (
    <ToastProvider>
      <Stack h="100dvh" overflowX="hidden" overflowY="auto">
        <Navbar />
        <Container pb={12} pt={4}>
          <Routes>
            <Route path={AppRoutes.Root} element={<RootPage />} />
            <Route path={AppRoutes.Details} element={<DetailsPage />} />
          </Routes>
        </Container>
      </Stack>
    </ToastProvider>
  );
}

export default App;
