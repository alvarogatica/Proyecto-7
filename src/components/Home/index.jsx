import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <main className="text-center px-4 mt-24 mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-900">
          urdupes.cl
        </h1>
        <P className="mt-3 mx-auto text-gray-500">
          Tu tienda de accesorios femeninos
        </P>
        <section className="mt-16 mx-auto max-w-md">
          <article>
            <Link to="/purses" className="btn-product">
              
            </Link>
          </article>
        </section>
      </main>
    </>
  )
}

export default Home
