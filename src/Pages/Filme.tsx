import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGet } from "../Hooks/Requests";
import FilmDetails from "../Components/CardFilmDetail";
import FilmCard from "../Components/CardFilmDetail";

export const Filme = () => {
    const { episode_id } = useParams();
    const episodeNumber = Number(episode_id);

    const { data, isLoading, error } = useGet("https://swapi.dev/api/films/");

    const [selectedFilm, setSelectedFilm] = useState<any>(null);

    useEffect(() => {
        if (data && data.results) {
            const film = data.results.find((film: any) => film.episode_id === episodeNumber);
            setSelectedFilm(film);
        }
    }, [data, episodeNumber]);

    return (
        <>
            {isLoading && <p>Carregando...</p>}
            {error && <p>Erro ao carregar</p>}
            {selectedFilm && (
                <FilmCard
                    title={selectedFilm.title}
                    openingCrawl={selectedFilm.opening_crawl}
                    releaseDate={selectedFilm.release_date}
                    director={selectedFilm.director}
                    producer={selectedFilm.producer}
                />
            )}
        </>
    );
};
