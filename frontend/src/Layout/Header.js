import React from "react";
import logo from "../assets/images/logo.png"
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SignOut } from "../Components/Modals";
import { profileImage } from "../actions";
import { toast } from "react-toastify";
import { Loader } from "../globalUtilities/Loader";


   
  

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.token.auth.firstName || "",
            id: this.props.token.auth._id || "",
            isLogout: false,
            redirect: false,
            loading: false,
        }
    }
    

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({ username: nextProps.token.auth.firstName })
    }

    onImageChange = async (event) => {
        const { files } = event.target;
        const url = URL.createObjectURL(files[0]);
        const imageUrl = {
            image: files[0],
            imagePreview: url,
            isImageUpload: true
        };
        const res = await profileImage(imageUrl);
        if (res && res.data && res.data.photo) {
            this.setState({
                loading: false
            }, () => {
                toast.success(`image uploaded successfully`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
        } else {
            this.setState({ loading: false }, () => {
                toast.error(`image is not uploaded!`, {
                    position: toast.POSITION.TOP_RIGHT
                })
            })
        }
    };


    signOut = () => {
        this.setState({ isLogout: false }, () => {
            localStorage.removeItem("token");
            localStorage.removeItem("total");
            localStorage.removeItem("insuranceSum");
            localStorage.removeItem("gpsSum");
            localStorage.removeItem("journeyDetails");
        })
        toast.success(`Signed out successfully`, {
            position: toast.POSITION.TOP_RIGHT
        })
        setTimeout(
            function () {
                window.location.reload();
            }, 2000);
    };

    handleCancel = () => {
        this.setState({ isLogout: false })
    };

    render() {
        const { isLogout, loading } = this.state;
        return (
            <div className="hs_navigation_header_wrapper">
                <div className="container">
                    <div className="row cus-row">
                        <div className=" col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="hs_logo_wrapper d-none d-sm-none d-xs-none d-md-block">
                                <Link to="/">
                                    <img src={logo} className="img-responsive" alt="logo" title="Logo" />
                                </Link>
                            </div>
                        </div>
                        {loading ? <Loader /> : null}
                        <SignOut isLogout={isLogout} handleCancel={this.handleCancel} signOut={this.signOut} />
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                            <nav className="hs_main_menu d-none d-sm-none d-xs-none d-md-block">
                                <ul>
                                    <li>
                                        <div className="dropdown-wrapper menu-button">
                                            <Link className="menu-button" to="/">Home</Link>
                                        </div>
                                    </li>
                                    <li> <a className="menu-button single_menu" href="/about-us">About</a></li>
                                    <li> <a className="menu-button single_menu" href="/contact-us">Contact Us</a></li>

                                    {localStorage.getItem("token")
                                        ? <li>
                                            <div className="dropdown-wrapper menu-button">
                                                <a className="menu-button" href="#" >Welcome, {this.state.username} </a>
                                                <div className="drop-menu">
                                                    <Link className="menu-button" to="/profile">Profile</Link>
                                                    <Link className="menu-button" to="/mycar">My Cars</Link>
                                                    <Link to='#' className="menu-button" onClick={() => { this.setState({ isLogout: true }) }}>Logout</Link>
                                                </div>
                                            </div>
                                        </li>
                                        : null
                                    }
                                    <li>

                                       <Link className="menu-button single_menu" to="/rent-car">
                                         //   <div><i className="fa fa-camera" aria-hidden="true" /> Rent</div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <MobileHeader />
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}
const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(Header);
