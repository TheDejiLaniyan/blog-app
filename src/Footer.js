import {format} from 'date-fns'
import React from 'react'

const Footer = () => {
  return (
    <footer className='Footer'>
        <p>Copyright &copy; {format(new Date(), 'yyyy')}</p>
    </footer>
  )
}

export default Footer