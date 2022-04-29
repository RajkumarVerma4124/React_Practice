import React from 'react'
import { useState } from 'react';
import DefaultFunction from './DefaultFunction';
import TicketCount from './TicketCount';


function MovieList() {
    const [movieName, setMovieName] = useState('Not Yet');
    const handleClick = (name) => {
        setMovieName(name);
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    }
    return (
        <div className="flex flex-col w-screen justify-center items-center bg-red-50">
            <h1 className="text-3xl mt-5 mb-5 text-red-500"> Movies List </h1>
            <div className="bg-gray-50 box-border w-9/12  mb-16 shadow-md flex flex-col p-10 justify-between items-center transform hover:shadow-3xl scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-red-300 overflow-y-scroll">
                <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-16">
                    <DefaultFunction
                        ImageUrl='https://upload.wikimedia.org/wikipedia/en/b/b1/Beast_2022_poster.jpg'
                        Movie="Beast"
                        Rating="5.8"
                        Href="https://www.imdb.com/video/vi1757200921?playlistId=tt11301946&ref_=tt_ov_vi"
                        Name="Raj">
                        <button onClick={() => handleClick("Beast")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl='https://myupcomingmovies.com/wp-content/uploads/2021/03/Attack-movie-main-poster.jpg.webp'
                        Movie="Attack"
                        Href="https://www.imdb.com/video/vi2136458009?playlistId=tt7529298&ref_=tt_pr_ov_vi"
                        Rating="7.8" Name="Raj">
                        <button onClick={() => handleClick("Attack")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://pbs.twimg.com/media/FOw6SpWVsAMndXG?format=jpg&name=900x900"
                        Movie="RRR"
                        Href="https://www.imdb.com/video/vi1153549081?playlistId=tt8178634&ref_=tt_ov_vi"
                        Rating="8.4">
                        <button onClick={() => handleClick("RRR")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                        <p className="text-xl text-gray-900">Blockbuster Movie </p>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg"
                        Movie="KJF 2"
                        Href="https://www.imdb.com/video/vi4172333593/?ref_=tt_vi_i_5"
                        Rating="9.1"
                        Name="Omkar" >
                        <button onClick={() => handleClick("KGF 2")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sooryavanshi-et00097952-27-10-2021-05-17-20.jpg"
                        Movie="Sooryavanshi"
                        Href="https://www.imdb.com/video/vi1804059417?playlistId=tt9531772&ref_=tt_ov_vi"
                        Rating="6.5"
                        Name="Aman">
                        <button onClick={() => handleClick("Sooryavanshi")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg"
                        Movie="Baahubali_2_The_Conclusion"
                        Rating="8.2"
                        Href="https://www.imdb.com/video/vi1969010201?playlistId=tt4849438&ref_=tt_ov_vi"
                        Name="Mansi">
                        <button onClick={() => handleClick("Baahubali 2")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                        <p className="text-xl text-gray-900">Blockbuster Movie </p>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://m.media-amazon.com/images/M/MV5BMzE1NDg1ZTctOWUwYS00NDZjLWE0YzgtMzYzZjMxM2RhYTk1XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"
                        Movie="Dasvi"
                        Href="https://www.imdb.com/video/vi4031496985?playlistId=tt14107554&ref_=tt_ov_vi"
                        Rating="7.7"
                        Name="Yash">
                        <button onClick={() => handleClick("Dasvi")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                        <p className="text-xl text-gray-900">Blockbuster Movie </p>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://m.media-amazon.com/images/M/MV5BN2M4NDM2NDItMzgzNy00OWRiLThhNjEtZDA2OWMyNTcwYzRjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"
                        Movie="Gangubai Kathiawadi"
                        Href="https://www.imdb.com/video/vi3439772441?ref_=nv_sr_srsg_1"
                        Rating="7.0"
                        Name="Ajay">
                        <button onClick={() => handleClick("Gangubai Kathiawadi")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                    </DefaultFunction>
                    <DefaultFunction
                        ImageUrl="https://upload.wikimedia.org/wikipedia/en/d/d4/The_Kashmir_Files_poster.jpg"
                        Movie="Kashmiri Files"
                        Href="https://www.imdb.com/video/vi560120601?playlistId=tt10811166&ref_=tt_ov_vi"
                        Rating="8.3"
                        Name="Raj">
                        <button onClick={() => handleClick("Kashmiri Files")}
                            className="self-center w-56 border-1 border-gray-100 p-2 px-4 m-2 bg-gray-200 rounded-md transition duration-1000 hover:shadow-2xl hover:scale-105">
                            Select Now
                        </button>
                        <p className="text-xl text-gray-900">Blockbuster Movie </p>
                    </DefaultFunction>
                </div>
                <div className="p-10">
                    <TicketCount movieName={movieName} price={350} />
                </div>
            </div>
        </div>
    )
}

export default MovieList