import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <>  
      <Navbar />
      <div className="font-sans">
          {children}
      </div>
    </>
  )
}
