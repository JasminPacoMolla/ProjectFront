import React,{useContext} from "react";


function Footer() {


  return (
    <React.Fragment>
        <footer className="footer bg-cover bg-no-repeat bg-right-top pt-120 mt-25 md:bg-transparent md:pt-260 lg:pt-260" style="background-image: url('assets/img/footer/footer-bg.svg');">
                    <div className="container">
                        <div className="widget-wrapper">
                            <div className="row">
                                
                                <div className="w-full md:w-6/12 lg:w-4/12">
                                    <div className="footer-widget mb-10 mx-3">
                                        <div className="logo mb-8">
                                            <a href="index.html"> <img src="assets/img/logo/logo-MDfooter.svg" alt=""/> </a>
                                        </div>
                                       {/* <p className="mb-8 text-black sm:pr-13 md:pr-0 2xl:pr-25">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dinonumy eirmod tempor invidunt.</p>  */}
                                        <ul className="socials flex items-center">
                                            <li className="mr-5">
                                                <a href="jvascript:void(0)"> <i className="lni lni-facebook-original"></i> </a>
                                            </li>
                                            <li className="mr-5">
                                                <a href="jvascript:void(0)"> <i className="lni lni-twitter-original"></i> </a>
                                            </li>
                                            <li className="mr-5">
                                                <a href="jvascript:void(0)"> <i className="lni lni-instagram-original"></i> </a>
                                            </li>
                                            <li className="mr-5">
                                                <a href="jvascript:void(0)"> <i className="lni lni-linkedin-original"></i> </a>
                                            </li>
                                           
                                               <li>  <a href="jvascript:void(0)"> <i className="lni lni-github-original"></i> </a> </li>
                                           
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div className="w-full md:w-6/12 lg:w-2/12">
                                    <div className="footer-widget mb-10 mx-3">
                                        <h3 className="mb-6 text-black">About Us</h3>
                                        <ul className="links">
                                            <li> <a href="javascript:void(0)">Home</a> </li>
                                            <li> <a href="javascript:void(0)">Feature</a> </li>
                                            <li> <a href="javascript:void(0)">About</a> </li>
                                            <li> <a href="javascript:void(0)">Testimonials</a> </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12 lg:w-3/12">
                                    <div className="footer-widget mb-10 mx-3">
                                        <h3 className="mb-6 text-black">Features</h3>
                                        <ul className="links">
                                            <li> <a href="javascript:void(0)">How it works</a> </li>
                                            <li> <a href="javascript:void(0)">Privacy policy</a> </li>
                                            <li> <a href="javascript:void(0)">Terms of service</a> </li>
                                            <li> <a href="javascript:void(0)">Refund policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-full md:w-6/12 lg:w-3/12">
                                    <div className="footer-widget mb-10 mx-3">
                                        <h3 className="mb-6 text-black">Other Products</h3>
                                        <ul className="links">
                                            <li> <a href="jvascript:void(0)">Accounting Software</a> </li>
                                            <li> <a href="jvascript:void(0)">Billing Software</a> </li>
                                            <li> <a href="jvascript:void(0)">Booking System</a> </li>
                                            <li> <a href="jvascript:void(0)">Tracking System</a> </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
        </footer>
        <a href="#" className="scroll-top btn-hover">
      <i className="lni lni-chevron-up"></i>
    </a>

    <script src="./js/js-index/tiny-slider.js"></script>
    <script src="./js/js-index/wow.min.js"></script>
    <script src="./js/js-index/main.js"></script>

            

       
		
  </React.Fragment>
  );
}

export default Footer;
