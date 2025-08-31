import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`mt-auto transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-navy text-gray-200'
    }`}>
      <div className="px-4 sm:px-6 py-4 border-t border-opacity-20 border-gray-400">
        <div className="hidden md:flex justify-between items-center">
          <div className="text-sm">
            © 2025 Text Editor. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <span>Made with 💙 By Gagan Dhiman</span>
            <div className="flex space-x-3">
              <a 
                href="https://github.com/dhimangagann" 
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                GitHub
              </a>
              <a 
                href="https://github.com/dhimangagann/text-editor" 
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="text-center space-y-2">
            <div className="text-xs sm:text-sm">
              © 2025 Text Editor. Built with React & Tailwind CSS.
            </div>
            <div className="text-xs sm:text-sm">
              Made with 💙 By Gagan Dhiman
            </div>
            <div className="flex justify-center space-x-4 text-xs sm:text-sm">
              <a 
                href="https://github.com/dhimangagann" 
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                GitHub
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://github.com/dhimangagann/text-editor" 
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
                Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer