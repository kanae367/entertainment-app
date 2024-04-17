"use client"
import classes from './header.module.scss';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
const nav = ['home', 'bookmark', 'movies', 'tv-series'];

const Header = (props: {hidden: boolean}) => {
    const {hidden} = props;
    const pathname = usePathname();
    const current = pathname.split('/')[1];

    return(
        <header hidden={hidden} className={classes.header}>
            <Image width={25} height={20} className={classes.logo} src="/assets/logo.svg" alt="logo" />
            <nav className={classes.navigation}>
                <ul className={classes.list}>

                    {nav.map(item => 
                        <li key={item} className={item === current || (item === 'home' && !current)  ? classes.active : classes.item} >
                            <Link href={item === "home" ? "/" : "/" + item}>
                                <Image width={16} height={16} className={classes.navImage} src={`/assets/icon-nav-${item}.svg`} alt={item}></Image>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <button className={classes.profile}>
                <Image width={24} height={24} className={classes.profileImage} src="/assets/image-avatar.png" alt="Profile Picture"></Image>
            </button>
        </header>
    )
}

export default Header;