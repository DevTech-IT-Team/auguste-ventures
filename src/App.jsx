import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import MerchantPolicies from './pages/MerchantPolicies'
import LegalNotice from './pages/LegalNotice'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="articles" element={<Articles />} />
          <Route path="articles/:slug" element={<ArticleDetail />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="merchant-policies" element={<MerchantPolicies />} />
          <Route path="legal-notice" element={<LegalNotice />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
