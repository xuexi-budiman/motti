"use client";

import { Gloria_Hallelujah } from "next/font/google";
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: ["400"],
});

const features = [
  {
    name: 'QR Code menu + integrated POS System',
    description:
      'A sole player in the industry, Motti Menu allows customer to scroll through the menu and pay with the tip of their hand.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Transaction',
    description:
      'Description about how motti handle transaction and protocols',
    icon: LockClosedIcon,
  },
  {
    name: 'Something else',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Something else',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]



export default function Home() {
  return (
<<<<<<< Updated upstream
    <p> </p>
=======
    <div className="container mx-auto bg-gradient-to-b from-gray-900 to-gray-1000">
      <div className="mx-auto font-gl py-24 sm:py-32 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col space-y-5 mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-gray-300"></h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
              SCAN, TRANSACT, DINE
            </p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl ">
                (REPEAT)<span className="inline-block align-text-top text-base">4</span>
              </p>
              
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Motti Menu changes the way customer and restaurant interact.
              </p>
          </div>
          <img src="mad_at_restaurant.jpg" alt="" />
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-300">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-gray-300">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
>>>>>>> Stashed changes
  );
}
