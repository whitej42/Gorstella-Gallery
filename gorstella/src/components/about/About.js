import './About.css';
import Exhibition from '../../components/exhibition/Exhibition';

function About() {
  return (
    <div className="about">
      <h4>Welcome to the <span>Gorstella Gallery</span></h4>
      <p>
        Gorstella Gallery is an art gallery based outside Chester in the charming village of Dodleston. 
        Founded in 1990 the gallery specialises in the work of Matthew Snowden and Donald McIntyre
      </p>
      <Exhibition />
    </div>
  );
}

export default About;