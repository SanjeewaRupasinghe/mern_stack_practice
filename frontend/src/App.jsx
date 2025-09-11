import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <Box minH="{100vh}">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}