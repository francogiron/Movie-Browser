import { useHistory, Link } from 'react-router-dom';
const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory()
  const updateSearchText = (e) => {
    //with these every time you search something is gonna redirect you to the search part of the page
    history.push('/search')
    console.log(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="gotosomewhere"
                tabIndex="-1"
                aria-disabled="true"
              >
                Coming Soon 
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
              

            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
