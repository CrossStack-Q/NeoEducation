import React from 'react'
import { Link } from 'react-router-dom'

function NavButton({text,route}) {
  return (
    <Link to={route} className=''>{text}</Link>
  )
}

export default NavButton