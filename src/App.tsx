import { useState, useEffect } from 'react'
import './App.css'
import Link from './components/Link';

function App() {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState<urlStates>([])

  type urlStates = [string, string][];
  

  const createUrl = async () => {
    const response = await fetch('http://localhost:4000', {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    getLinks()
  }

  useEffect(() => {
    getLinks()
  }, []);

  async function getLinks() {
    const response = await fetch("http://localhost:4000/links");

    const data = await response.json()
    setUrlList(Object.entries(data))
  }

  async function remove(link: string) {
    await fetch(`http://localhost:4000/links/${link}`, {
      method: "DELETE",
    });
    console.log(link)
    getLinks();
  }

  return (
    <div>
      <nav className='w-1/3 mx-auto'> 
        <ul className='flex gap-6  font-light justify-center text-white mt-10'>
          <li>Home</li>
          <li>QR Code Generator</li>
          <li>Stats</li>
        </ul>
      </nav>
      <h1 className='w-auto mx-auto text-center text-white font-extrabold mt-20 text-4xl tracking-wider'>Ryans URL shortener</h1>
      <p className='flex pt-4 text-gray-500 font-light w-2/3 justify-center content-center mx-auto'>RB.GY is a free tool to shorten URLs powered by Rebrandly. Create short & memorable links in seconds.</p>
      <div className='flex h-auto flex-col w-2/3 mx-auto rounded-lg items-center mt-8'>
        <div className='flex flex-col justify-evenly'>
          <div className='items-center gap-3 mb-10 flex'>
            <input className='w-96 pl-3 my-auto rounded-md h-12 text-lg ' placeholder="Enter Link Here"type='text' name='url' value={url} onChange={(e) => { setUrl(e.target.value) }}></input>
            <button className='border-solid my-auto rounded-md border-blue-400 text-white bg-blue-400 h-12 border-2 p-2' onClick={createUrl}>Shorten URL</button>
          </div>
          <div className='flex gap-3 flex-col'>
          {urlList.map((url) => <Link 
          slug={url[1]} 
          originalLink={url[0]}
          onDelete={() => remove(url[0])} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
