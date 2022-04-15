import React from 'react'
import Footer from './Footer'
import Header from './Header'


export default function Home() {
  return (
   <>
    <Header/>
    <section style="margin-top: 20vh;">
        <div class="container mb-15">
            <div class="row">
                <div class="col-6">
                    <div class="head">
                        <h1>Transform your <span style="color: #AC2027;"> Brand. </span></h1>
                        <h3>We're a <b>digital marketing agency</b> that helps businesses to get found, get talked about, and grow to the next level! </h3>
                        <div class="head-nxt">
                            <p>We do it all <i class="fal fa-long-arrow-right"></i></p>
                            <p style="color: #AC2027;">Let’s get started <i class="fal fa-long-arrow-right"></i></p>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="head-img p-5">
                        <img src="images/Home/home.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background: #F9FAFD;">
        <div class="container">
            <div class="home">
                <div class="row pt-5 mb-5">
                    <div class="col-6">
                        <div class="home1">
                            <h2>Why <span style="color: #AC2027;">Choose</span> us?</h2>
                        </div>
                    </div>
                    <div class="col-6 d-flex align-items-center p-5">
                        <div class="home2">
                            <p>Choosing us, you would be choosing the best <b>Digital Marketing Agency in India.</b> We’re a creative agency and technology solutions partner, with over <b>200+</b> clients in the last 6 years. </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 d-flex align-items-center">
                        <div class="home3 p-5">
                            <p>We create media buying strategies & <b>campaign management in digital marketing</b> from the concept stage to the actual execution on multiple devices worldwide in the digital sphere. </p>
                        </div>
                    </div>
                    <div class="col-6 p-5" style="background: #171F33;">
                        <div class="home4">
                            <img src="images/Home/client.png" height="48px" width="48px" />
                            <p>200+ Clients served in last 6 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container mt-15 mb-15">
            <div class="row">
                <div class="col-6">
                    <div class="home5 p-5">
                        <img src="images/Home/dgtg.png" />
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <div class="home6 m-2">
                        <h2>We’re <span style="color: #AC2027;">DGTG</span></h2>
                        <p><b>A digital marketing agency</b> with a wide reach across India. Our in-house performance network & media buying team works to achieve our client’s <b>150%</b> ROI. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style="background: #192238;">
        <div class="container p-5">
            <div class="row">
                <div class="col-sm-6">
                    <div class="letsgo d-flex">
                        <img src="images/services/letsgo.png" height="80vh" width="80vh" />
                        <h2 style="color: #FFFFFF;">Let's get started working together.</h2>
                    </div>
                </div>
                <div class="col-sm-6 d-flex justify-content-end align-items-center">
                    <div class="contactus">
                        <h4 style="color: #FFFFFF;">Contact us<i class="fal fa-long-arrow-right"></i></h4>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section>
        <div class="container mt-15 mb-15">
            <div class="latest-post text-center">
                <img src="images/Home/live.png" width="116px" height="46px" />
                <h2>Latest Post</h2>
                <p>Visit this space to read the latest posts from our team. We‘ll share our reflections on startups, traveling, recent insights on marketing & growth, artificial intelligence (AI), virtual reality (VR), Internet of things (IoT) with some recent topics on COVID & Lockdown. </p>
            </div>
            <div class="row mt-15">
                <div class="col-4">
                    <div class="post-img">
                        <img src="images/Home/post1.png" />
                    </div>
                    <div class="post-deatails mt-4">
                        <p style="color: #171F33;">4 Crucial Financial Metrics That Every Startup Must Address</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="post-img">
                        <img src="images/Home/post2.png" />
                    </div>
                    <div class="post-deatails mt-4">
                        <p style="color: #171F33;">Top 10 Android Apps You Must Download In 2019</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="post-img">
                        <img src="images/Home/post3.png" />
                    </div>
                    <div class="post-deatails mt-4">
                        <p style="color: #171F33;">8 Best Practices for Email Marketing in 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}
