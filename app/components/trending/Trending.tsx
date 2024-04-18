import { IMovie } from "../types";
import classes from './trending.module.scss';
import TrendingItem from "./trending-item/TrendingItem";

const Trending = (props: {trending: IMovie[]}) => {
    const {trending} = props;

    return(
        <div className={classes.trending}>
            <h2 className={classes.title}>Trending</h2>
            <ul className={classes.list}>
                {trending.map(item => <TrendingItem key={item.title} {...item}/>)}
            </ul>
        </div>
    )
}

export default Trending;