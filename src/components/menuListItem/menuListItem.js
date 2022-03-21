import React from 'react'

export const MenuListItem = (props) => {
  return (
    <li  {...props}>
    <a id="link" href={props.href}><div className="icon-container">
{
    props.icon
}
</div>
{   props.name}
    </a>
  </li>
  )
}
