import React from 'react';
import "../components-css/Home.css";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Product from './Product';
import SingleProduct from './SingleProduct';
import SignInHome from './SignInHome';
import elements1 from "../MediaElements1";
import elements2 from "../MediaElements2";
import elements3 from "../MediaElements3";
import MediaElement1 from './MediaElement1';
import MediaElement2 from './MediaElement2';
import Personalized from './Personalized';
import Footer1 from './Footer1';
import Footer2 from './Footer2';

function showElements1(Element) {
  return (
    <MediaElement1
      key={Element.id}
      image={Element.image}
      offer={Element.offer}
      // deal={Element.deal}
    />
  );
}

function showElements2(Element) {
  return (
    <MediaElement2
      key={Element.id}
      image={Element.image}
      // offer={Element.offer}
      // deal={Element.deal}
    />
  );
}

function showElements3(Element) {
  return (
    <MediaElement2
      key={Element.id}
      image={Element.image}
      // offer={Element.offer}
      // deal={Element.deal}
    />
  );
}

function ScrollToTop(){
  // const ScrollBtn= document.getElementById("back-to-top-btn");
  document.documentElement.scrollTop= 0;
  // ScrollBtn.addEventListener('click', () => {
  //   document.documentElement.scrollTop= 0;
  // });
}

function Home() {
  return (
    <div className='home'>

        <div className="home-carousel">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/August/GW/Cycles_25th/3000x1200._CB611828729_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Aug/Apay/GW-PC-Deals-Unrec-3000._CB629506848_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/Aug/ATF/Refresh/EOSS-GW-PC-Bunk._CB611817168_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/Aug/ATF/EOSS-GW-PC-Bunk._CB630308543_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/SYED/Flight_PC_Hero_3000x1200_April._CB629259728_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/HSS/Aug/new/HSS_3000x1200-2._CB630013437_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_Hero_Xbiz2022/BrowniePC2xBlutoothvoice._CB632422863_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/April-22/DesktopTallhero_3000x1200_2._CB623843558_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61UmgwTHYvL._SX3000_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Shamshera/3000x1200_Hero-Tall_NP._CB630120097_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Audio/Unrec-Heroz/Mi_Tallhero_3000x1200._CB629723346_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
              <div className="carousel-item">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/August/Unrechero/D54814207_WLA_GW_Hero_Unrec_August23rd_DesktopTallHero_3000x1200._CB611585788_.jpg" className="d-block w-100 carousel-img" alt="..." />
                {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg" className="d-block w-100 carousel-img" alt="..." /> */}
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span aria-hidden="true"><ArrowBackIosIcon className='carousel-control-prev-icon backward'/></span>
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span aria-hidden="true"><ArrowForwardIosIcon className='carousel-control-next-icon forward'/></span>
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="home-row primary">
          <Product 
            title="Shop & Pay | Earn rewards daily"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg"
            title1="Claim your scratch cards"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg"
            title2="Redeem your collected rewards"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_WinMore._SY116_CB627364845_.jpg"
            title3="Unlock more rewards when you pay or shop"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay_Rewards/Rewards0.5x._SY116_CB633810016_.jpg"
            title4="Explore all offers in one place"
            see="See more"
          />
          <Product 
            title="Automotive essentials | Up to 60% off"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
            title1="Cleaning accessories"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
            title2="Tyre & rim care"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
            title3="Helmets"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
            title4="Vacuum cleaner"
            see="See more"
          />
          <SingleProduct 
            title="Up to 70% off | Clearance store"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
            see="See more"
          />
          <div className="last-column">
            <SignInHome c/>
            <img className='laptops' src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" />
          </div>
        </div>

        <div className="home-row secondary">
          <Product 
            title="Up to 60% off | Styles for Men"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
            title1="Clothing"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
            title2="Footwear"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
            title3="Watches"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
            title4="Bags and luggage"
            see="See all offers"
            />
          <Product 
            title="Shop by Category"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY116_CB431401553_.jpg"
            title1="Fresh"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY116_CB431401553_.jpg"
            title2="Mobiles"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY116_CB431401553_.jpg"
            title3="Fashion"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY116_CB431401553_.jpg"
            title4="Electronics"
            see="See more"
            />
          <Product 
            title="Up to 60% off | Styles for Women"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
            title1="Women's Clothing"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
            title2="Footwear+Handbags"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
            title3="Watches"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
            title4="Fashion jewellery"
            see="See all offers"
            />
          <Product 
            title="Top picks for your home"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
            title1="ACs"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
            title2="Refrigirators"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
            title3="Microwaves"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
            title4="Washing machines"
            see="See more"
            />
        </div>

        <div className="media-scroller height1">
          <div className="head">
            <h5 className='heading'>Today's Deals</h5>
            <span className='more'>See all deals</span>
          </div>
          <div className="media-elements">
            {elements1.map(showElements1)}
          </div>
        </div>

        <div className="media-scroller height2">
          <div className="head">
            <h5 className='heading'>Up to 45% off | Handpicked furniture collection from local shops</h5>
            <span className='more'>See all deals</span>
          </div>
          <div className="media-elements">
            {elements2.map(showElements2)}
          </div>
        </div>

        <div className="home-row secondary">
          <SingleProduct 
            title="Start Selling on Amazon"
            img="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/Option4_379x304._SY304_CB629577209_.jpg"
            see="Register now"
          />
          <Product 
            title="Cookware & dining"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            title1="Gas stoves"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
            title2="Cookware"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
            title3="Kitchen storage"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
            title4="Tableware"
            see="See more"
          />
          <Product 
            title="Everything for the newborn & expecting mothers"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Must_have_baby_products._SY116_CB667649772_.jpg"
            title1="Must have baby products"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Baby_wishlist._SY116_CB667649772_.jpg"
            title2="Baby wishlist"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Shopping_for_Expecting_mothers._SY116_CB667649772_.jpg"
            title3="Shopping for Expecting mothers"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Explore_more2._SY116_CB667648327_.jpg"
            title4="Explore more"
            see="See more"
          />
          <Product 
            title="Electronics devices for home office"
            img1="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
            title1="Smartwatches & fitness trackers"
            img2="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
            title2="Tablets"
            img3="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
            title3="Laptops"
            img4="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
            title4="Monitors"
            see="See more"
          />
        </div>

        <div className="media-scroller height2">
          <div className="head">
            <h5 className='heading'>Up to 40% off | Refurbished activity trackers</h5>
            <span className='more'>See all deals</span>
          </div>
          <div className="media-elements">
            {elements3.map(showElements3)}
          </div>
        </div>

        <div className="personalized">
          <Personalized />
        </div>

        <div id='back-to-top-btn' className="back-to-top-btn" onClick={ScrollToTop}>
          <span className='back-to-top'>Back to top</span>
        </div>

        <Footer1 />

        <Footer2 />

    </div>
  )
}

export default Home;
