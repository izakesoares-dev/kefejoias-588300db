import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import AneisPedrasNaturais from "./pages/AneisPedrasNaturais";
import PingentesPedrasNaturais from "./pages/PingentesPedrasNaturais";
import PingentesResinaNatural from "./pages/PingentesResinaNatural";
import Pedras from "./pages/Pedras";
import Flores from "./pages/Flores";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import ColaresPedras from "./pages/ColaresPedras";
import ColaresResina from "./pages/ColaresResina";
import PulseirasMacrame from "./pages/PulseirasMacrame";
import PulseirasPedras from "./pages/PulseirasPedras";
import PulseirasAco from "./pages/PulseirasAco";
import PulseirasMinimalistas from "./pages/PulseirasMinimalistas";
import PiramidesQuanticas from "./pages/PiramidesQuanticas";
import SantinhasPedra from "./pages/SantinhasPedra";
import MandalasResina from "./pages/MandalasResina";
import IncensariosResina from "./pages/IncensariosResina";
import KitsPresente from "./pages/KitsPresente";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <CartDrawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/aneis-pedras-naturais" element={<AneisPedrasNaturais />} />
            <Route path="/aneis-pedras" element={<AneisPedrasNaturais />} />
            <Route path="/pedras" element={<Pedras />} />
            <Route path="/flores" element={<Flores />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produto/:slug" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Pendant Routes */}
            <Route path="/pingentes-pedras-naturais" element={<PingentesPedrasNaturais />} />
            <Route path="/pingentes-resina-natural" element={<PingentesResinaNatural />} />
            {/* Placeholder routes for future categories */}
            <Route path="/aneis-flores" element={<Products />} />
            <Route path="/colares-pedras" element={<ColaresPedras />} />
            <Route path="/colares-resina" element={<ColaresResina />} />
            <Route path="/colares-resina-flores" element={<ColaresResina />} />
            <Route path="/pulseiras-pedras" element={<PulseirasPedras />} />
            <Route path="/pulseiras-macrame" element={<PulseirasMacrame />} />
            <Route path="/pulseiras-aco" element={<PulseirasAco />} />
            <Route path="/pulseiras-minimalistas" element={<PulseirasMinimalistas />} />
            <Route path="/piramides-quanticas" element={<PiramidesQuanticas />} />
            <Route path="/santinhas-pedra" element={<SantinhasPedra />} />
            <Route path="/mandalas-resina" element={<MandalasResina />} />
            <Route path="/incensarios-resina" element={<IncensariosResina />} />
            <Route path="/kits-presente" element={<KitsPresente />} />
            <Route path="/lancamentos" element={<Products />} />
            <Route path="/mais-vendidos" element={<Products />} />
            <Route path="/personalizar" element={<Contato />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
