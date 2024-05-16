import { Metadata } from "next";

type Props = {
    params: {
        movieId: string;
    }
}

export const generateMetadata = ({params}: Props): Metadata => {
    return{
        title: `${params.movieId}`
    }
}

function SingleItem({params}: Props){
    return(
        <h1>Page for item with id of {params.movieId}</h1>
    )
}

export default SingleItem;