import { Row } from "react-bootstrap";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Row>
          <header>
            <Nav />
          </header>
        </Row>
      </header>
    </div>
  );
};

export default Header;
