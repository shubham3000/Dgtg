import React from 'react'

export default function ContactUs() {
  return (
    <>
    <section>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-6">
                        <div class="place d-flex">
                            <img src="images/career/banglore.png" />
                            <div class="place-details">
                                <h5>Banglore</h5>
                                <p>Building 167, 6th cross, Whitefield, Bangalore, Karnataka, India-560066</p>
                                <p>Building No: 54, The Planet, First Floor.Above First Cry, Brooke Bond First Cross,whitefield Main Road, Whitefield, Bangalore, Karnataka,India - 560066</p>
                            </div>
                        </div>

                        <div class="place mt-5 d-flex">
                            <img src="images/career/delhi.png" />
                            <div class="place-details">
                                <h5>Delhi & NCR</h5>
                                <p>721,1st Floor Udyog Vihar Phase V,Sector 19, Gurugram, Haryana 122008</p>
                            </div>
                        </div>

                        <div class="place mt-5 d-flex">
                            <img src="images/career/mumbai.png" />
                            <div class="place-details">
                                <h5>Mumbai</h5>
                                <p>WeWork, Spectrum towers, 5th floor,307, Chincholi Bunder Rd, Rajan Pada, Mindspace, Malad West, Mumbai, Maharashtra 400064</p>
                            </div>
                        </div>

                        <div class="contact-details d-flex justify-content-evenly mt-5 mb-15">
                            <div class="tel d-flex">
                                <i class="fas fa-phone-alt"></i><p>+91 76763 69557</p>
                            </div>
                            <div class="email d-flex">
                                <i class="fas fa-envelope"></i><p>contact@dgtg.in</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6" style="background: #192238;">
                        <i class="fal fa-long-arrow-left" style="color: #ffffff;"></i>
                        <div class="career">
                            <h2 style="color: #ffffff;">Contact us</h2>
                        </div>
                        <div class="message">
                            <div class="message-details mt-5 mb-4">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                            </div>
                            <div class="message-text">
                                <input type="text" placeholder="Subject" class="mb-4" />
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div class="send mt-3">
                            Send
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
