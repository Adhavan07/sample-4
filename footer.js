function footer() {
    document.write(`

<!-- Contact Area start -->
<section class="contact-area bgc-lighter  rpy-100 rel z-1">
  <div class="container">
    <div class="row gap-150 align-items-center">
      <div class="col-lg-6">
        <div class="contact-form-part rmb-55" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
          <div class="section-title mb-35"> 
            <h2>Connect with us</h2>
          </div>
        <form id="contactForm" class="contactForm" name="contactForm" action="form-process.php" method="post">
              <div class="row gap-20">
	
				 
                <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="first_name" name="first_name" class="form-control" value="" placeholder="First Name" required data-error="Please enter your First Name">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
				   <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="last_name" name="last_name" class="form-control" value="" placeholder="Last Name" required data-error="Please enter your Last Name">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="phone_number" name="phone_number" class="form-control" value="" placeholder="Phone No"  data-error="Please enter your Phone No">
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input type="email" id="email" name="email" class="form-control" value="" placeholder="Email Address" required data-error="Please enter your Email">
                    <div class="help-block with-errors"></div>
                  </div>
					</div>
					<div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="organization" name="organization" class="form-control" value="" placeholder="Organization" required data-error="Please enter your Organization">
                    <div class="help-block with-errors"></div>
						</div>
                  </div>
				  <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="service_interest" name="service_interest" class="form-control" value="" placeholder="Service Interest" required data-error="Please enter your Service Interest">
                    <div class="help-block with-errors"></div>
						</div>
                  </div>
				    <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="country" name="country" class="form-control" value="" placeholder="Country" required data-error="Please enter your Country">
                    <div class="help-block with-errors"></div>
						</div>
                  </div>
				    <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" id="city" name="city" class="form-control" value="" placeholder="City" required data-error="Please enter your City">
                    <div class="help-block with-errors"></div>
						</div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <textarea name="message" id="message" class="form-control" rows="4" placeholder="Message" required data-error="Please enter your Message"></textarea>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group mb-0">
                    <button type="submit" class="theme-btn">Send Message <i class="far fa-angle-double-right"></i></button>
                    <div id="msgSubmit" class="hidden"></div>
                  </div>
                </div>
             <p>&nbsp;</p>
            </form>
        </div>
      </div>
	    <!-- Popup Modal -->
    <div id="popupModal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <p id="modalMessage">
        </div>
    </div>
      <div class="col-lg-6" data-aos="fade-right" data-aos-duration="1500" data-aos-offset="50">
        <div class="contact-image-part rel">
          <div class="experience-years">
            <h6 class="title">FAQs</h6>
            <h6><a href="faqs.html">Your Questions Answered <i class="far fa-arrow-right"></i></a></h6>
          </div>
          <img src="assets/images/home/faq-img.jpg" loading="lazy" alt="FAQs"> </div>
      </div>
    </div>
  </div>
  <div class="bg-lines"> <span></span><span></span> <span></span><span></span> </div>
  <div class="for-contact-bg"> <img src="assets/images/contact/contact-bg-dots.png" loading="lazy" alt="Dots"> </div>
</section>
<!-- Contact Area end --> 


    <footer class="main-footer rel z-1">
      <div class="footer-top pt-40 pb-20">
        <div class="container">
          
          <div class="row justify-content-between">
            <div class="col-xl-4 col-lg-4 col-sm-6">
              <div class="footer-widget footer-text" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-offset="50">
<div class="footer-logo mb-20 rmb-25" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="50">
                <a href="index.html"><img src="assets/images/logos/main logo.png" alt="Logo"></a>
              </div>
                <h4 class="footer-title">About Spandsons Horizon</h4>
                <div class="text footer-text">
                  <p>Spandsons Horizon is a global firm with 28 years of experience supporting the Architecture, Engineering, and Construction (AEC) industry.</p>
                  
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-3 col-sm-6">
              <div class="footer-widget footer-links" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-offset="50">
                <h4 class="footer-title">Services</h4>
                <ul>
                 <li><a href="architecture-bim-services.html">Architectural BIM 
            Development Services</a></li>
          <li><a href="structure-design-bim-services.html">Structure Design and BIM Services</a></li>
 
<li><a href="cad-drafting-services.html">CAD Services</a></li>
          <li><a href="visualization-rendering-service.html">Consulting & Optimization</a></li>
         
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6">
              <div class="footer-widget footer-links" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500" data-aos-offset="50">
                <h4 class="footer-title">Quick Links</h4>
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="intec-projects.html">Projects</a></li>
                  <li><a href="news-blog.html">Happiness at Spandsons</a></li>
<li><a href="career.html">Career</a></li>
<li><a href="contact.html">Contact us</a></li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
        <div class="bg-lines for-black-bg">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
      <div class="footer-bottom pt-20 pb-5 rpt-25">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="copyright-text">
                <p>Copy@2024 <a href="legal.html">Spansons</a>. All Rights reserved</p>
              </div>
            </div>
            <div class="col-lg-6 text-lg-end">
              <ul class="footer-bottom-nav">
                <li><a href="https://www.linkedin.com/company/intec-infocom-pvt.-ltd.?trk=tyah" target="_blank"><i class="fab fa-linkedin-in"></i> LinkedIn</a></li>
                <li><a href="https://www.facebook.com/intecinfratechnologies" target="_blank"><i class="fab fa-facebook" ></i> Facebook</a></li>
                <li><a href="https://www.youtube.com/user/IntecInfra" target="_blank"><i class="fab fa-youtube"></i> YouTube</a></li>
              </ul>
            </div>
          </div>
          <button class="scroll-top scroll-to-target" data-target="html"><span class="far fa-angle-double-up"></span></button>
        </div>
      </div>
    </footer>
  `);
}