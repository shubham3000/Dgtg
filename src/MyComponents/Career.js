import React from 'react'

export default function Career() {
  return (
    <>
    <section>
            <div class="container mb-15">
                <div class="row">
                    <div class="col-6">
                        <img src="images/career.png" />
                    </div>
                    <div class="col-6">
                        <i class="fal fa-long-arrow-left"></i>
                        <div class="career">
                            <h2>Career</h2>
                            <p>Join us today! 
                                <br/>
                                <br/>
                                and be a part of India's fastest-growing <b>creative advertising agency.</b> Do you have the skills? We are waiting to hear from you.
                            </p>
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
