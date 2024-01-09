import React from 'react'
import payimg from "../Images/pay.png"
import playimg from "../Images/play.jpg"
// import payimg from "../Images/pay.png"
import appimg from "../Images/app.jpg"


function Footer() {
    return (
        <div id='footer'>

            <div className="col">
                {/* <img className="logoo" src="" alt="Crypto Miners" />
                 */}
                 <h2 style={{color:'gold', fontSize:'2rem',marginTrim:'30px'}}>Crypto Miners</h2>
                <h4>Contact</h4>
                <p> <strong>Address :</strong> 114A New Colony Gurgaon, India 122001</p>
                <p><strong>Phone : </strong>01-2334343435 / (+91)-9811881102</p>
                <p><strong>Hours: </strong>9:00am-4:00pm , Monday-Friday</p>


                <div className="follow" >
                    <h4>Follow us</h4>
                    <div className="icon">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4>About </h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms and conditions</a>
                <a href="#">Contact us</a>
                <a href="#">Complaints</a>
            </div>

            <div className="col">
                <h4>My account </h4>
                <a href="#">Sign in</a>
                <a href="#">View cart</a>
                <a href="#">My wishlist</a>
                <a href="#">Track my order</a>
                <a href="#">Help</a>
                <a href="#">Customer review</a>
            </div>

            <div className="col install">
                <h4>Install app</h4>
                <p>From App store or Google play store</p>
                <div className="row">
                    <img src={appimg} alt="" />
                    <img src={playimg} alt="" />
                </div>
                <p>Secured payment gateway</p>
                <img src={payimg} alt="" />

            </div>

            <div className="copyright">
                <p>Copyright © 2023 Yuvraj Bhalla ®</p>
            </div>

        </div>
    )
}

export default Footer
