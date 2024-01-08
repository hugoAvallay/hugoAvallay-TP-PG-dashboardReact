import { ContentRowItemMovie } from "./ContentRowItemMovie"

const data = [
    {
        id : crypto.randomUUID(),
        color : "primary",
        title : "Movies in Data Base",
        value : 21,
        icon : "fa-film"
    },
    {
        id : crypto.randomUUID(),
        color : "success",
        title : "Total Awards",
        value : 79,
        icon : "fa-award"
    },
    {
        id : crypto.randomUUID(),
        color : "warning",
        title : "Actors Quantity",
        value : 49,
        icon : "fa-user"
    }
]

export const ContentRowMovies = () => {
    return (
        <div className="row">
            {
                data.map(({id,color,title,value,icon}) => <ContentRowItemMovie key={id} color={color} title={title} value={value} icon={icon}/>
                )            
            }
        </div>
    )
}
