import { Routes, Route } from 'react-router-dom'
import Layout from './app/layout'
import ScrollToTop from './composents/ui/ScrollToTop'
import HomePage from './app/page'
import C1Page from './app/competences/c1-realiser/page'
import C2Page from './app/competences/c2-optimiser/page'
import C6Page from './app/competences/c6-collaborer/page'
import ProjectPage from './app/projects/[slug]/page'

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/competences/c1-realiser" element={<C1Page />} />
        <Route path="/competences/c2-optimiser" element={<C2Page />} />
        <Route path="/competences/c6-collaborer" element={<C6Page />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </Layout>
  )
}
