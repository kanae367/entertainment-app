import { IMovie } from "../../types";
import classes from './trending-item.module.scss';
import Image from "next/image";

const TrendingItem = (props: IMovie) => {
    const {thumbnail, title, year, category, isBookmarked, rating} = props;
    return(
        <li className={classes.item}>
            <Image 
                width={240} 
                height={140} 
                className={classes.image} 
                src={thumbnail.trending!.small.replace('.', '')} 
                alt={title}>
            </Image>
            <div className={classes.container}>
                <div className={classes.info}>
                    <span>{year}</span>
                    <span className={classes.category}>
                        <Image width={12} height={12} src={category === 'TV Series' ? '/assets/icon-category-tv.svg' : '/assets/icon-category-movie.svg'} alt={category}></Image>
                        {category}
                    </span>
                    <span>{rating}</span>
                </div>
                <h3 className={classes.title}>{title}</h3>
            </div>
            <button className={classes.bookmark}>
                <Image width={12} height={14} className={classes.bookmarkImage} alt="bookmark" src='/assets/icon-bookmark-empty.svg'></Image>
            </button>
        </li>
    )
} 

export default TrendingItem;