import WavingHandIcon from '@mui/icons-material/WavingHand';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer.", "Frontend Developer.", "Backend Developer."],
    loop: 0
  })

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle,_#48329C,_#1C1A1A)] text-customCol_3 ">
      <div className="flex max-[760px]:mt-12 max-[760px]:ml-4 mt-4 mx-4 gap-4 max-[760px]:flex-col max-[760px]:mx:auto">
      <div className="p-4 flex flex-col text-center rounded-lg bg-black w-2/3 text-2xl max-[760px]:h-80 max-[760px]:w-full"><span className="text-8xl font-medium mb-2">Hi <WavingHandIcon sx={{ color: '#EBA352', fontSize: { xs: '2.5rem', md: '4rem', xl: '5rem' }}} /></span><span><span className="text-2xl font-medium">I am </span><span className=" font-bold">Achala Nipun</span></span><span>an</span><span>Undergraduate </span><span className="font-bold mt-2">{text}<Cursor /></span></div>
      <NavLink to="/work" className="p-4 flex flex-col justify-center items-center rounded-lg bg-black w-1/3 text-8xl font-bold max-[760px]:text-6xl max-[760px]:w-1/2"><span>100+</span><span className='text-4xl max-[760px]:text-2xl'>Projects</span><span to="/work" className='text-xl max-[760px]:text-base hover:text-white'>view</span></NavLink>
      </div>
      <div className="bg-black">
      <div className="bg-white"></div>
      <div className="bg-white"></div>
      </div>
    </div>
  )
}

export default Home