import flipkartPage from "../assets/portfolio/flipkartPage.jpg"
import weatherApp from "../assets/portfolio/weatherApp.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import navbar from "../assets/portfolio/navbar.jpg"


const portfolios =[
  {
    id:1,
    src: weatherApp,
    link: 'https://github.com/sriram-adithya/weatherApp'
  },
  {
    id:2,
    src: flipkartPage,
    link: 'https://github.com/sriram-adithya/Flipkart-Product-Page'
  },
  {
    id:3,
    src: reactSmooth,
    link: 'https://github.com/sriram-adithya/weatherApp'
  },
  {
    id:4,
    src: navbar,
    link: 'https://github.com/sriram-adithya/weatherApp'
  }, 
]

const Portfolio = () => {

  const handleGitLink = (link) =>{
    window.open(link, '_blank');
  }

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
              portfolios.map(({id, src, link}) =>(

                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                  {/* <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> */}
                  <button onClick={()=>handleGitLink(link)} className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>code</button>
                </div>
                </div>  
              ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio;