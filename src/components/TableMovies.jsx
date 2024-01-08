import { Card, Table } from 'react-bootstrap';
import { TableItemMovie } from './TableItemMovie';

const movies = [
    {
        title: "Tarzan",
        length: 120,
        rating: 10,
        genres: ["Aventuras", "Drama"],
        awards: 10,
    },
    {
        title: "Drácula",
        length: 90,
        rating: 8,
        genres: ["Terror"],
        awards: 4
    },
    {
        title: "Cazafantasmas",
        length: 130,
        rating: 9,
        genres: ["Aventuras", "Ciencia Ficción"],
        awards: 10,
    },
    {
        title: "Degenerada",
        length: 115,
        rating: 3,
        genres: [],
        awards: 1,
    }
]

export const TableMovies = () => {
    return (
        <Card>
            <Card.Body>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Duración</th>
                            <th>Rating</th>
                            <th>Géneros</th>
                            <th>Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        movies.map(({title,length,rating,genres,awards}, index) => <TableItemMovie key={index + title} title={title} length={length} rating={rating} genres={genres} awards={awards}/>)
                       }
                      
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
