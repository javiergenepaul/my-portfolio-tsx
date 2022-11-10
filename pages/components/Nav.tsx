import React from "react";
import { Icon } from "@iconify/react";
import { useTheme } from 'next-themes'		

type Props = {};



function Nav({}: Props) {
	const {systemTheme, theme, setTheme} = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	console.log(currentTheme);
	
    return (
        <div className="text-white flex justify-between py-[12px] items-center">
            <div className="icons">
                <img src="/navlogo.svg" alt="" />
            </div>
            <div className="flex gap-4">
                <ul className="flex gap-4 text-black dark:text-white">
                    <li className="text-black dark:text-white">HOME</li>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>CONTACTS</li>
                </ul>
				<button className="text-primary"	
					onClick={() => setTheme(currentTheme === 'light' ? 'dark': 'light')}>
					{currentTheme === 'light' ? <Icon icon="carbon:light-filled" width="24" height="24" />: <Icon icon="ic:outline-dark-mode" width="24" height="24" />}
				</button>
            </div>
        </div>
    );
}

export default Nav;
