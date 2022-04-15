import React from 'react'

export default function OurWork() {
  return (
    <>
    <section class="mt-15 mb-15">
            <div class="container-fluid">
                <div class="service-header">
                    <h1>Our Work</h1>
                </div>
                <div class="our-work d-flex justify-content-center mt-5">
                    <ul>
                        <li class="red"><a href="#">ALL</a></li>
                        <li><a href="#">Creatives</a></li>
                        <li><a href="#">Performance</a></li>
                        <li><a href="#">Branding</a></li>
                    </ul>
                </div>
            </div>        
        </section>

        <section>
            <div class="container mb-15">
                <div class="row">
                    <div class="col" >
                        <div class="icon">
                            <a href="#modal"><img src="images/ourwork/khatabook.png" width="220px" height="58px" /></a>
                        </div>

                        <div class="modal" id="modal">
                            <div class="modal__content">
                                <a href="#" class="modal__close">&times;</a>
                                <div class="modal__heading text-center">
                                    <img src="images/ourwork/khatabook.png" width="220px" height="58px" />
                                </div>
                                <p class="modal__paragraph">
                                    Khatabook was started in 2015 with an objective to offer email Marketing. Our clients wanted to acquire new customers we Pivoted in affiliate marketing. 2016 onwards, most clients Needed us to reach their new customers on mobile app, we Started mobile advertising and media buying.
                                    <br/>
                                    <br/>
                                    We learned more in media buying and started using self serve platforms to buy media programmatically and served Many clients for Video and Display advertising.
                                    <br/>
                                    <br/>
                                    In last 2 years we have robust our operations and creative Capabilities and built our own media and production set up.
                                    <br/>
                                    <br/>
                                    The story is in the making…Stay tuned!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/housejoy.png" width="220px" height="112px" /></a>
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="icon">
                             <a href="#"><img src="images/ourwork/reliance.png" width="220px" height="63px" /></a>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/swiggy.png" width="220px" height="66px" /></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/mahindra.png" width="220px" height="124px" /></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/ing.png" width="220px" height="55px" /></a>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/banco.png" width="220px" height="122px" /></a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="icon">
                            <a href="#"><img src="images/ourwork/zivame.png" width="220px" height="58px" /></a>
                        </div>
                    </div>
                    <div class="col">
                       
                    </div>
                </div>
            </div>
        </section>

        <section style="background: #F9FAFD;" class="p-4">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="letsgo d-flex">
                            <img src="images/services/letsgo.png" height="80vh" width="80vh" />
                            <h2>Let's get started working together.</h2>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex justify-content-end align-items-center">
                        <div class="contactus">
                            <h4>Contact us<i class="fal fa-long-arrow-right" style="color: #AC2027;"></i></h4>
                        </div>
                    </div> 
                </div>
                
            </div>
        </section>
    </>
  )
}
