import Image from "next/image";
import classes from './search.module.scss';

const Search = () => {
    return(
        <label className={classes.container}>
            <Image className={classes.image} width={24} height={24} src="/assets/icon-search.svg" alt="search"></Image>
            <input className={classes.input} type="text" placeholder="Search for movies or TV series" />
        </label>
    )
}

export default Search;
