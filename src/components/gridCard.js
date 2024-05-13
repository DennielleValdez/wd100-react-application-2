const GridCard = (props) => {
    return ( 
        <>
        <div className="col-md-4">
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nihil corporis, repellat iure necessitatibus quasi esse eaque dolorum neque temporibus, similique veniam fuga consequatur! Exercitationem unde iusto modi veniam recusandae.</p>
                    <a href="#" className="btn btn-warning">Learn More</a>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default GridCard;