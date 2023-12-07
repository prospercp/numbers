import FunctionLink from "./FunctionLink"

const Functions = () => {
    return(
        <div className=" bg-[#262629] py-10">

            <h1 className="text-white text-center text-4xl md:pt-28"> Functions: </h1>

            <div className=" md:flex justify-center">
                <div>
                    <FunctionLink />
                    <FunctionLink />  
                </div>
             
                <div>
                    <FunctionLink />
                    <FunctionLink />  
                </div>
             
            </div>
            
        </div>
    )
}

export default Functions