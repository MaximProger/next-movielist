import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({movie}) => {
  return (
    <div className="w-full max-w-sm bg-zinc-800 border border-zinc-700 rounded-lg shadow flex flex-col mx-auto ms:mx-0">
        <Link href={`/movies/${movie.imdbID}`}>
            {movie.Poster !== 'N/A' && <Image className="w-full h-[460px] sm:h-[360px] object-contain p-5 rounded-t-lg" src={movie.Poster} width={260} height={360} alt={movie.Title} priority />}
        </Link>
        <div className="px-5 pb-5 h-full flex flex-col">
            <Link href={`/movies/${movie.imdbID}`} className='block mb-[12px]'>
                <h5 className="text-xl font-semibold tracking-tight text-white h-[56px] hover:text-amber-600 transition-colors ease-linear delay-20">{movie.Title.length > 40 ? movie.Title.slice(0, 40) + '...' : movie.Title}</h5>
            </Link>
            <div className="flex justify-between items-center capitalize text-white mb-[24px]">
                <span className='inline-block p-1 bg-green-600 font-bold rounded text-sm'>{movie.Type}</span>
                <span className='opacity-75'>{movie.Year}</span>
            </div>
            <Link href={`/movies/${movie.imdbID}`} className="block w-full text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto transition-colors ease-linear delay-20">Detail</Link>
        </div>
    </div>
  )
}

export default MovieCard