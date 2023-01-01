// components/layout.js
import Navbar from "../main/Navbar"

export default function DefaultLayout({ children }) {

  return (
    <>

      <Navbar />
      <main>{children}</main>
    </>
  )
}
