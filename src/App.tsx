import { Route, Routes } from "react-router";
import { HomePage } from "./pages/home";
import { TermsOfSalePage } from "./pages/terms-of-sale";
import { DemoPage } from "./pages/demo";
import { LegalNoticePage } from "./pages/legal-notice";
import { NotFoundPage } from "./pages/not-found";
import { PrivacyPolicyPage } from "./pages/privacy-policy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mentions-legales" element={<LegalNoticePage />} />
      <Route path="/cgv" element={<TermsOfSalePage />} />
      <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
