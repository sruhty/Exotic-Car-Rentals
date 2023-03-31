import React,{useState} from "react";
import {FormText} from "reactstrap";
import DropdownList from "react-widgets/lib/DropdownList";
import { Location } from "../../../globalUtilities/CONST";
import { StripeProvider } from 'react-stripe-elements';
import StripeForm from "./StripeForm";


const BuyerRegister = ({ onChange, error }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    }
    return (
        <form className="billing-form">
            <ul className="list-unstyled row">
                <li className="col-md-6">
                    <label>First Name *
                        <input type="text" name="firstName" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.firstName}</p>
                </li>
                <li className="col-md-6">
                    <label>Last Name *
                        <input type="text" name="lastName" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.lastName}</p>
                </li>
                <li className="col-md-6">
                    <label>Email Address *
                        <input type="text" name="email" onChange={onChange} placeholder className="form-control"/>
                        <p style={{color:"red"}}>{error.email}</p>
                    </label>
                </li>
                <li className="col-md-6">
                    <label>Phone
                        <input type="number" name="mobile" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.mobile}</p>
                </li>
                <li className="col-md-6">
                    <label>Driver's Lisence ID
                        <input type="text" name="drivingLicenceNumber" onChange={onChange} placeholder
                               className="form-control"/>
                    </label>
                    <FormText color="muted">
                        For Ex. CTxx 234xxxxxxxx
                    </FormText>
                    <p style={{color:"red"}}>{error.drivingLicenceNumber}</p>
                </li>
                <li className="col-md-6">
                    <label>Province</label>
                    <DropdownList
                        onChange={(e) => onChange(e, "state")}
                        placeholder="Select"
                        data={[
                            'Ontario'
                        ]}
                    />
                    <p style={{color:"red"}}>{error.state}</p>
                </li>
                <li className="col-md-6">
                    <label>City/town</label>
                    <DropdownList
                        onChange={(e) => onChange(e, "city")}
                        placeholder="Select"
                        data={Location}
                    />
                    <p style={{color:"red"}}>{error.city}</p>
                </li>
                <li className="col-md-12">
                    <label>Street Address
                        <input type="text" name="address" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.address}</p>
                </li>
                <li className="col-md-12">
                    <label>Additional information</label>
                    <textarea name="additionalInfo" onChange={onChange}
                              placeholder="Notes about your order, e.g. special notes for car." className="form-control"
                              defaultValue={""}/>
                    <p style={{color:"red"}}>{error.additionalInfo}</p>
                </li>
            </ul>
            <hr/>
            <div className="payme-opton">
                <div className="heading-block text-left margin-bottom-30">
                    <h4>Payment</h4>
                </div>
                <div className="radio">
                    <input type="radio" name="ratio" id="poa" defaultValue="option1" defaultChecked/>
                    <label htmlFor="poa">Payment on Arrival</label>
                </div>
                <div className="radio">
                    <input type="radio" name="ratio" id="paypal" defaultValue="option1"/>
                    <label htmlFor="paypal">Paypal</label>
                </div>
                <div className="radio">
                    
                    <label> <input type="radio" value="stripe" checked={this.state.selectedOption === 'stripe'} onChange={this.handleOptionChange} />Stripe</label>
                    <StripeProvider apiKey="pk_test_51MkeOLDvoYKK7OyOexgRcD7MhFBkJlthasbheNfDXtYyEDAhodHFJCyVlSUoVUFirEc111MKufywKy2IlWzzZKEi00g8GPR0XN">
                    {this.state.selectedOption === 'stripe' && <StripeForm/>}
                    </StripeProvider>
                    
                </div>
            </div>
            <hr/>
            {
                localStorage.getItem("token")
                    ? null
                    : <div className="checkbox car_checkout_chekbox car_checkout_chekbox1">
                        <input type="checkbox" id="c2" name="cb"/>
                        <label htmlFor="c2">Create an Account?</label>
                    </div>
            }

            <div className="checkbox car_checkout_chekbox">
                <input type="checkbox" id="c3" name="cb"/>
                <label htmlFor="c3">I have Read and Accept Terms &amp; Conditions *</label>
            </div>
        </form>
    )
}
export default BuyerRegister