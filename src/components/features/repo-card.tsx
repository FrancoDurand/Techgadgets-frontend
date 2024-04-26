import './repo-card.css'

export function Repositorio() {
    return (
        <div className='card_container'>
            <div className="card front">
                <div className="card-details">
                    <p className="text-title">Frontend</p>
                </div>
                <button className="card-button" ><a href="https://github.com/FrancoDurand/Techgadgets-frontend">Repositorio</a></button>
            </div>
            <div className="card back">
                <div className="card-details">
                    <p className="text-title">Backend</p>
                </div>
                <button className="card-button" ><a href="https://github.com/FrancoDurand/Techgadgets-backend">Repositorio</a></button>
            </div>
        </div>
    )
}