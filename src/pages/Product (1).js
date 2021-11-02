import React, { useContext } from 'react';
import TopGif from "../components/top-gif";
import TopService from "../components/top-service";
import Header from "../components/Header";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import { GlobalState } from "../context/store";

function SingleProduct() {
    let store = useContext(GlobalState);
    let [prodname, setProdName] = store.showProd;
    let [price, setPrice] = store.myPrice;
    let [image, setImage] = store.myImage;

    let addd = () => {
        setImage(image);
        setProdName(prodname);
        setPrice(price);
    }

    return (
        <div>
            <div>
                <TopGif />
                <TopService />
                <Header />
            </div>

            <div className="playstation-bg" style={{ 'paddingBottom': '80px', 'marginTop': '40px' }}>
                <div className="center width">
                    <p style={{ 'paddingBottom': '15px', 'paddingTop': '15px' }}>Home &#62; Gaming &#62; Playstation &#62; PlayStation4 &#62; PS4 Controllers &#62; PS4 Controller Pad Playstation Dualshock 4</p>
                    <div className="flex">
                        <div className="productLeft flex" id="whitebg">
                            <img src={image} alt="" />
                            <div className="productLeft1">
                                <h6>{prodname}</h6>
                                <p> Brand: Sony | Similar products from Sony</p>
                                <p>(97 ratings)</p>
                                <img src="https://ng.jumia.is/badges/ja21/8/138x18.png?3822" alt="" />
                                <hr />
                                <h3><b>{'\u20A6'} {price}</b></h3>
                                <small><p>+ shipping from ₦ 180 to LEKKI-AJAH (SANGOTEDO)</p></small>
                                <Link to="/filledcart">
                                    <button onClick={() => { addd() }}>ADD TO CART</button>
                                </Link>
                                <hr />
                                <div className="promotions">
                                    <h5>PROMOTIONS</h5>
                                    <p>Get Free Delivery on your next order with Jumia Prime</p>
                                    <p>Enjoy cheaper shipping fees when you select a PickUp Station at checkout</p>
                                    <p>Borrow loans up to N100,000 to make everyday life easier. No collateral, no <br /> paperwork via JumiaPay financial partners.</p>
                                </div>
                            </div>
                        </div>

                        <div className="productRight">
                            <div className="productRight1" id="whitebg">
                                <h5>DELIVERY & RETURNS</h5>
                                <hr />
                                <label><b>Choose your location</b></label>
                                <br />
                                <select>
                                    <option>Lagos</option>
                                    <option>Abuja</option>
                                    <option>Rivers</option>
                                    <option>Kano</option>
                                    <option>Kaduna</option>
                                    <option>Kwara</option>
                                    <option>Ogun</option>
                                </select>
                                <br />
                                <select>
                                    <option>LEKKI-AJAH (SANGOTEDO)</option>
                                    <option>IKEJA</option>
                                    <option>MILE 2</option>
                                    <option>LAKOWE</option>
                                    <option>OGBA</option>
                                    <option>MUSHIN</option>
                                    <option>VGC</option>
                                </select>
                                <div>
                                    <h6>Door Delivery</h6>
                                    <p>Shipping {'\u20A6'} 450</p>
                                    <p>Ready for delivery between 15 July & 20 July when you order within next 34mins</p>
                                </div>
                                <div>
                                    <h6>PickUp Station</h6>
                                    <p>Shipping {'\u20A6'} 180 </p>
                                    <p>Ready for pickup between 15 July & 20 July when you order within next 34mins</p>
                                </div>
                                <div>
                                    <h6>Return Policy</h6>
                                    <p>Free return within 15 days for Jumia Mall items and 7 days for other eligible items.</p>
                                </div>
                            </div>

                            <div className="productRight1" id="whitebg">
                                <h5>SELLER INFORMATION</h5>
                                <hr />
                                <p><b>oasis limited</b></p>
                                <p><b>100%</b> Seller Score</p>
                                <p><b>147</b> Followers</p>
                                <hr />
                                <h6>Seller Performance</h6>
                                <p>Order Fulfillment Rate: <b>Excellent</b></p>
                                <p>Quality Score: <b>Excellent</b></p>
                            </div>

                            <div className="productRight1" id="whitebg">
                                <h6>Have one to sell?</h6>
                                <p>Click here to list your product</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>

    );
}

export default SingleProduct;