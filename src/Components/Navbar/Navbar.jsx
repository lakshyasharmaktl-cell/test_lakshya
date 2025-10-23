import { useState, useEffect } from 'react';
import { 
  HandPlatter, 
  ShoppingBag, 
  User, 
  Menu, 
  X,
  Crown,
  Search,
  Bell,
  Settings
} from 'lucide-react';

// Import react-spinners
import { 
  ClipLoader,
  PulseLoader,
  ScaleLoader,
  BeatLoader,
  FadeLoader,
  SyncLoader,
  MoonLoader,
  RingLoader,
  BounceLoader,
  DotLoader
} from 'react-spinners';

// Loading Spinner Component with react-spinners
export function LoadingSpinner({ 
  size = 40, 
  color = '#8b5cf6', 
  isLoading = true,
  type = 'clip',
  text = 'Loading...'
}) {
  const spinnerComponents = {
    clip: ClipLoader,
    pulse: PulseLoader,
    scale: ScaleLoader,
    beat: BeatLoader,
    fade: FadeLoader,
    sync: SyncLoader,
    moon: MoonLoader,
    ring: RingLoader,
    bounce: BounceLoader,
    dot: DotLoader
  };

  const SpinnerComponent = spinnerComponents[type] || ClipLoader;

  if (!isLoading) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <SpinnerComponent 
        size={size} 
        color={color}
        loading={isLoading}
      />
      {text && (
        <span 
          className="text-sm font-medium"
          style={{ color }}
        >
          {text}
        </span>
      )}
    </div>
  );
}

// Loading Overlay Component
export function LoadingOverlay({ 
  isLoading, 
  message = 'Loading amazing content...',
  type = 'ring'
}) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 min-w-[200px]">
        <LoadingSpinner 
          size={50} 
          color="#8b5cf6" 
          type={type}
        />
        <p className="text-gray-700 font-medium text-center">
          {message}
        </p>
      </div>
    </div>
  );
}

// Navbar with Loading States using react-spinners
export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState('comfort');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingType, setLoadingType] = useState('ring');
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ['laxxy', 'destory', 'speed', 'safety'];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading for demo purposes
  const simulateLoading = (type = 'ring') => {
    setLoadingType(type);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <>
      <LoadingOverlay 
        isLoading={isLoading} 
        message="Preparing your experience..."
        type={loadingType}
      />
      
      <nav className={`flex justify-between items-center text-4xl py-4 px-6 sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-violet-600/95 backdrop-blur-md shadow-lg' 
          : 'bg-violet-600'
      } text-white`}>
        {/* Logo with Loading State */}
        <div className="flex items-center gap-4">
          <h1 
            className='text-2xl font-bold cursor-pointer transition-transform hover:scale-105 active:scale-95'
            onClick={() => simulateLoading('bounce')}
          >
            cars
          </h1>
          
          {/* Small loading indicator for navbar */}
          {isLoading && (
            <div className="transition-all duration-300">
              <LoadingSpinner 
                size={20} 
                color="#ffffff" 
                type="dot"
                text=""
              />
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-8 text-lg'>
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`relative px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeLink === item 
                    ? 'text-violet-200 font-semibold' 
                    : 'hover:text-violet-200 hover:bg-violet-700/50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(item);
                  simulateLoading('sync');
                }}
              >
                {item}
                {activeLink === item && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-300" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Section */}
        <div className='hidden md:flex items-center gap-6'>
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg bg-violet-700/50 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-200"
            />
            <Search 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-300" 
            />
          </div>

          {/* Notification Bell */}
          <div className="relative">
            <button 
              className="p-2 rounded-lg hover:bg-violet-700 transition-colors duration-200 relative"
              onClick={() => simulateLoading('pulse')}
            >
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-violet-600"></span>
            </button>
          </div>

          {/* Auth Buttons with Loading */}
          <div className='flex gap-4 text-lg'>
            <button
              className='px-4 py-2 rounded-lg hover:bg-violet-700 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2'
              onClick={() => simulateLoading('beat')}
            >
              Login
            </button>
            <button
              className='px-4 py-2 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-100 transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg flex items-center gap-2'
              onClick={() => simulateLoading('scale')}
            >
              Sign In
            </button>
          </div>

          {/* Icons */}
          <div className='flex gap-4'>
            {[
              { Icon: HandPlatter, type: 'clip' },
              { Icon: ShoppingBag, type: 'moon' },
              { Icon: User, type: 'ring' },
              { Icon: Settings, type: 'fade' }
            ].map(({ Icon, type }, index) => (
              <div
                key={index}
                className='p-2 rounded-lg hover:bg-violet-700 cursor-pointer transition-all duration-200 hover:scale-110 hover:rotate-3 active:scale-95'
                onClick={() => simulateLoading(type)}
              >
                <Icon size={24} />
              </div>
            ))}
          </div>

          {/* Premium Badge */}
          <div 
            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => simulateLoading('bounce')}
          >
            <Crown size={20} />
            <span className="text-sm font-semibold">Premium</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden p-2 rounded-lg hover:bg-violet-700 transition-all duration-200 hover:scale-110 active:scale-95'
          onClick={() => setShow(!show)}
        >
          {show ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu Overlay */}
        {show && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setShow(false)}
            />
            
            {/* Menu Panel */}
            <div className="fixed top-0 right-0 bottom-0 w-64 bg-violet-600 z-50 md:hidden p-6 overflow-y-auto">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setShow(false)}
                  className="p-2 rounded-lg hover:bg-violet-700 transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Search Bar Mobile */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-violet-700/50 text-white placeholder-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <Search 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-300" 
                />
              </div>

              {/* Mobile Menu Items */}
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                        activeLink === item 
                          ? 'bg-violet-700 text-white shadow-inner' 
                          : 'text-violet-100 hover:bg-violet-700 hover:translate-x-2'
                      }`}
                      onClick={() => {
                        setActiveLink(item);
                        setShow(false);
                        simulateLoading('sync');
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Premium Section Mobile */}
              <div 
                className="mt-6 p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
                onClick={() => {
                  setShow(false);
                  simulateLoading('bounce');
                }}
              >
                <div className="flex items-center gap-2">
                  <Crown size={24} />
                  <span className="font-semibold">Go Premium</span>
                </div>
                <p className="text-sm mt-1 opacity-90">Unlock exclusive features</p>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  className="w-full py-3 bg-white text-violet-600 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  onClick={() => {
                    setShow(false);
                    simulateLoading('scale');
                  }}
                >
                  Sign In
                </button>
                <button
                  className="w-full py-3 border-2 border-white text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                  onClick={() => {
                    setShow(false);
                    simulateLoading('beat');
                  }}
                >
                  Login
                </button>
              </div>

              {/* Mobile Icons */}
              <div className="flex justify-around gap-4 mt-8 pt-6 border-t border-violet-500">
                {[
                  { Icon: HandPlatter, label: 'Services', type: 'clip' },
                  { Icon: ShoppingBag, label: 'Cart', type: 'moon' },
                  { Icon: Bell, label: 'Alerts', type: 'pulse' },
                  { Icon: User, label: 'Profile', type: 'ring' }
                ].map(({ Icon, label, type }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1 cursor-pointer transition-all duration-200 hover:scale-110 active:scale-95"
                    onClick={() => {
                      setShow(false);
                      simulateLoading(type);
                    }}
                  >
                    <div className="p-2 rounded-lg hover:bg-violet-700">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

// Usage example in your main app
export function App() {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => setPageLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Initial page loader */}
      {pageLoading && (
        <div className="fixed inset-0 bg-violet-600 z-50 flex items-center justify-center">
          <div className="text-center text-white">
            <MoonLoader size={60} color="#ffffff" />
            <p className="mt-4 text-xl font-semibold">Welcome to Cars</p>
            <p className="mt-2 text-violet-200">Loading your premium experience...</p>
          </div>
        </div>
      )}
      
      <Navbar />
      
      {/* Your main content here */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Premium Car Collection</h1>
        {/* Your content */}
      </main>
    </div>
  );
}