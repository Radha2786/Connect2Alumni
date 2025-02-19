import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
// import SearchInput from "../Form/SearchInput";
// import useCategory from "../../hooks/useCategory";
// import { useCart } from "../../context/cart";
// import { Badge } from "antd";

// import './headers.css'
const Header = () => {
  const [auth, setAuth] = useAuth();
  // const [cart] = useCart();
  // const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Sucessfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="text-capitalize collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <img
              style={{ width: "5%", padding: "5px" }}
              src="https://cdn-icons-png.flaticon.com/512/9888/9888728.png"
              alt="logo.png"
            />
            <Link to="/" className="fs-2 navbar-brand">
              &nbsp;Connect2Alumni
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/all-blog" className="nav-link ">
                  Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link ">
                  Contact
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    {/* <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink> 
                  </li> */}
                </>
              ) : (
                <>
                  <li>
                    {/* <Button LinkComponent={Link} to="/create-blog"> */}
                    <NavLink to="/create-blog" className="nav-link">
                      Create Post
                    </NavLink>
                    {/* </Button> */}
                  </li>
                  <li>
                    {/* <Button LinkComponent={Link} to="/my-blogs"> */}
                    <NavLink to="/my-blogs" className="nav-link">
                      My Posts
                    </NavLink>
                    {/* </Button> */}
                  </li>
                  <li className="nav-item">
                    <NavLink to="/userprofile" className="nav-link">
                      My Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="nav-link"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <header id="header" className="fixed-top">
  <div className="container d-flex align-items-center justify-content-sm-between">
    <nav id="navbar" className="navbar">
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" > Community Engage</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
              </li>
                <li><NavLink to="/about" className="nav-link scrollto" >About</NavLink ></li>
                <li><NavLink  to="/services" className="nav-link scrollto">Services</NavLink ></li>
                <li><NavLink to="/team" className="nav-link scrollto" >Team</NavLink ></li>
                <li><NavLink to="/contact" className="nav-link scrollto" href="#contact">Contact</NavLink ></li>

              {
                !auth.user ? (<> <li className="nav-item"> <NavLink to="/register" className="nav-link" >Register</NavLink></li>
              <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li></>) : 
              (<><li className="nav-item"><NavLink onClick={handleLogout} to="/login" className="nav-link">Logout</NavLink></li></>)
              }
            </ul>
          </div> 
    </nav>
    
  </div>
</header> */}

      {/* 
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🛒 Ecommerce App
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <Badge count={cart?.length} showZero offset={[10, -5]}>
                    Cart
                  </Badge>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
