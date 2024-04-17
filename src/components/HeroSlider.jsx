import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';

const HeroSlider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className='h-[80vh] flex hero-slide hero-slide1'>
                    <div className='container text-center'>
                        <div className="slide-content space-y-5">
                            <h1 className='text-4xl font-bold'>We will help you find your Wonderful home</h1>
                            <p className='max-w-[750px] mx-auto'>Discover your dream dwelling with our expert assistance. From cozy cottages to luxurious estates, we're dedicated to matching you with the perfect abode. Let us guide you to your ideal home sweet home today!</p>
                            <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='h-[80vh] flex hero-slide hero-slide2'>
                    <div className='container text-center'>
                        <div className="slide-content space-y-5">
                            <h1 className='text-4xl font-bold'>Your Perfect Sanctuary Awaits</h1>
                            <p className='max-w-[750px] mx-auto'>Embark on a journey to uncover your sanctuary. Our team specializes in finding homes that resonate with your desires and needs. Let us lead you to the haven you've been dreaming of.</p>
                            <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className='h-[80vh] flex hero-slide hero-slide3'>
                <div className='container text-center'>
                    <div className="slide-content space-y-5">
                        <h1 className='text-4xl font-bold'>Unlock the Door to Your Ideal Home</h1>
                        <p className='max-w-[750px] mx-auto'>Let us be your key to unlocking the door to your ideal home. With our personalized approach and extensive expertise, we'll navigate the real estate landscape to find the perfect match for you. Begin your journey home with us today.</p>
                        <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                    </div>
                </div>
            </div></SwiperSlide>
        </Swiper>
    );
};

export default HeroSlider;