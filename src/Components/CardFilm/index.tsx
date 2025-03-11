import React from "react";
import "./card-film.css";
import DarthVader from "../../assets/icons/darth_vader.svg";
import { Link } from "react-router-dom";

interface CardFilmsProps {
    title: string;
    releaseDate: string;
    episode: number;
}

const CardFilms = ({ title, releaseDate, episode }: CardFilmsProps) => {
    return (
        <div className="card-films">
            <img src={DarthVader} alt="Imagem do filme" width={50} />
            <h2>Episode {episode}</h2>
            <span>{title}</span>
            <p>Data de lançamento: {releaseDate}</p>
            <Link to={`/filme/${episode}`}>
                <button>Ver detalhes</button>
            </Link>
        </div>
    );
};

export default CardFilms;
