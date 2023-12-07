import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import snapchat from '../assets/snapchat.png'

const FastLinks = () => {
    return(
            <ul className="hidden md:text-white md:block">
                <li className="text-2xl"> Fastlinks </li>
                <li> Home </li>
                <li> Features </li>
                <li> Connect </li>
                <li> Watch Tutorial </li>
            </ul>
    )
}

const References = () => {
    return(
        <ul className="hidden md:text-white md:block">
            <li className="text-2xl"> References </li>
            <li> Developer API </li>
            <li> Tools </li>
            <li> Blogs </li>
        </ul>
    )
}

const Newsletter = () => {
    return(
        <div className='ml-40 md:m-0'>
            
            <div className=' flex-row justify-center'>
                <p className="text-2xl text-white"> Subscribe to our email newsletter </p>

                <form action="#" className="flex py-2 md:py-4 ">
                    <input type="text" placeholder="Your email" className="h-10 w-fit rounded-lg outline-none px-3"/>
                    <button className="text-black h-10 w-fit ml-2 px-4 rounded-lg bg-white font-semibold"> Subscribe </button>
                </form>

            </div>
            
            <div>
                <FollowUs />
            </div>

        </div>
    )
}

const FollowUs = () => {
    return(
        <div className='mt-4 md:m-0'>
            <p className='text-2xl text-white'> Follow Us! </p>
            <div className='flex gap-8 w-5 py-3'>
                <img src={twitter} />
                <img src={facebook} />
                <img src={snapchat} />
                <img src={linkedin} />
            </div>
        </div>
    )
}

const Footer = () => {
    return(
        <div className="bg-[#6B0FDE] p-8">
            <div className="flex justify-center gap-8  md:py-10 items-start ml-5 w-1/3 md:w-full md:gap-20 md:m-0">
                <FastLinks />
                <References /> 
                <Newsletter />  
            </div>
            
            <p className='text-sm text-white text-center mt-10'> Designed by MarcelVx and developed by ProspercpU 2023, Copyright reserved.&copy; </p>

        </div>
    )
}

export default Footer