import React from 'react'

type Props = {}

function Nav({}: Props) {
  return (
    <div className='text-white flex justify-between py-[12px] items-center'>
		<div className="icons">
			<img src="/navlogo.svg" alt="" />
		</div>
		<div className="flex gap-4">
			<ul className='flex gap-4'>
				<li>HOME</li>
				<li>ABOUT</li>
				<li>PROJECTS</li>
				<li>CONTACTS</li>
			</ul>
			<button>LIGHT</button>
		</div>
      
    </div>
  )
}

export default Nav