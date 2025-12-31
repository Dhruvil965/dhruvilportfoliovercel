import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Work", link: "#work" },
    { label: "Reviews", link: "#reviews" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={` flex items-center justify-center gap-10 text-white ${
        navOpen ? "active" : ""
      }`}
    >
      {navItems.map(({ label, link }, index) => (
        <a
          key={index}
          href={link}
          className="text-lg md:text-xl font-medium opacity-90 hover:opacity-100 hover:text-blue-400 transition"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
