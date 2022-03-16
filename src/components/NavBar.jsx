const NavBar = () => {
  return (
    <nav className="h-12 bg-yellow-400 flex items-center w-[100vw] fixed z-10">
      <div className="m-5">BlockChaninBlog.com</div>
      <div className="ml-auto flex space-x-5 mr-5">
        <div>HOME</div>
        <div>CALCULATE</div>
        <div>CHARTS</div>
      </div>
    </nav>
  );
};

export default NavBar;
