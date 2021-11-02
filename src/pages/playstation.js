import React, { useEffect, useContext } from 'react';
import TopGif from "../components/top-gif";
import TopService from "../components/top-service";
import Header from "../components/Header";
import Footer from '../components/footer';
import ProductDisplay from '../components/productImages';
import ProductRowHead from '../components/productRowHeader';
import ProductRowContent2 from '../components/productRowContent2';
import ProductRowContent from '../components/productRowContent';
import ProductRowApi from '../components/productRowApi';
import { GlobalState } from "../context/store";


function PlayStation() {
    let store = useContext(GlobalState);
    let [products, setProducts] = store.myProducts;


    useEffect(() => {
        let url = "http://206.189.124.254:9000/products"
        fetch(url)
            .then(e => e.json())
            .then((res) => {
                setProducts(res)
            });
    }, [])


    return (
        <div>
            <div>
                <TopGif />
                <TopService />
                <Header />
            </div>

            <div className="playstation-bg" style={{ 'paddingBottom': '80px' }}>
                <div className="width margin center">
                    <p id="pshead">Home > PLAYERversary List > Gaming > Playstation</p>
                    <div>
                        <div id="whitebg">
                            <ProductRowHead
                                hcent="hcent"
                                rowTitle="PLAYERversary"
                            />
                            <div className="grid1">
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/playerversary/board-games_184x184.jpg"
                                    productname="board games"
                                />
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/playerversary/card-games_184x184.jpg"
                                    productname="card games"
                                />
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/playerversary/playstation_184x184.jpg"
                                    productname="playstation"
                                />
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/playerversary/xbox_184x184v2.jpg"
                                    productname="XBOX"
                                />
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/playerversary/other-systems_184x184.jpg"
                                    productname="other systems"
                                />
                                <ProductDisplay
                                    id="productDisplayName"
                                    imageSize="imageSizePS"
                                    src="https://ng.jumia.is/cms/0-6-anniversary/2021/0-userneeds/jumia-anniversary_184x184.jpg"
                                    productname="jumia anniversary"
                                />
                            </div>
                        </div>

                        <div className="productSection flex" >
                            <div className="productCategory1" id="whitebg" style={{ 'height': 'max-content' }}>
                                <div className="productCategory2">
                                    <h3>category</h3>
                                    <p>gaming</p>
                                    <ul>
                                        <h4>playstation</h4>
                                        <li>PlayStation 3</li>
                                        <li>PlayStation 4</li>
                                        <li>PlayStation 5</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="productCategory2">
                                    <h3>brand</h3>
                                    <div className='flex'>
                                        <img src="" alt="" />
                                        <input type="text" placeholder="Search" />
                                    </div>
                                    <div>
                                        <input type="checkbox" id="check1" />
                                        <label for="check1">2K Games</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="check2" />
                                        <label for="check2">505 Games</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="check3" />
                                        <label for="check3">Activision</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="check4" />
                                        <label for="check4">Bandai Namco</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="check5" />
                                        <label for="check5">Bethesda</label>
                                    </div>
                                </div>
                                <hr />

                                <div className="productCategory2">
                                    <div className="flex space-btw">
                                        <h3>price</h3>
                                        <h3 id="apply">apply</h3>
                                    </div>
                                    <input type="range" min="0" max="100" />
                                    <div className="flex jcc align">
                                        <input type="number" value="1300" />
                                        <p style={{ 'fontSize': '30px', 'textAlign': 'center' }}>-</p>
                                        <input type="number" value="36000" />
                                    </div>
                                </div>
                                <hr />

                                <div className="productCategory2">
                                    <h3>seller score</h3>
                                    <div>
                                        <input type="radio" id="score1" name="score" />
                                        <label for="score1">80% or more</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="score2" name="score" />
                                        <label for="score2">60% or more</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="score3" name="score" />
                                        <label for="score3">60% or more</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="score4" name="score" />
                                        <label for="score4">20% or more</label>
                                    </div>
                                </div>
                                <hr />

                                <div className="productCategory2">
                                    <h3>shipped from</h3>
                                    <div>
                                        <input type="checkbox" id="ship1" />
                                        <label for="ship1" style={{ 'background': 'blue', 'color': 'white', 'fontWeight': '700' }}>Shipped from abroad</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="ship2" />
                                        <label for="ship2">Shipped from Nigeria</label>
                                    </div>
                                </div>

                            </div>


                            <div id="whitebg">
                                <div style={{ 'width': '163%', 'marginTop': '-20px' }}>
                                    <ProductRowHead
                                        rowTitle="PLAYERversary"
                                        bg="whitebg"
                                        see="Sort By:Popularity"
                                    />
                                    <div className="grid1">
                                        {products.map((e) => {
                                            if (e.category === "PSony") {
                                                return (
                                                    <ProductRowApi
                                                        key={e._id}
                                                        image={e.image}
                                                        name={e.name}
                                                        price={e.price}
                                                        discount="12,000"
                                                    />
                                                );
                                            }
                                        }
                                        )}




                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/118636/1.jpg?0784"
                                            productname="MOVFA 20000 MAH Fast Charging Dual USB Portable Power Banks"
                                            price="4,490"
                                            discount="6,500"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/586524/1.jpg?3158"
                                            productname="Andrea Fastest Hair & Beard Growth Essence - 20 Ml"
                                            price="800"
                                            discount="1,275"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/882627/1.jpg?3925"
                                            productname="V9 Earhook BT Headset Noise Cancelling Single Ear"
                                            price="1,950"
                                            discount="3,824"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/711863/1.jpg?1881"
                                            productname="F9-8 True Wireless Bluetooth 5.0 Headphones Hifi Stereo Noise Cancelling Headsets"
                                            price="3,650"
                                            discount="6,471"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/942417/1.jpg?8251"
                                            productname="Oraimo Pilot 20000mAh 2.1A Fast Charging Power Bank"
                                            price="8,000"
                                            discount="12,800"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/940507/1.jpg?7433"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/934634/1.jpg?9449"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/631054/1.jpg?9946"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/050507/1.jpg?7429"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/860863/1.jpg?6998"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/942446/1.jpg?7824"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/095395/1.jpg?8375"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/686076/1.jpg?8109"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/166054/1.jpg?3429"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/27/062696/1.jpg?4588"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/166054/1.jpg?3429"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/686076/1.jpg?1958"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/881086/1.jpg?0372"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/095395/1.jpg?8375"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                        <ProductRowContent2
                                            src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/221652/1.jpg?0117"
                                            productname="3Days Active Permanent Unisex Pink Lip Magic Cream"
                                            price="1,100"
                                            discount="2,100"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/*Recently Viewed */}
                        <div>
                            <ProductRowHead
                                rowTitle="recently viewed"
                                see="see all"
                                bg="whitebg"
                            />
                            <div className="grid1">
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/925814/1.jpg?6010"
                                    productname="Summer Short Sleeve Linen Vintage Shirts"
                                    price="7,379"
                                    discount="36,895"
                                />
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/925814/1.jpg?6010"
                                    productname="Summer Short Sleeve Linen Vintage Shirts"
                                    price="7,379"
                                    discount="36,895"
                                />
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/140346/1.jpg?8473"
                                    productname="Summer Vintage Cotton Linen Shirt Short Sleeves - Grey"
                                    price="1,137"
                                    discount="2,185"
                                />
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/21/448983/1.jpg?2523"
                                    productname="Summer Short Sleeve Linen Vintage Shirts-White"
                                    price="6,290"
                                    discount="7,250"
                                />
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/64/285925/1.jpg?2329"
                                    productname="Cotton And Linen New Men's Linen 2 Piece Sets Short Sleeve Summer Brand Vintage V Neck Linen Suits For Men (T-shirt+shorts) A24(#White)"
                                    price="14,107"
                                    discount="17,633"
                                />
                                <ProductRowContent
                                    src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/925814/1.jpg?6010"
                                    productname="Summer Short Sleeve Linen Vintage Shirts"
                                    price="7,379"
                                    discount="36,895"
                                />
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

export default PlayStation;