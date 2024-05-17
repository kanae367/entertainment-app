import { IMovie } from '../types';
import classes from './recommended.module.scss';
import RecommendedItem from './recommended-item/RecommendedItem';

const Recommended = (props: {recommended: IMovie[]}) => {
    const {recommended} = props;

    return(
        <div className={classes.recommended}>
            <h2 className={classes.title}>Recommended for you</h2>
            <ul className={classes.list}>
                {recommended.map(item => <RecommendedItem key={item.title} {...item}/>)}
            </ul>
        </div>
    )
}

export default Recommended;