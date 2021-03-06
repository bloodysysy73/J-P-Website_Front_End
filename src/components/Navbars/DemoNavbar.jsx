import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import GoolgeAuth from "components/authentification/GoolgeAuth";
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  // InputGroup,
  // InputGroupText,
  // InputGroupAddon,
  // Input
} from "reactstrap";

import routes from "routes.js";
import LoginEmailForm from "components/authentification/LoginEmailForm";
import MyButton from "components/other/MyButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand() {
    let brandName = "Jumeaux & Plus";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  render() {
    return (
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
            (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <NotificationContainer />

        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            {/* <form>
              <InputGroup className="no-border">
                <Input placeholder="Search..." />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </form> */}
            <Nav navbar>
              {/* <NavItem>
                <Link to="#pablo" className="nav-link btn-magnify">
                  <i className="nc-icon nc-layout-11" />
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </Link>
              </NavItem> */}
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  {this.props.render ? "" : ""}
                  {this.props.pseudo2 ? this.props.pseudo2 : this.props.pseudo ? this.props.pseudo : ((localStorage.getItem("pseudo") ? localStorage.getItem("pseudo") : (this.props.login ? this.props.login : (localStorage.getItem("login") ? localStorage.getItem("login") : "Connexion"))))}
                  <i className="nc-icon nc-button-power" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Connexion</DropdownItem>
                  {localStorage.getItem("isSignedInEmail") === "true" ? null : (
                    <DropdownItem  >
                      <GoolgeAuth ></GoolgeAuth>
                    </DropdownItem>
                  )}
                  <DropdownItem divider />

                  {(localStorage.getItem("isSignedIn") !== "true") &
                    (localStorage.getItem("isSignedInEmail") !== "true") ? (
                      <DropdownItem toggle={false} >
                        <LoginEmailForm ></LoginEmailForm>
                      </DropdownItem>
                    ) : null}
                  <DropdownItem divider />
                  {(localStorage.getItem("isSignedIn") !== "true") &
                    (localStorage.getItem("isSignedInEmail") !== "true") ? (
                      <DropdownItem header>inscription</DropdownItem>
                    ) : null}
                  {(localStorage.getItem("isSignedIn") !== "true") &
                    (localStorage.getItem("isSignedInEmail") !== "true") ? (
                      <DropdownItem>
                        <div className="right floated content">
                          <div className="ui buttons">
                            <Link to="/admin/signupform/" className="ui button">inscription</Link>
                          </div>
                        </div>
                      </DropdownItem>
                    ) : null}
                  {(localStorage.getItem("isSignedIn") !== "true") &
                    (localStorage.getItem("isSignedInEmail") === "true") ? (
                      <DropdownItem >
                        <MyButton></MyButton>
                      </DropdownItem>
                    ) : null}
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}


const mapStateToProps = state => {
  return {
    pseudo: state.auth.pseudo,
    pseudo2: (state.utilisateurs ? (state.utilisateurs.utilisateur ? state.utilisateurs.utilisateur.pseudo : null) : null),
    login: state.auth.login,
    render: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps,
  {}
)(Header)