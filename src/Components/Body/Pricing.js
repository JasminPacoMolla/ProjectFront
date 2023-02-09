import React, { useContext } from "react";
import { useState, useEffect } from "react";

function Pricing() {
  const img1 = "";
  const img2 = "";
  const img3 = "";

  const [about, setImage1] = useState(img1);
  const [aboutRight, setImage2] = useState(img2);
  const [aboutDots, setImage3] = useState(img3);

  useEffect(() => {
    setImage1(require("../../img/about/about-2.png"));
    setImage2(require("../../img/about/about-right-shape.svg"));
    setImage3(require("../../img/about/right-dots.svg"));
  }, []);

  return (
    <React.Fragment>
      <section id="pricing" className="pricing-section relative z-10 pt-120 pb-120">
			<div className="container">
				<div className="row flex justify-center">
					<div className="w-full md:w-9/12 lg:w-8/12 xl:w-6/12">
						<div className="section-title text-center mb-9">
							<h1 className="mb-6 ">Choose a Plan</h1>
							<p className="">Lorem ipsum dolor sit amet consetetur sadipscing elitr sswed diam nonumy eirmod tempor nvidunt.</p>
						</div>
					</div>
				</div>

				<div className="pricing-nav-wrapper mb-15">
					<ul className="pricing-nav nav nav-pills flex justify-center">
						<li className="nav-item">
								<button className="active" data-tab-target="#monthlyPlan">Monthly</button>
						</li>
						<li className="nav-item">
								<button data-tab-target="#yearlyPlan">Yearly</button>
						</li>
					</ul>
				</div>

				<div className="tab-content pricing_content">
					<div className="tab-pane active" id="monthlyPlan" data-tab-content>
						<div className="row flex flex-wrap justify-center">
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$36</h1>
										<h3 className="package-name">Basic Account</h3>
									</div>
									<div className="content mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> Single User </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-close"></i> 24/7 Support </li>
											<li> <i className="lni lni-close"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover border-btn">Get Start</a>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$56</h1>
										<h3 className="package-name">Standard Account</h3>
									</div>
									<div className="content mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> 20+ Users </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-checkmark active"></i> 24/7 Support </li>
											<li> <i className="lni lni-checkmark active"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover">Get Start</a>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$89</h1>
										<h3 className="package-name">Premium Account</h3>
									</div>
									<div className="content mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Users </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-checkmark active"></i> 24/7 Support </li>
											<li> <i className="lni lni-checkmark active"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover border-btn">Get Start</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tab-pane" id="yearlyPlan" data-tab-content>
						<div className="row flex flex-wrap justify-center">
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$136</h1>
										<h3 className="package-name">Basic Account</h3>
									</div>
									<div className="content mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> Single User </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-close"></i> 24/7 Support </li>
											<li> <i className="lni lni-close"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover border-btn">Get Start</a>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$156</h1>
										<h3 className="package-name">Standard Account</h3>
									</div>
									<div className="content mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> 20+ Users </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-checkmark active"></i> 24/7 Support </li>
											<li> <i className="lni lni-close"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover">Get Start</a>
									</div>
								</div>
							</div>
							<div className="w-full sm:w-10/12 md:w-8/12 lg:w-4/12">
								<div className="single-pricing mx-4">
									<div className="pricing-header">
										<h1 className="mb-8 text-theme-color">$189</h1>
										<h3 className="package-name">Premium Account</h3>
									</div>
									<div className="mb-8 2xl:pl-13">
										<ul className="pricing-feature">
											<li> <i className="lni lni-checkmark active"></i> Unlimited Acces</li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Users </li>
											<li> <i className="lni lni-checkmark active"></i> Unlimited Storage</li>
											<li> <i className="lni lni-checkmark active"></i> 24/7 Support </li>
											<li> <i className="lni lni-checkmark active"></i> Free Future Updates</li>
										</ul>
									</div>
									<div className="pricing-btn">
										<a href="javascript:void(0)" className="main-btn btn-hover border-btn">Get Start</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </React.Fragment>
  );
}

export default Pricing;
