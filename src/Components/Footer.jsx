import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#0f0f32] text-white w-full relative dark:border-t border-teal-500'>
      <div className='py-2 w-full'>
        <div className="flex justify-between items-center gap-4 px-12">
          <h2 className='font-bold text-xl'>FlashTranslingo</h2>
          <div className="text-lg flex items-center justify-evenly gap-4">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div className="absolute bottom-0 pb-2 flex justify-center gap-8 w-full">
          <p >&copy;copyright-2024</p>
          <p >Developed By-Bhupendra Lute</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer