import { useState } from "react"
function App() {
  const [color, setColor] = useState("pink")
  return(
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}></div>
      <div className="fixed flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 ml-4 mr-4 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xs" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xs" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xs" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-xs" style={{backgroundColor: "yellow", color: "black"}} onClick={()=>setColor("yellow")} >Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
