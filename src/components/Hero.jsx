import Navbar from './Navbar'
import Icon1 from '../assets/Icon1.png'
import phoneTop from '../assets/phoneTop.png'

const Heading = () => {
    return (
        <div className='p-8 md:flex justify-center'>
            <div>
                <h1 className='text-6xl font-semibold text-[#1A1A1A] pb-2 text-center md:text-7xl md:mt-12'> Virtual Card <br/> Generator. </h1>
                <p className='text-sm pb-5 text-center'> Get to Create, Configure and link your card to any app </p>

                <div className='bg-[#880BDF] p-4 w-fit rounded-xl flex gap-5 text-white text-lg font-medium m-auto md:m-0 hover:translate-y-1'>
                    <p className='hover:cursor-default'> Watch Tutorial </p>
                    <img src={Icon1} className='w-8'/>
                </div>

            </div>
            
            <div className=''>
                <img src={phoneTop} className='md:w-[420px] ' />
            </div>
        </div>
    )
}

const Hero = () => {
    return(
        <div>
            <Navbar />
            <Heading />
        </div>
    )
}

export default Hero