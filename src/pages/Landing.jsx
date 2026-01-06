import { useNavigate } from "react-router-dom";
import {
  FaLaptop,
  FaBook,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaLaptop size={40} />,
      title: "Online Learning",
      description: "Access high-quality courses from anywhere in the world.",
      color: "#060b51",
    },
    {
      icon: <FaBook size={40} />,
      title: "Wide Course Selection",
      description:
        "Choose from a variety of programs to suit your career goals.",
      color: "#797d84",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "Expert Instructors",
      description: "Learn from experienced educators in each field.",
      color: "#f5be0a",
    },
    {
      icon: <FaGraduationCap size={40} />,
      title: "Flexible Graduation",
      description: "Complete your programs at your own pace with full support.",
      color: "#060b51",
    },
  ];

  return (
    <div className="div-landing">
      {/* Hero Section */}
      <section className="landing">
        <div className="hero-container">
          <img src="/premier-logoo.jpg" alt="" />
          <h1>
            Welcome to Premier <span className="gold">College</span>
          </h1>
          <h3>
            Unlock Your Future with Flexible, High-Quality Online Education
          </h3>
          <p>
            Join our online college and take control of your learning journey
            from anywhere in the world.
          </p>
          <div className="button-group">
            <button
              className="btn get-started"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
            <button className="btn apply-now">Apply Now</button>
          </div>
        </div>
      </section>

      {/* Statistics / Achievements Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>1,200+</h3>
          <p>Enrolled Students</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>Available Courses</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Graduation Rate</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Online Access</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Premier College gave me the flexibility I needed to complete my
              degree."
            </p>
            <h4>- Sarah T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The instructors are so knowledgeable and supportive."</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the online courses and the interactive content."</p>
            <h4>- Amina K.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <button className="btn get-started" onClick={() => navigate("/signup")}>
          Get Started Today
        </button>
      </section>
    </div>
  );
}

export default Landing;
