import Image from 'next/image';
import logo from '../../public/images/logo.png';
import Link from 'next/link';
import TotalExercises from './count/TotalExercises';
import TotalSaved from './count/TotalSaved';
const Navbar = () => {
    return (
        <div>
            {/* Navbar sub container */}
            <div className='flex justify-between container mx-auto py-3 px-1'>
                {/* Left side logo and title */}
                <div className='flex gap-2 items-center'>
                    <Image src={logo} alt="fit-log logo" height={25} width={25} />
                    <span className='uppercase font-bold'>fitlog</span>
                </div>
                {/* middle navigations container */}
                <div className='flex items-center gap-6'>
                    <Link href="/" className='block hover:text-[#ccff00]'>Workout</Link>
                    <Link href="/my-plan" className='block hover:text-[#ccff00]'>My Plan</Link>
                </div>
                {/* right side container  */}
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <span className='block'>Plan</span>
                        <span className='flex items-center justify-center bg-[#ccff00] border h-5 w-5 rounded-full text-black p-0.5'><TotalExercises/></span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='block'>Saved</span>
                        <span className='block'><TotalSaved/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;