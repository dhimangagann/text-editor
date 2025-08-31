import { useState } from 'react'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [text, setText] = useState('')
  const [showCheck, setShowCheck] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleUppercase = () => {
    setText(text.toUpperCase())
  }

  const handleLowercase = () => {
    setText(text.toLowerCase())
  }

  const handleRemoveWhitespace = () => {
    setText(text.replace(/\s+/g, ' ').trim())
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setShowCheck(true)
      setTimeout(() => setShowCheck(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleClear = () => {
    setText('')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold opacity-75">
            Enter your text here..
          </h4>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Start typing your text here..."
            className={`w-full h-96 p-4 rounded-lg border-2 resize-none focus:outline-none focus:ring-2 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500'
            }`}
          />
          
          {}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            <button
              onClick={handleUppercase}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                  : 'bg-navy hover:bg-blue-900 text-white border-navy'
              }`}
            >
              UPPERCASE
            </button>
            
            <button
              onClick={handleLowercase}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                  : 'bg-navy hover:bg-blue-900 text-white border-navy'
              }`}
            >
              lowercase
            </button>
            
            <button
              onClick={handleRemoveWhitespace}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                  : 'bg-navy hover:bg-blue-900 text-white border-navy'
              }`}
            >
              Remove Spaces
            </button>
            
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border flex items-center gap-2 ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                  : 'bg-navy hover:bg-blue-900 text-white border-navy'
              }`}
            >
              Copy
              {showCheck && (
                <svg 
                  className="w-4 h-4 text-green-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
            </button>
            
            <button
              onClick={handleClear}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 border ${
                isDarkMode
                  ? 'bg-red-700 hover:bg-red-600 text-white border-red-600'
                  : 'bg-red-600 hover:bg-red-700 text-white border-red-600'
              }`}
            >
              Clear
            </button>
          </div>
          
          <div className={`mt-6 p-4 border rounded ${
            isDarkMode ? 'bg-gray-700 border-gray-500' : 'bg-white border-gray-200'
          }`}>
            {text ? (
              <p className="text-sm">{text}</p>
            ) : (
              <p className="text-sm text-gray-500 italic">Your text will appear here...</p>
            )}
          </div>
          
          <div className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Characters: {text.length} | Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
          </div>
        </div>
      </div>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
