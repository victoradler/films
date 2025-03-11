import React, { useEffect, useState } from "react";
import { useGet } from "../Hooks/Requests";
import api from "../axiosConfig";
import date from "../assets/icons/date.svg";
import CardFilms from "../Components/CardFilm";

const Inicio = () => {
  const { data, isLoading, error } = useGet("https://swapi.dev/api/films/");

  if (isLoading) return <p>Carregando filmes...</p>;
  if (error) return <p>Erro ao buscar filmes.</p>;

  return (
    <div>
      <h1>Filmes de Star Wars</h1>
      <div className="films-grid">
        {data?.results.sort((a: any, b: any) => a.episode_id - b.episode_id).map((film: any) => (
          <CardFilms
            key={film.episode_id}
            title={film.title}
            releaseDate={film.release_date}
            episode={film.episode_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
