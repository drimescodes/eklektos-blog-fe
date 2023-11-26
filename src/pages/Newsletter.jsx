import Navbar from "../components/Navbar"
import { RiAtLine,  RiLock2Line } from "react-icons/ri";

const Newsletter = () => {
  return (
    <div>
        <Navbar />
    <section className="py-10  sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Want to schedule a meet?</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500 dark:text-gray">Subscribe to my newsletter to either talk to me about anything or you want to give me feedback on my blogs.</p>
        </div>

       

        <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
            <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-purple-600 sm:focus-within:ring-1 sm:focus-within:ring-purple-600">
                <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                    <div className="flex-1 w-full min-w-0">
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                            
                        <label for="email" class="sr-only"></label>
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <RiAtLine />
                                </div>
                            <input
                            
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-purple-600"
                                required=""
                            />
                            
                        </div>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-purple-700 focus:bg-purple-700">
                        Get instant access
                        
                    </button>
                </div>
            </div>
        </form>

        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0 text-gray-600">
            <RiLock2Line />
            <span className="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
        </div>
    </div>
    
</section>
</div>
  )
}

export default Newsletter


