import PropTypes from 'prop-types';

export const TableItemMovie = ({ title, length, rating, genres, awards }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {
                        genres.length ?
                            genres.map((genre, id) => (
                                <li key={id}>{genre}</li>
                            ))
                            :
                            <li>Sin especificar</li>
                    }
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    )
}

TableItemMovie.propTypes = {

    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.number,
    genres: PropTypes.array,
    awards: PropTypes.number,
}

TableItemMovie.defaultProps = {
    genres: []
}