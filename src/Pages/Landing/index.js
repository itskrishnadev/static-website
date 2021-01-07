import React, { Component } from 'react'
import Typical from 'react-typical'
// import BannerSmall from './bannerTyposmall';
import Lappy from '../../assets/images/lappy.png'
import Mobile from '../../assets/images/Mobile.png'
import blueMob from '../../assets/images/bluemob.png'
export class Landing extends Component {
    render() {
        return (
            <div>
                <section style={{backgroundColor: "#17135C"}} >
                    <section className="LandingTypewrite__mainWrapper">
                    <section className="LandingTypewrite__gridWrapper">
                   
                <section className="LandingTypewrite__gridContentNestedWrapper--1" style={{height: "20vw"}}>
                    <p>
                        We
                    </p>
                <Typical
                    steps={['Make Sense', 1200, 'Build Product', 1200,'Create Bridges', 1200, "Build Digital",1200]}
                    loop={false}
                    wrapper="p"
                />
                </section>
               
                <section className="LandingTypewrite__gridContentNestedWrapper--2">
                    {/* <BannerSmall /> */}
                    <p className="LandingMastSubheader__textFormat  ">
                    Between your business objectives and what your customers want.
                  </p>
                </section>
                </section>

                </section>
                <section className="LandingClientTele__mainWrapper">
   <h1 className="LandingClientTele__mainHeader">Award Winning Mobile App Development Company Based in Singapore</h1>
   <div className="clientTeleGrid__gridWrapper">
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-brother.svg" alt="Clients helped - Brother"/>
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-furama.svg" alt="Clients helped - Furama"/>
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-HBO.svg" alt="Clients helped - HBO" />
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-isetan.svg" alt="Clients helped - Isetan" />
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-OCBC.svg" alt="Clients helped - OCBC" />
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-SATS.svg" alt="Clients helped - SATS" />
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-suntory.svg" alt="Clients helped - Suntory" />
       <img className="clientTeleGrid__gridItem" src="https://www.codigo.co/img/views/home/client-wildlife-reserves.svg" alt="Clients helped - Wildlife Reserves" />
       </div>
                </section>

                <section className="LandingFeaturedProjects__mainWrapper">
   <section className="clearfix featuredItem__mainWrapper">
      <section className="clearfix featuredItem__wrapperGapAllowance">
         <section className="centerY featuredItem__contentWrapper--copy featuredItem__contentWrapper--pushLeft">
            <h2 className="extraBold--36 color--white featuredItem__header">7Rewards - Mobile Application</h2>
            <p className="extraBold--18 color--white featuredItem__subHeader">Convenience has its rewards</p>
            <p className="color--white featuredItem__bodyCopy">Buy whatever you need from any 7-Eleven branches islandwide and get rewarded for it. Simply scan your personal 7Rewards barcode in the app to earn stamps. When you've collected enough stamps, make your selection from a range of goodies and redeem.</p>
            <a className="color--white button--inlineArrows--white" href="/work/7-eleven">Find out more</a>
         </section>
         <section className="featuredItem__contentWrapper--visual featuredItem__contentWrapper--pushRight">
            <div className="featuredItem__circleBG" style={{backgroundColor: "rgb(27, 164, 85)"}}>
                <img className="featuredItem__heroImgEl centerXY" src={blueMob}  />
                </div>
         </section>
      </section>
   </section>

   <section className="clearfix featuredItem__mainWrapper">
      <section className="clearfix featuredItem__wrapperGapAllowance">
         <section className="centerY featuredItem__contentWrapper--copy featuredItem__contentWrapper--pushRight">
            <h2 className="extraBold--36 color--white featuredItem__header">FairPrice Online - Ecommerce Website</h2>
            <p className="extraBold--18 color--white featuredItem__subHeader"> Codigo’s favourite local grocer</p>
            <p className="color--white featuredItem__bodyCopy">A complete design overhaul to elevate FPOL’s digital likability through better user experience and modern interface design. We created a smoother and more delightful shopping experience for all customers, old and new.</p>
            <a className="color--white button--inlineArrows--white" href="/work/fairprice-online">Find out more</a>
         </section>
         <section className="featuredItem__contentWrapper--visual featuredItem__contentWrapper--pushLeft">
            <div className="featuredItem__circleBG" style={{backgroundColor: "rgb(245, 245, 245)"}}>
                <img className="featuredItem__heroImgEl centerXY" src={Mobile} />
            </div>
         </section>
      </section>
   </section>

   <section className="clearfix featuredItem__mainWrapper">
      <section className="clearfix featuredItem__wrapperGapAllowance">
         <section className="centerY featuredItem__contentWrapper--copy featuredItem__contentWrapper--pushLeft">
            <h2 className="extraBold--36 color--white featuredItem__header">ComfortDelGro - Mobile Application (iOS/Android)</h2>
            <p className="extraBold--18 color--white featuredItem__subHeader">Your most reliable ride</p>
            <p className="color--white featuredItem__bodyCopy">The only ride booking app that allows users to save their everyday or most frequent rides as favourite journeys so everyone can stop trying to pin themselves accurately on the map. This is just one of the many subtle functions included in the ComfortDelgro mobile app that sets it apart from the tough competition out there.</p>
            <a className="color--white button--inlineArrows--white" href="/work/comfortdelgro">Find out more</a>
         </section>
         <section className="featuredItem__contentWrapper--visual featuredItem__contentWrapper--pushRight">
            <div className="featuredItem__circleBG" style={{backgroundColor: "rgb(25, 70, 132)"}}>
                <img className="featuredItem__heroImgEl centerXY" src={Lappy}  />
                </div>
         </section>
      </section>
   </section>

</section>


<section className="LandingWhatWeCanDo__mainWrapper">
   <p className="extraBold--36 color--white text--center LandingWhatWeCanDo__mainHeader">What we can do for you or your business</p>
   <section className="canDoCategory__gridWrapper">
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(255, 255, 101)"}}>
                <img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-postIt.png" />
                </div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">User Experience</p>
            <p className="canDoCategory__bodyCopy">UX is the core to everything we build in Codigo. We take user research, competitive analysis, wireframes, user flows, content maps etc. very seriously.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(238, 217, 220)"}}>
                <img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-pixCherry.png" /></div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Interface Design</p>
            <p className="canDoCategory__bodyCopy">Form &amp; Function co-exists in Codigo.<br />We keep ourselves constantly inspired with top trends in the design industry to craft gorgeous interactions for your brand.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(179, 38, 46)"}}>
            <img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-letterSeal.png" />
            </div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Consultancy</p>
            <p className="canDoCategory__bodyCopy">Ready to take the first step? Let us help with a minimum viable product. Tap on our brains and experience to create a semi-product to test the waters. Consult us on user experience, how the product could look like and turn it into a rapid prototype.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(23, 123, 209)"}}>
            <img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-phone.png" /></div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Mobile Development</p>
            <p className="canDoCategory__bodyCopy">Native, ReactNative, payment gateway integration, bespoke CMS, consuming APIs from existing sources and all things mobile app relevant.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(255, 141, 110)"}}>
            <img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-laptop.png" />
            </div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Web Development</p>
            <p className="canDoCategory__bodyCopy">Websites, microsites (yes, they still exist), web apps - responsive, powered by WordPress or supported by a bespoke CMS. No screen sizes scare us, only IE does.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(15, 113, 115)"}}><img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-cogwheels.png" /></div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">CMS</p>
            <p className="canDoCategory__bodyCopy">We build fully customisable and readily expandable Content Management System with a dashboard so you can monitor the activities on your product 24/7.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(69, 48, 66)"}}><img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-vr.png" /></div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Emerging Tech</p>
            <p className="canDoCategory__bodyCopy">Bluetooth, beacon, NFC, Augmented reality, IoT and more - we know and we have all these buzzwords in our office. We put Superman in AR before Pokemon Go did.</p>
         </div>
      </section>
      <section className="canDoCategory__gridItemWrapper">
         <div className="canDoCategory__visualWrapper">
            <div className="canDoCategory__visualBall" style={{backgroundColor: "rgb(135, 57, 85)"}}><img className="canDoCategory__visualImgEl" src="https://www.codigo.co/img/views/home/services-rolledCert.png" /></div>
         </div>
         <div className="canDoCategory__contentWrapper">
            <p className="canDoCategory__header">Coaching</p>
            <p className="canDoCategory__bodyCopy">Attend our Masterclasses with the Codigo syllabus or talk to us to customise sessions just for your business teams.</p>
         </div>
      </section>
   </section>
</section>

                </section>

                        </div>
        )
    }
}

export default Landing

const colors = [
    'Between your business objectives and what your customers want.', 
    'Not client-vendor or vendor-client, we collaborate for the win.', 
    'Design and development for brands and start-ups.', 
    'Between your business objectives and what your customers want.'
  ]
