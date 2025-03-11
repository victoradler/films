import React from "react";
import "./CardFilmDetail.css";

interface FilmCardProps {
    title: string;
    openingCrawl: string;
    releaseDate: string;
    director: string;
    producer: string;
}

const FilmCard: React.FC<FilmCardProps> = ({ title, openingCrawl, releaseDate, director, producer }) => {
    return (
        <div className="film-card">
            <div className="film-card-header">
                <h1>{title}</h1>
            </div>
            <div className="film-card-body">
                <p className="opening-crawl">"{openingCrawl}"</p>
                <p><strong>Data de Lançamento:</strong> {releaseDate}</p>
                <p><strong>Diretor:</strong> {director}</p>
                <p><strong>Produtor:</strong> {producer}</p>
            </div>
        </div>
    );
};

export default FilmCard;