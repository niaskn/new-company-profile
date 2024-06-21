export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-y-10 w-full">
        <section className="mt-40 mb-16 grid grid-cols-1 lg:grid lg:grid-cols-2 mx-20 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1">
          <iframe
            className="w-full h-full object-contain"
            src="https://www.youtube.com/embed/1jdD9T-Kj8s?si=rFl2Vuo2UUpZocHy"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="p-4 flex flex-col flex-wrap justify-center items-center text-center space-x-5">
            <h1 className="text-7xl text-pink-800 font-bold mx-4 mb-4">
              Welcome Beautygang!
            </h1>
            <p className="text-xl text-justif mx-5 text-brown-600">
              We provide the best beauty products just for you! We
              are committed to delivering beauty solutions that are effective,
              safe, and eco-friendly. Explore our
              collection and let your natural beauty shine every day.
            </p>
          </div>
        </section>
        <section className="mb-16 bg-pink-300">
          <div className="mx-10 p-10 h-full">
            <h2 className="text-3xl text-pink-800 font-bold mb-4">
              <a href="/about-us">About Us</a>
            </h2>
            <p className="text-lg text-brown-600">
              We are a leading company in the beauty industry, dedicated to
              providing high-quality products and services. Our team is
              committed to excellence and innovation.
            </p>
          </div>
        </section>
        <section className="mb-16 bg-pink-300">
          <div className="p-10 mx-10 h-full">
            <h2 className="text-3xl font-bold text-pink-800 mb-2">
              <a href="/products">Our Products</a>
            </h2>
            <div className="mb-2">
              <h3 className="text-lg font-bold text-pink-700 mb-1">
                Radiant Glow Serum
              </h3>
              <p className="text-md text-brown-300">
                Serum wajah dengan vitamin C untuk kulit cerah bersinar.
              </p>
              <button className="hover:text-gray-500">
                <a href="/products">learn more...</a>
              </button>
            </div>
            <div className="mb-2">
              <h3 className="text-lg font-bold text-pink-700 mb-1 mt-4">
                UV Protection Day Cream
              </h3>
              <p className="text-md text-brown-100">
                Day cream SPF 30 melindungi kulit dari sinar UV.
              </p>
              <button className="hover:text-gray-500">
                <a href="/products">learn more...</a>
              </button>
            </div>
          </div>
        </section>
        <section className="mb-16 bg-pink-300">
          <div className="p-10 mx-10 h-full">
            <h2 className="text-3xl font-bold text-pink-800 mb-2">
              What Our Beautygang say
            </h2>
            <blockquote>
              <p>&quot;This is the best product I have ever used!&quot;</p>
              <cite>- Satisfied Customer</cite>
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}
