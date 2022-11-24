import { Link } from "react-router-dom";
import "../assets/logo.css";

const Logo = () => {
  return (
    <Link to="/" style={{textDecoration:'none',color:'black'}}>
      <div className="logo">
        <span className="span1">{"< "}</span>
        <span className="span2">A</span>
        <span className="span3">A</span>
        <span className="span4">A</span>
        <span className="span5">H</span>
        <span className="span6">{" />"}</span>
      </div>
    </Link>
  );
};

export default Logo;
