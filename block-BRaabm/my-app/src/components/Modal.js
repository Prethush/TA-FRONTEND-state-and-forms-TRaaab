import React from 'react';
import '../style/style.css';

class Modal extends React.Component {
    constructor(props) {
        
        super();
        
    }

    
    render() {
      
    
       let movie = this.props;
        return (
        
             
            <>
             <h2 className="text-xl font-bold">Title: {movie.Title}</h2>
             <h2 className="text-xl font-bold">Released Year: {movie.Released}</h2>
             <div className="text-xl font-bold">

                 {
                     movie.Genre.split(",").map((data) => <h2 className="inline-block mr-2">{data}</h2>)
                 }
             </div>
                <h2 className="text-xl font-bold">Director: {movie.Director}</h2>
                <h2 className="text-xl font-bold">Actors: {movie.Actors}</h2>
                <p className="text-xl font-bold">{movie.Plot}</p>
                <h2 className="text-xl font-bold">Language: {movie.Language}</h2>
                <h2 className="text-xl font-bold">Awards: {movie.Awards}</h2>
                <h2 className="text-xl font-bold">IMDB Rating: {movie.imdbRating}</h2>
             <div className="flex flex-wrap justify-between">
                 {
                     movie.Images.map((img, i) => (
                         <div className="flex-33 my-4" key={i}>
                             <img src={img} alt={movie.Title} className="w-full h-80 object-cover mr-8 rounded-lg"/>
                        </div>
                     ))       
                 }
             </div>
             </>
        
        )
    }
}

export default Modal;