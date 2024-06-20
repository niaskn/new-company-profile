const NotFoundPage = () => {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-ray-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
          <a
          href="/"
          className="px-4 py-2 bg-pink-300 text-white rounded-lg hover:bg-pink-700 transition">Go Back Home</a>
      </div>
    )
  }
  
  export default NotFoundPage