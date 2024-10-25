import  { useState, useRef } from 'react';
import PreviewLink from '../misc/preview-link';
import Transition from '../utils/transitions';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">


         {/* Stats */}
         <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

{/* 1st item */}
<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">41%</h4>
  <p className="text-gray-600 text-center">Longer tenure where there's an internal talent mobility strategy</p>
</div>

{/* 2nd item */}
<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">95%</h4>
  <p className="text-gray-600 text-center">S&P 500 companies say organisational agility is critical or very important</p>
</div>

{/* 3rd item */}
<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">18%</h4>
  <p className="text-gray-600 text-center">Higher customer retention when employees are engaged</p>
</div>
</div>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">We simulate real-world business cases to coach your team for what's next</h1>
            <p className="text-xl text-gray-600">With bespoke development plans which connect individual aspirations to your company's vision</p>
          </div>


          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Features</h3>
                <p className="text-xl text-gray-600">We personal professional development for your employee's unique aspirations - whether that is switching departments, leading people or making strategic decisions.</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Homework</div>
                    <div className="text-gray-600">Read and analyse a ten page document written from the viewpoint of a real person leading a real organisation required to make a decision</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Discuss and Engage</div>
                    <div className="text-gray-600">Debate with our AI on identifying thbe best path forward. While we facilitate the discussion, it's driven by individual comments and experiences</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Reflection</div>
                    <div className="text-gray-600">We prepare individuals for their future roles, where they will face time-sensitive decisions with limited information</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="h-full flex items-center max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded w-full" src="assets/multi-platform.png" /> 
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded w-full" src="assets/source.gif" /> 
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded w-full" src="assets/obs-sync.gif" /> 
                  </div>
                </Transition>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
