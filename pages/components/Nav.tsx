import React from 'react'
import { Icon } from '@iconify/react';

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
			<button className='text-primary'>
				<Icon icon="ic:outline-dark-mode" width="24" height="24" />
			</button>
		</div>
      
    </div>
  )
}

export default Nav