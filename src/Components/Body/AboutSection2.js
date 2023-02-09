import React, { useContext } from "react";
import { useState, useEffect } from "react";
function AboutSection2() {
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
      <section id="about" class="about-section pt-150">
			<div class="container">
				<div class="row flex items-center">
					<div class="w-full lg:w-1/2">
						<div class="about-content">
							<div class="section-title mb-8">
								<h1 class="mb-6 text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Easy to Use with Tons of Awesome Features</h1>
								<p class="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
							</div>
							<ul class="about-feature">
								<li>Quick Access</li>
								<li>Easily to Manage</li>
								<li>24/7 Support</li>
							</ul>
							<a href="javascript:void(0)" class="main-btn btn-hover border-btn ">Learn More</a>
						</div>
					</div>
					<div class="w-full lg:w-1/2 order-first lg:order-last">
						<div class="about-img-2 relative z-10 pt-19 pb-19 mb-18 lg:mb-0">
							<img src={about} alt="" class="w-100"> </img>
							<img src={aboutRight} alt="" class="shape shape-1"> </img>
							<img src={aboutDots} alt="" class="shape shape-2"> </img>
						</div>
					</div>
				</div>
			</div>
		</section>
    </React.Fragment>
  );
}

export default AboutSection2;
