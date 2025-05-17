
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
        <nav className="container mx-auto max-w-5xl px-4 py-2 bg-lime-400 rounded-full m-2 ">
          <ul className="flex justify-around items-center">
            <li>
              <Link className='font-bold' to="/">Home</Link>
            </li>
            <li>
              <Link className='font-bold' to="/oldWay">Old Way</Link>
            </li>
            <li>
              <Link className='font-bold' to="/tanstack">Tanstack</Link>
            </li>
          </ul>
        </nav>
    </section>
  )
}

export default Navbar
