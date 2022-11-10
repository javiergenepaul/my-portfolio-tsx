import React, { useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from 'next-themes';


type Props = {};

function Nav({}: Props) {
	const {systemTheme, theme, setTheme} = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;
    return (
        <div className="text-white flex justify-between py-[12px] items-center">
            <div className="flex">
                <img src="/logo.svg" alt="" />
				<span className="">JAVI</span>
            </div>
            <div className="flex gap-4">
                <ul className="flex gap-4">
                    <li>HOME</li>
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
