import styles from "./Footer.module.css"
import {FaTiktok, FaInstagram,  FaFacebookSquare, FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Contate-nos: 
        generabank@genera.com | 
        (19) 3805-1653 |
        <FaInstagram /> 
        <FaFacebookSquare />
        <FaTwitter />
        <FaLinkedin />
        <FaTiktok />
        <FaYoutube />
        </h3>
      <p>Genera Bank &copy; 2022</p>
    </footer>
  );
};

export default Footer;