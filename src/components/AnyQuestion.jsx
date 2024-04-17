import { Link } from "react-router-dom";

const AnyQuestion = () => {
    return (
        <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
            <div className="container">
                <div className="max-w-[750px] mx-auto text-center mb-[80px]">
                    <h2 className="text-4xl text-center font-bold tracking-tight  sm:text-6xl">Have Question? Get in touch!</h2>
                    <p className="lg:text-xl max-w-[650px] mx-auto mt-6 text-lg leading-8">Need help? Contact us! Whether it's about buying, selling, or renting properties, we're here to assist you. Reach out today!</p>
                    <Link to="/contact-us" className="mt-5 btn btn-primary px-8">Contact Us</Link>
                </div>
            </div>
            <div className="text-center w-full">
                <img src="https://i.ibb.co/1dvVzV0/building.png" className="w-full text-center" />
            </div>
        </div>
    );
};

export default AnyQuestion;