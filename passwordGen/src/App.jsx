import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('')

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerate = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "1234567890"
    if(charAllow) str+= "~`@#$%^&*(){}[]?!"
      for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberAllow, charAllow, setPassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101) // For mobile devices
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerate()
  },[length, numberAllow, charAllow, passwordGenerate])
  return(
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-2'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)} />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={numberAllow} onChange={(e)=>setNumberAllow(e.target.checked)} />
          <label className='text-white'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" checked={charAllow} onChange={(e)=>setCharAllow(e.target.checked)} />
          <label className='text-white'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
