import React from 'react'
import Container from './container/Container'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
            <p className="text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            <p className="text-sm">Made with ❤️ by Dipok Das</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer