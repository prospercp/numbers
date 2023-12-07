import linkicon from '../assets/linkicon.png'

const FunctionLink = () => {
    return(
        <div className='flex gap-4 items-center p-8 hover:cursor-default'>
            <img src={linkicon} className='w-10 h-fit'/>
            <div className='text-white'>
                <h3> Link Bank App to Numbers </h3>
                <p>  voluptatibus est tempore. Repellat maiores dicta expedita debitis facere. </p>
            </div>
        </div>
    )
}

export default FunctionLink