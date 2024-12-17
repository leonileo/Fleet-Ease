import { Toaster } from "sonner"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
    <main>
        <Outlet />
    </main>
    <Toaster />
    </>
  )
}

export default App
