import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { MovieCreateDto } from '../interfaces/movie/MovieCreateDto';
import Movie from '../models/Movie';

const createMovie = async (
  movieCreateDto: MovieCreateDto
): Promise<PostBaseResponseDto> => {
  try {
    const movie = new Movie(movieCreateDto);

    await movie.save();

    const data = {
      _id: movie._id
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { createMovie };
