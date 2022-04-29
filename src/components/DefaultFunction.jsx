import React from 'react'

function DefaultFunction(props) {
    const { ImageUrl, Movie, Rating, Name, Href, children } = props;
    return (
        <div className="flex flex-col justify-between bg-white text-center w-96 p-8 transition duration-1000 transform hover:scale-105 hover:shadow-2xl rounded-lg">
                <h1 className="text-xl text-red-500">
                <a href={Href} target="_blank" rel="noreferrer">
                    <img href="" className="object-contain h-48 w-96" src={ImageUrl} alt="" />
                </a>
                <p className="mt-3">{Movie}</p>
                </h1>
                <p className="text-xl text-yellow-500">
                    Ratings {Rating}
                </p>
                {children}
                <p className="text-lg text-gray-500">Hope You Enjoyed The Movie</p>
                <p className="text-lg text-gray-500">Come Back Again {Name}</p>
            </div>
    )
}

export default DefaultFunction