type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    }
}

function GenrePage ({params: {id}, searchParams: {genre}} : Props) {

 
    return <div>
        Welcome to the genre with ID: {id} & name: {genre}
    </div>
}


//http://localhost:3001/genre/80?/genre=Crime
export default GenrePage;