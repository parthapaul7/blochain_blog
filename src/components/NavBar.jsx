import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-12 bg-[#396EB0] flex items-center w-[100vw] fixed z-10 text-white">
      <div className="m-5 font-bold text-xl">BlockChaninBlog.com</div>
      <div className="ml-auto flex space-x-8 mr-10">
        <div><Link to="/" className="text-white capitalize decoration-transparent">HOME</Link></div>
        <div><Link to ="/calc" className="text-white capitalize decoration-transparent">CALCULATE</Link></div>
        <div><Link to ="/charts" className="text-white capitalize decoration-transparent">CHARTS</Link></div>
      </div>
    </nav>
  );
};

export default NavBar;
