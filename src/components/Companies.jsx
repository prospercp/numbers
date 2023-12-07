import eyowo from '../assets/eyowo.png'
import kuda from '../assets/Kuda.png'
import piggyvest from '../assets/piggyvest.png'

const Companies = () => {
    return(
        <div className=' p-8'>
            <p className='text-center text-3xl py-4 font-semibold text-[#2A2B2E] md:text-5xl'> Trusted Companies </p>
            <div className='flex justify-center items-center gap-6 m-auto md:py-8 md:gap-16'>
                <img src={eyowo} className='w-24 md:w-40'/>
                <img src={kuda} className='w-24 md:w-40'/>
                <img src={piggyvest} className='w-24 md:w-40'/>
            </div>
        </div>
    )
}

export default Companies