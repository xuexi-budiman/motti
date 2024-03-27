import Link from 'next/link'

export default function Contact() {
  return (
    <div className="w-full overflow-auto bg-white">
      <div className="grid grid-row-5 gap-10">

        <div className="grid grid-cols-3 gap-2 w-full">
          <div>
            <img className="h-80 w-auto" src="https://i.pinimg.com/564x/d4/1e/3e/d41e3e98271579bf26de89e7a892a4e6.jpg" />
          </div>
          <div>
            <img className="h-80 w-auto" src="https://i.pinimg.com/564x/07/31/17/0731177f0b8a155e37d0893fc8929c64.jpg" />
          </div>
          <div>
            <img className="h-80 w-auto" src="https://i.pinimg.com/564x/0d/83/f7/0d83f7aad57a7b0e8f602a98ad937853.jpg" />
          </div>
        </div>

        <div className="min-h-80 grid grid-cols-2 gap-5">
          <div className="grid grid-rows-2 gap-3 text-right text-black">
            <div className="flex flex-col justify-end">
              <p className="font-semibold text-lg">Revolutioning the Dining Experience</p>
              <h1 className="font-bold text-8xl">MottiMenu</h1>
            </div>
            <div>
              <p>
                A cutting-edge server designed to transform how restaurants
              </p>
              <p>
                engage with their customers. By seamlessly integrating menu browsing
              </p>
              <p>
                and ordering into a single, user-friendly platform, empowers guests to
              </p>
              <p>
                take control of their dining experience from the moment they sit down.
              </p>
            </div>
          </div>

          <div>
            <img src="https://i.pinimg.com/564x/c3/07/77/c30777109ea365c05df4e090e4a663ad.jpg" />
          </div>

        </div>

        <div className="h-40" />

        <div style={{ height: '800px' }} className="bg-blend-darken coverw-full bg-[url('https://i.pinimg.com/564x/fc/43/e7/fc43e75c68d326e08803425185f29ff6.jpg')]">
          <div className="grid grid-rows-3 gap-6 text-white p-8">
            <div className="pt-5">
              <h1 className="flex flex-col justify-end font-black text-6xl">
                Simplicity at Your Fingertips
              </h1>
              <br />
              <p className="font-semibold text-lg">
                It's a comprehensive service solution that caters to the needs of both the restaurant and its patrons. <br /> With an intuitive interface, customers can effortlessly peruse the menu, making selections based on <br /> their preferences or dietary requirements.
              </p>
            </div>
            <div className="pt-5 text-right">
              <h1 className="flex flex-col justify-end font-black text-6xl">
                Enhanced Satisfaction
              </h1>
              <br />
              <p className="font-semibold text-lg">
                Keeps customers informed and engaged, providing detailed descriptions, mouth-watering images, <br />and even recommended pairings to enhance their meal. With just a few taps, orders are sent directly <br />to the kitchen, reducing wait times and minimizing errors. This streamlined process not only <br />improves operational efficiency but also significantly enhances customer satisfaction.
              </p>
            </div>
            <div className="pt-5">
              <h1 className="flex flex-col justify-end font-black text-6xl">
                Empower Restaurants
              </h1>
              <br />
              <p className="font-semibold text-lg">
                Offers a powerful tool to manage orders, update menu items in real-time, and gather insights into customer preferences. <br />This helps establishments tailor their offerings and promotions, ensuring they meet the evolving <br />tastes of their clientele. Restaurants can not only increase their efficiency but also create memorable <br />dining experiences that keep customers coming back.
              </p>
            </div>
          </div>
        </div>

        <div className="h-40" />

        <div className="p-32 text-black font-black text-4xl">
          <Link href="/pricing/page.tsx">
            <button className="ziButton">
              Check out pricing and planning 
            </button>
          </Link>
          <br />
          <button className="ziButton">
            Meet our expert support team
          </button>
          <br />
          <button className="ziButton">
            Get started right now
          </button>
          <br />
          <button className="ziButton">
            Contact us
          </button>
        </div>

        <div className="h-10" />

        <div className="text-center text-black">
          <p>
            © 2024 Block, Inc.
          </p>
        </div>

        <div className="h-4" />
      </div>
    </div>
  )
}