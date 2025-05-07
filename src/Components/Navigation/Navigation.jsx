import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="../../public/images/Frame 2 1.png" alt="" />
      </div>
      <ul className="links">
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
};
export default Navigation;
