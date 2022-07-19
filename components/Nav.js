import Link from 'next/link'
import Styles from "../styles/test.module.scss"
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" >Github Template</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" ><a className={Styles.links}>Home</a></Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Nav
