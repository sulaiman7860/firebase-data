import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='mt-5' style={{backgroundColor:"#9381ff"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className='text-center text-light mb-0'>{year} All Rights Has Been Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
