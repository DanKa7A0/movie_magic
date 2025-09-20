const db = {
    movies: [
        {
            "id": "a1b2c3d4-e5f6-47a1-9b2c-abcdef123456",
            "title": "Jungle Cruise",
            "category": "Movie",
            "genre": "Adventure",
            "director": "Jaume Collet-Serra",
            "year": 2021,
            "imageURL": "./img/jungle-cruise.jpeg",
            "rating": 7.0,
            "description": "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans."
        },
        {
            "id": "b2c3d4e5-f6a7-48b2-9c3d-bcdef1234567",
            "title": "The Little Mermaid",
            "category": "Movie",
            "genre": "Fantasy",
            "director": "Rob Marshall",
            "year": 2023,
            "imageURL": "./img/the-little-mermaid.jpg",
            "rating": 6.8,
            "description": "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land."
        },
        {
            "id": "c3d4e5f6-a7b8-49c3-9d4e-cdef12345678",
            "title": "Home Alone",
            "category": "Movie",
            "genre": "Comedy",
            "director": "Chris Columbus",
            "year": 1990,
            "imageURL": "./img/home-alone.jpeg",
            "rating": 7.6,
            "description": "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice."
        }
    ]
};

export default class Movie {
    static findAll(){
        const movies = db.movies.map(movie => ({
            id: movie.id
            , title: movie.title
            , imageURL: movie.imageURL
            , genre: movie.genre
            , description: movie.description
        }));

        console.log(movies);

        return movies;
    }
}