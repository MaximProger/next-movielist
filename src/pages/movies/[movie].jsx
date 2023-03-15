import Image from "next/image"
import Head from "next/head"

const MovieDetail = ({movie}) => {
  console.log(movie);
  return (
    <>
    <Head>
      <title>{movie.Title}</title>
      <meta name="description" content={movie.Plot} />
    </Head>
    <Image src={movie.Poster} width={200} height={200} alt={movie.Title} />
    <div className="text-white">
    <h1>{movie.Title}</h1>
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Type
                    </th>
                    <td className="px-6 py-4 capitalize">
                      {movie.Type}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Year
                    </th>
                    <td className="px-6 py-4">
                      {movie.Year}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Rated
                    </th>
                    <td className="px-6 py-4">
                      {movie.Rated}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Released
                    </th>
                    <td className="px-6 py-4">
                      {movie.Released}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Runtime
                    </th>
                    <td className="px-6 py-4">
                      {movie.Runtime}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Genre
                    </th>
                    <td className="px-6 py-4">
                      {movie.Genre}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Language
                    </th>
                    <td className="px-6 py-4">
                      {movie.Language}
                    </td>
                </tr>
                <tr className="border-b border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white bg-gray-800">
                      Country
                    </th>
                    <td className="px-6 py-4">
                      {movie.Country}
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
      <p>{movie.Plot}</p>
    </div>
    
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://www.omdbapi.com/?s=naruto&apikey=${process.env.APP_KEY}`)
  const data = await res.json()
  const paths = data.Search.map((movie) => ({ params: { movie: movie.imdbID, }, }))

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const propMovie = params.movie
  const res = await fetch(`http://www.omdbapi.com/?i=${propMovie}&apikey=${process.env.APP_KEY}`)
  const movie = await res.json()

  return { props: { movie } }
}

export default MovieDetail