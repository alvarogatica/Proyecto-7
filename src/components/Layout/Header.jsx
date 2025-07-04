import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-green-600">
      <nav className="flex justify-between mx-8 py-4">
        <ul className="flex items-center">
          <li className="hidden ml-10 text-neutral-50 md:block">
            <Link to="/purses" className="font-medium">
            Menu
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
