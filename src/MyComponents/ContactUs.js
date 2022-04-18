import React from 'react'
import Header from './Header';
import "../Styles/global.css";
import Footer from './Footer';


export default function ContactUs() {
  return (
    <>
    <div className="overlay"></div>
      <Header showNav={false} />
      <section className='container mt-5'>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 mt-md-0 mt-5 order-md-1 order-2">
              <div className="place d-flex">
                <img src="images/career/banglore.png" />
                <div className="place-details">
                  <h5>Banglore</h5>
                  <p>Building 167, 6th cross, Whitefield, Bangalore, Karnataka, India-560066</p>
                  <p>Building No: 54, The Planet, First Floor.Above First Cry, Brooke Bond First Cross,whitefield Main Road, Whitefield, Bangalore, Karnataka,India - 560066</p>
                </div>
              </div>
              <div className="place mt-5 d-flex">
                <img src="images/career/delhi.png" />
                <div className="place-details">
                  <h5>Delhi &amp; NCR</h5>
                  <p>721,1st Floor Udyog Vihar Phase V,Sector 19, Gurugram, Haryana 122008</p>
                </div>
              </div>
              <div className="place mt-5 d-flex">
                <img src="images/career/mumbai.png" />
                <div className="place-details">
                  <h5>Mumbai</h5>
                  <p>WeWork, Spectrum towers, 5th floor,307, Chincholi Bunder Rd, Rajan Pada, Mindspace, Malad West, Mumbai, Maharashtra 400064</p>
                </div>
              </div>
              <div className="contact-details d-md-flex d-none justify-content-evenly mt-5 mb-15">
                <div className="tel d-flex">
                  <i className="fas fa-phone-alt" /><p>+91 76763 69557</p>
                </div>
                <div className="email d-flex">
                  <i className="fas fa-envelope" /><p>contact@dgtg.in</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 order-md-2 order-1" style={{ zIndex: 15}}>
              <form action="" className='contact-us--form'>
                <i className="fal fa-long-arrow-left" style={{ color: '#ffffff' }} />
                <div className="career">
                  <h2 style={{ color: '#ffffff' }}>Contact us</h2>
                </div>
                <div className="message">
                  <div className="message-details mt-5 mb-4">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="message-text">
                    <input type="text" placeholder="Subject" className="mb-4" />
                    <textarea placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="send mt-3">
                  Send
                </div>
              </form>

            </div>
          </div>
      </section>

      <Footer />
    </>
  )
}
