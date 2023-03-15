import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { IMovieCard, IMovieDetail, IParams } from "@/models/models";

const MovieDetail = ({ movie }: { movie: IMovieDetail }) => {
  return (
    <>
      <Head>
        <title>{movie.Title}</title>
        <meta name="description" content={movie.Plot} />
      </Head>
      <Link
        href="/"
        className="mb-5 inline-block text-white bg-transparent border border-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-7 py-2 text-center mt-auto transition-colors ease-linear delay-20"
      >
        Back
      </Link>
      <div className="text-white">
        <h1 className="text-3xl font-medium mb-10">{movie.Title}</h1>

        <Image
          className="mx-auto w-[300px] h-[428] object-contain mb-10"
          src={movie.Poster}
          width={300}
          height={428}
          alt={movie.Title}
        />

        <div className="border border-zinc-700  relative overflow-x-auto shadow-md sm:rounded-lg mb-10">
          <table className="w-full text-sm text-left text-white">
            <tbody>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white bg-zinc-800"
                >
                  Type
                </th>
                <td className="px-6 py-4 bg-zinc-800 capitalize">
                  {movie.Type}
                </td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  Year
                </th>
                <td className="px-6 py-4">{movie.Year}</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white bg-zinc-800"
                >
                  Rated
                </th>
                <td className="px-6 py-4 bg-zinc-800">{movie.Rated}</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  Released
                </th>
                <td className="px-6 py-4">{movie.Released}</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white bg-zinc-800"
                >
                  Runtime
                </th>
                <td className="px-6 py-4 bg-zinc-800">{movie.Runtime}</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  Genre
                </th>
                <td className="px-6 py-4">{movie.Genre}</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white bg-zinc-800"
                >
                  Language
                </th>
                <td className="px-6 py-4 bg-zinc-800">{movie.Language}</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="border-r border-zinc-700 px-6 py-4 font-medium whitespace-nowrap text-white "
                >
                  Country
                </th>
                <td className="px-6 py-4 ">{movie.Country}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg">{movie.Plot}</p>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `http://www.omdbapi.com/?s=naruto&apikey=${process.env.APP_KEY}`
  );
  const data = await res.json();
  const movies = data.Search;
  const paths = movies.map((movie: IMovieCard) => ({
    params: { movie: movie.imdbID },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: IParams }) {
  const propMovie = params.movie;
  const res = await fetch(
    `http://www.omdbapi.com/?i=${propMovie}&apikey=${process.env.APP_KEY}`
  );
  const movie = await res.json();

  return { props: { movie } };
}

export default MovieDetail;
