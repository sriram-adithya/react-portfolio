import React from 'react'

const About = () => {
    return (
        <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>

                <p className="text-xl mt-20">
                    Hello World! I'm Sriram Adithya, based out of Chennai, India. I have been working in Accenture for the past 2 years as a devops engineer. On a daily Basis I will be monitoring applications with a use of Kibana, Appd, Grafana etc, Patching up servers and Maintaining applications in Cloud Foundary where it was deployed. Depends on the requirment will be working on features and leveraging my skills.
                </p>

                <br />

                <p className='text-xl'>33
                    Currently I am learning Front-End Web Developer Fellowship in Nextleap platform where I can able to develop my skill-set from industy experts. I fall in love with web technologies like React, Tailwind and they are many more which I need to explore, I have been doing couple of projects to be strong in basic fundamentals.I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your weird artistic project ideas or app proposals
                </p>
            </div>
        </div>
    )
}

export default About