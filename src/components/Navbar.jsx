import numberslogo from '../assets/numberslogo.png'
import signal from '../assets/signal.png'

const Navbar = () => {
    return(
        <div className='flex justify-between p-8'>
            <div className='w-32'>
                <img src={numberslogo} />
            </div>

            <ul className='hidden md:flex gap-8'>
                <li className='hover:cursor-pointer hover:border-b-2 border-blue-200'> Home </li>
                <li className='hover:cursor-pointer hover:border-b-2 border-blue-200'> Features </li>
                <li className='hover:cursor-pointer hover:border-b-2 border-blue-200'> Pricing </li>
                <li className='hover:cursor-pointer hover:border-b-2 border-blue-200'> Connect </li>
            </ul>

            <div className='w-6 hover:cursor-pointer md:hidden'>
                <img src={signal} />
            </div>
        </div>
    )
}

export default Navbar