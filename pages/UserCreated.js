import { HiCheckCircle } from 'react-icons/hi'
import { Blob1, Blob2, Blob3, Blob4, Blob5, Blob6 } from '../components/Blobs'

function UserCreated() {
    return (
        <>
        <div className="w-full h-full relative z-1">
            {/* Blob 1 */}
            <div className="z-2 absolute w-40 h-40 top-1 right-0 animate-spin-slow">
                <Blob1 />
            </div>

            {/* Blob 2 */}
            <div className="z-2 absolute w-32 h-32 top-12 right-20 animate-spin-slow">
            <Blob2 />
            </div>

            {/* Blob 3 */}
            <div className="z-2 absolute w-44 h-32 top-12 left-0 animate-fade">
            <Blob3 />
            </div>

            {/* Blob 4  */}
            <div className="z-2 absolute w-20 h-20 top-14 left-0 animate-spin-slow">
            <Blob4 />
            </div>

            {/* Blob 5 */}
            <div className="z-2 absolute -left-14 rotate-45 w-40 top-48">
            <Blob5 />
            </div>

            {/* Blob 6  */}
            <div className="z-2 absolute -right-20 rotate-45 w-48 top-64">
            <Blob6 />
            </div>
        </div>
        <div className="z-2 w-full h-auto mx-auto flex-col center-content space-y-4">
            <center><HiCheckCircle className="w-20 h-20  text-light-green mt-[80%] md:mt-[15%]"/></center>
            <h3 className="text-3xl font-bold text-dark-maroon text-center ">Your Account is Ready</h3>
            <center><a href="/" className="text-base font-thin underline text-dark-green text-center">back to login</a></center>
        </div>
        </>

    )
}

export default UserCreated
