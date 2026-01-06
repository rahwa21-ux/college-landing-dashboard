import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <img src="/premier-logo.jpg" alt="Premier College Logo" />

        {/* Hamburger button */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation links */}
        <nav className={menuOpen ? "nav-open" : ""}>
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Programs</Link>
          <Link to="/">Admission</Link>
          <Link to="/">How it Works</Link>
          <Link to="/">News & Events</Link>
          <Link to="/">Contact us</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>
    </section>
  );
}

export default Header;
