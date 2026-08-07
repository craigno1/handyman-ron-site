import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from './pages/Home';
import CarpentryPage from './pages/CarpentryPage';
import PlasteringPage from './pages/PlasteringPage';
import RenovationsPage from './pages/RenovationsPage';
import ExtensionsPage from './pages/ExtensionsPage';
import TinyHousePage from './pages/TinyHousePage';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/carpentry" component={CarpentryPage} />
      <Route path="/plastering" component={PlasteringPage} />
      <Route path="/renovations" component={RenovationsPage} />
      <Route path="/extensions" component={ExtensionsPage} />
      <Route path="/tiny-house-building" component={TinyHousePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
