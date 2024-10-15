import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="max-w-4xl mx-auto p-8">
          <div className="flex flex-col lg:flex-row items-center gap">
            <div className="lg:w-1/3 mt-6 lg:mr-10">
              <img
                className="rounded-md object-cover shadow-lg"
                src="./src/assets/profile.JPG"
                alt="Nobel Shan Setiono"
              />
              <button className="bg-gray-800 hover:bg-gray-500 text-white py-2 size-full rounded-full mt-5">
                Download CV
              </button>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <p className="text-gray-500 text-2xl">Hello, I'm</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-3">
                Nobel Shan Setiono
              </h1>
              <p className="text-gray-500 text-lg mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                delectus tempore at nesciunt quisquam autem, incidunt nulla porro
                perferendis quae, ut nam illum enim.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
            Work Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Junior Laboratory Assistant - BINUS University
              </h3>
              <p className="text-gray-600">
                <strong>February 2023 - Present</strong>
              </p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Activist - Bina Nusantara Computer Club
              </h3>
              <p className="text-gray-600">
                <strong>November 2022 - November 2023</strong>
              </p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Get In Touch
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Interested in collaborating or just want to say hi? Feel free to drop me a message!
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-indigo-500 hover:underline">nobelshans@gmail.com</a>
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +62 897-747-3913
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> Jakarta, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
