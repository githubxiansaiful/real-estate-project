const Footer = () => {
    return (
        <div className="bg-[#171b2a] pt-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-10">
                    <div>
                        <img className="mb-3" src="/public/real-logo.png"/>
                        <p className="text-white">Welcome to Real Estate, where we make your dream of finding the perfect home a reality. With years of expertise in the industry.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-5">Quick Links</h3>
                        <ul className="text-white space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-5">Support Links</h3>
                        <ul className="text-white space-y-2">
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Promotional Offers</li>
                            <li>Privacy Policy</li>
                            <li>Refund policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-xl mb-5">Contact Info</h3>
                        <ul className="text-white space-y-2">
                            <li>+1 123456789</li>
                            <li>info@real-estate.com</li>
                            <li>help@real-estate.com</li>
                            <li>6016 Nunn St, Houston Texas, United States</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-t border-[#f1f1f12e] pt-5 pb-5 text-white">
                    <p>Copyright © 2024 Real Estate | All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;