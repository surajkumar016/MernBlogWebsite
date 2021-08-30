import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur abcd efghij klmnop qrstuvw
          xyzab cdef ghijkl . mnoLore st u vwx y z01 2 34567 890.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
            
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-github"></i>
        </div>
      </div>
    </div>
  );
}
