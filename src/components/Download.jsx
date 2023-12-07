import phoneCard from '../assets/phoneCard.png'
import appstore from '../assets/appstore.png'
import Companies from './companies'

const Pricing = () => {
    return(
        <div className='my-20 md:flex justify-center md:gap-5'>
            <div>
                <p className='text-center text-2xl md:text-6xl font-semibold md:mt-16'> Download <br/> App Now! </p>
                <img src={appstore} className='w-80 m-auto py-4 md:mt-4'/>
            </div>

            <img src={phoneCard} className='w-96 m-auto md:m-0'/>

        </div>
    )
}

const Download = () => {
    return(
        <div>
            <Companies />
            <Pricing />
        </div>
    )
}

export default Download