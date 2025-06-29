import './index.css'; // or './main.css' depending on your file
function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to Falco
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your React app is ready with Tailwind CSS!
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Getting Started
            </h2>
            <p className="text-gray-600 mb-4">
              Start building your components in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components</code> folder.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
