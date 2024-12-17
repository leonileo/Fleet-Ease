
// Import Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../home.css'

import truck from '../assets/truck.png'
import car from '../assets/car.jpg'
import van from '../assets/van.jpg'
import motorBike from '../assets/motorBike.jpg'

const FeaturesComponent = () => {

    const truckData = [
        {image: truck, features: ["Basic Info: Register track details like license plate, model, and mileage.", "Status Updates: Mark the vehicle status as Active, In Service, or Inactive.", "Last Updated Logs: Track when the status or mileage was last updated."]},
        {image: car, features: ["Vehicle Registration: Add essential car details (e.g., make, model, license plate).", "Mileage Monitoring: Log and update mileage for tracking vehicle usage.", "Current Status: Easily update the car’s operational status (Available, In Use, Under Maintenance)."]},
        {image: van, features: ["Basic Registration: Input van details, including registration number, model, and mileage.", "Status Management: Update status like Active, Idle, or Out of Service.", "Mileage Tracking: Keep records of mileage for better maintenance planning."]},
        {image: motorBike, features: ["Basic Vehicle Info: Register motorbike data (e.g., license plate, make, and model).", "Mileage Input: Log the current mileage after every trip or inspection.", "Status Updates: Quickly update the bike status to In Use, Available, or Needs Service."]}
    ]

  return (
    <div className="sm:w-[50%] w-full sm:h-full h-[45vh] relative">
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 5000, 
                disableOnInteraction: true
            }}
            modules={[Pagination, Autoplay]}
            className='absolute bottom-0 h-full feature-swiper'
        >
            {truckData.map((e, x) => 
                <SwiperSlide key={x}>
                    <div className='h-full relative'
                    style={{
                        backgroundImage: `linear-gradient(rgba(69, 123, 157, .1), rgba(0, 0, 0, .8)), url(${e.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    >
                        <div className="features bg-[rgba(0,0,0,0.3)] w-full min-h-[25%] absolute bottom-0 text-[#F1FAEE] p-5">
                            <h2 className='text-[40px] font-semibold text-[#F1FAEE]'>Features</h2>
                            <ul className='px-20 space-y-2 mt-4'>
                                {e.features.map((feature, x) => 
                                    <li key={x} className='list-disc'>{feature}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    </div>
  )
}

export default FeaturesComponent