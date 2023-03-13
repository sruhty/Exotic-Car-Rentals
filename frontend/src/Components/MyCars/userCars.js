import React from "react";
import {Link} from "react-router-dom";

export const ViewAll =({rentalData,onDelete,deaActive,active,fetchBuyerDetails})=>{
    return(
        <div className="row">
            {
                rentalData && rentalData.map((value, index) => (
                    <div key={index} className="col-md-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts x_car_offer_starts_list_img float_left"><i
                                className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                                <div className="x_car_offer_img x_car_offer_img_list float_left">
                                    <img src={value.photos[0]} alt="img" width="84%"/>
                                </div>
                                <div className="x_car_offer_price x_car_offer_price_list float_left">
                                    <div className="x_car_offer_price_inner x_car_offer_price_inner_list">

                                        <h3>$ {value.rentValue}</h3>
                                        <p><span>from</span>
                                            <br/>/ day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="x_car_offer_starts_list_img_cont">
                                <div className="x_car_offer_heading x_car_offer_heading_list float_left">
                                    <h2><a href="#">{value.model}</a></h2>
                                    <p>{value.company}</p>
                                </div>
                                <div className="x_car_offer_bottom_btn x_car_offer_bottom_btn_list float_left">
                                    {value.status ==="available" ? <ul>
                                        <li>
                                            <div className="dropdown-wrapper menu-button">
                                                <a className="menu-button" href="#" style={{background:"#ec4f4f"}}>
                                                    Action
                                                </a>
                                                <div className="drop-menu">
                                                    <Link className="menu-button" to={`/editdetails/${value._id}`}>Edit</Link>
                                                    <a className="menu-button" href="#" onClick={()=>{deaActive(value._id)}}>DeActive</a>
                                                    <a className="menu-button" href="#" onClick={()=>{onDelete(value._id)}}>Delete</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    : value.status ==="sold" ? <ul>
                                            <li><a href="#" style={{background:"red"}}>Sold Out</a>
                                            </li>
                                            <li>
                                                <div className="dropdown-wrapper menu-button">
                                                    <a className="menu-button" onClick={()=>fetchBuyerDetails(value._id)} href="#" style={{background:"black"}}>
                                                       Buyer Details
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                             : <ul>
                                                <li><Link style={{background:"black"}}>Not Available</Link>
                                                </li>
                                                <li>
                                                    <div className="dropdown-wrapper menu-button">
                                                        <a className="menu-button" href="#" style={{background:"#ec4f4f"}}>
                                                            Action
                                                        </a>
                                                        <div className="drop-menu">
                                                            <Link to='#' className="menu-button" onClick={()=>{active(value._id)}}>Active</Link>
                                                            <Link to='#' className="menu-button" onClick={()=>{onDelete(value._id)}}>Delete</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                    }
                                </div>
                                <div className="x_car_offer_heading x_car_offer_heading_listing float_left">
                                    <ul>

                                        <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat} Seats</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace} Bag Space</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-shield"/> &nbsp;{value.transmission}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{value.year}</a>
                                        </li>
                                        <li>
                                            <div className="nice-select" tabIndex={0}><span className="current"><i
                                                className="fa fa-bars"/> Facilities ({value.facilities.length})</span>
                                                <ul className="list">
                                                    {
                                                        value.facilities.map((v,i)=>(
                                                            <div key={i}>
                                                                <li  className="dpopy_li">
                                                                    <a href="#">{v}</a>
                                                                </li>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};
export const ActiveCar =({rentalData})=>{
    return(
        <div className="row">
            {
                rentalData && rentalData.map((value, index) => (
                    <div key={index} className="col-md-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts x_car_offer_starts_list_img float_left"><i
                                className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                                <div className="x_car_offer_img x_car_offer_img_list float_left">
                                    <img src={value.photos[0]} alt="img" width="84%"/>
                                </div>
                                <div className="x_car_offer_price x_car_offer_price_list float_left">
                                    <div className="x_car_offer_price_inner x_car_offer_price_inner_list">

                                        <h3>$ {value.rentValue}</h3>
                                        <p><span>from</span>
                                            <br/>/ day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="x_car_offer_starts_list_img_cont">
                                <div className="x_car_offer_heading x_car_offer_heading_list float_left">
                                    <h2><a href="#">{value.model}</a></h2>
                                    <p>{value.company}</p>
                                </div>
                                <div className="x_car_offer_bottom_btn x_car_offer_bottom_btn_list float_left">
                                    <ul>
                                        <li><Link to='#' style={{background:"green"}}>Available</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="x_car_offer_heading x_car_offer_heading_listing float_left">
                                    <ul>

                                        <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat} Seats</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace} Bag Space</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-shield"/> &nbsp;{value.transmission}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{value.year}</a>
                                        </li>
                                        <li>
                                            <div className="nice-select" tabIndex={0}><span className="current"><i
                                                className="fa fa-bars"/> Facilities ({value.facilities.length})</span>
                                                <ul className="list">
                                                    {
                                                        value.facilities.map((v,i)=>(
                                                            <div key={i}>
                                                                <li  className="dpopy_li">
                                                                    <a href="#">{v}</a>
                                                                </li>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};
export const InActiveCar =({rentalData})=>{
    return(
        <div className="row">
            {
                rentalData && rentalData.map((value, index) => (
                    <div key={index} className="col-md-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts x_car_offer_starts_list_img float_left"><i
                                className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                                <div className="x_car_offer_img x_car_offer_img_list float_left">
                                    <img src={value.photos[0]} alt="img" width="84%"/>
                                </div>
                                <div className="x_car_offer_price x_car_offer_price_list float_left">
                                    <div className="x_car_offer_price_inner x_car_offer_price_inner_list">

                                        <h3>$ {value.rentValue}</h3>
                                        <p><span>from</span>
                                            <br/>/ day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="x_car_offer_starts_list_img_cont">
                                <div className="x_car_offer_heading x_car_offer_heading_list float_left">
                                    <h2><a href="#">{value.model}</a></h2>
                                    <p>{value.company}</p>
                                </div>
                                <div className="x_car_offer_bottom_btn x_car_offer_bottom_btn_list float_left">
                                    <ul>
                                        <li><Link to='#' style={{background:"red"}}>Not Available</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="x_car_offer_heading x_car_offer_heading_listing float_left">
                                    <ul>

                                        <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat} Seats</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace} Bag Space</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-shield"/> &nbsp;{value.transmission}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{value.year}</a>
                                        </li>
                                        <li>
                                            <div className="nice-select" tabIndex={0}><span className="current"><i
                                                className="fa fa-bars"/> Facilities ({value.facilities.length})</span>
                                                <ul className="list">
                                                    {
                                                        value.facilities.map((v,i)=>(
                                                            <div key={i}>
                                                                <li  className="dpopy_li">
                                                                    <a href="#">{v}</a>
                                                                </li>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};

export const SoldCar =({rentalData})=>{
    return(
        <div className="row">
            {
                rentalData && rentalData.map((value, index) => (
                    <div key={index} className="col-md-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts x_car_offer_starts_list_img float_left"><i
                                className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                                <div className="x_car_offer_img x_car_offer_img_list float_left">
                                    <img src={value.photos[0]} alt="img" width="84%"/>
                                </div>
                                <div className="x_car_offer_price x_car_offer_price_list float_left">
                                    <div className="x_car_offer_price_inner x_car_offer_price_inner_list">

                                        <h3>$ {value.rentValue}</h3>
                                        <p><span>from</span>
                                            <br/>/ day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="x_car_offer_starts_list_img_cont">
                                <div className="x_car_offer_heading x_car_offer_heading_list float_left">
                                    <h2><a href="#">{value.model}</a></h2>
                                    <p>{value.company}</p>
                                </div>
                                <div className="x_car_offer_bottom_btn x_car_offer_bottom_btn_list float_left">
                                    <ul>
                                        <li><Link to='#' style={{background:"red"}}>Sold Out</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="x_car_offer_heading x_car_offer_heading_listing float_left">
                                    <ul>

                                        <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat} Seats</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace} Bag Space</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-shield"/> &nbsp;{value.transmission}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{value.year}</a>
                                        </li>
                                        <li>
                                            <div className="nice-select" tabIndex={0}><span className="current"><i
                                                className="fa fa-bars"/> Facilities ({value.facilities.length})</span>
                                                <ul className="list">
                                                    {
                                                        value.facilities.map((v,i)=>(
                                                            <div key={i}>
                                                                <li  className="dpopy_li">
                                                                    <a href="#">{v}</a>
                                                                </li>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
};
