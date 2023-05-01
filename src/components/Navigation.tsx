import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-400 text-yellow-50">
        <h3 className="font-extrabold text-gray-800">GitHub Search</h3>
        <span>
          <Link className="mr-10" to="/">
            Home
          </Link>
          <Link to="/favorites">Favorite Pages</Link>
        </span>
      </nav>
    </>
  )
}

export default Navigation
