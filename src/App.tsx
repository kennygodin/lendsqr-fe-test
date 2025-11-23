import "./styles/globals.scss";

import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./components/layouts/Dashboard";
import UserDetailsPage from "./pages/user-details/user-details";
import UsersPage from "./pages/users/users";
import LoginPage from "./pages/login/login";
import GuarantorsPage from "./pages/guarantors/guarantors";
import LoanPage from "./pages/loans/loans";
import DecisionModelsPage from "./pages/decision-models/decision-models";
import SavingsPage from "./pages/savings/savings";
import LoanRequestsPage from "./pages/loan-requests/loan-requests";
import WhitelistPage from "./pages/whitelists/whitelists";
import KarmaPage from "./pages/karma/karma";
import OrganizationPage from "./pages/organization/organization";
import LoanProductsPage from "./pages/loan-product/loan-product";
import SavingProductPage from "./pages/saving-product/saving-product";
import FeeChargesPage from "./pages/fee-charges/fee-charges";
import TransactionsPage from "./pages/transactions/transactions";
import AuditLogsPage from "./pages/audit-logs/audit-logs";
import FeesPricing from "./pages/fee-pricing/fee-pricing";
import PreferencesPage from "./pages/preferences/preferences";
import ReportsPage from "./pages/reports/reports";
import SettlementsPage from "./pages/settlements/settlements";
import ServiceAccountsPage from "./pages/service-accounts/service-accounts";
import ServicesPage from "./pages/services/services";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route element={<DashboardLayout />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
            <Route path="/guarantors" element={<GuarantorsPage />} />
            <Route path="/loans" element={<LoanPage />} />
            <Route path="/decision" element={<DecisionModelsPage />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="/loan-requests" element={<LoanRequestsPage />} />
            <Route path="/whitelist" element={<WhitelistPage />} />
            <Route path="/karma" element={<KarmaPage />} />
            <Route path="/organization" element={<OrganizationPage />} />
            <Route path="/loan-product" element={<LoanProductsPage />} />
            <Route path="/saving" element={<SavingsPage />} />
            <Route path="/saving-product" element={<SavingProductPage />} />
            <Route path="/fee-charges" element={<FeeChargesPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service-accounts" element={<ServiceAccountsPage />} />
            <Route path="/settlements" element={<SettlementsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/preferences" element={<PreferencesPage />} />
            <Route path="/fees-pricing" element={<FeesPricing />} />
            <Route path="/audit-logs" element={<AuditLogsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
