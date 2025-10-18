import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HandPlatter, ShoppingBag, User, Menu, X,Crown} from 'lucide-react';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState('comfort');

  const menuItems = ['laxxy', 'destory', 'speed', 'safety'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.nav
      className='flex justify-between items-center text-4xl bg-violet-600 text-white py-4 px-6 relative'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      {/* Logo */}
      <motion.h1 
        className='text-2xl font-bold cursor-pointer'
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -2, 2, 0]
        }}
        whileTap={{ scale: 0.95 }}
      >
        cars
      </motion.h1>

      {/* Desktop Menu */}
      <motion.ul 
        className='hidden md:flex gap-8 text-lg'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {menuItems.map((item, index) => (
          <motion.li key={item} variants={itemVariants}>
            <motion.a
              href="#"
              className={`relative px-4 py-2 rounded-lg transition-colors ${
                activeLink === item ? 'text-violet-200' : 'hover:text-violet-200'
              }`}
              onClick={() => setActiveLink(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
              {activeLink === item && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Desktop Right Section */}
      <motion.div 
        className='hidden md:flex items-center gap-6'
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Auth Buttons */}
        <div className='flex gap-4 text-lg'>
          <motion.button
            className='px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.button
            className='px-4 py-2 bg-white text-violet-600 rounded-lg font-medium hover:bg-violet-100 transition-colors'
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 12px rgba(255,255,255,0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
        </div>

        {/* Icons */}
        <motion.div 
          className='flex gap-4'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[HandPlatter, ShoppingBag, User].map((Icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                color: '#e9d5ff'
              }}
              whileTap={{ scale: 0.9 }}
              className='p-2 rounded-lg hover:bg-violet-700 cursor-pointer transition-colors'
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Mobile Menu Button */}
      <motion.button
        className='md:hidden p-2 rounded-lg hover:bg-violet-700'
        onClick={() => setShow(!show)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={show ? 'close' : 'menu'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {show ? <X size={30} /> : <Menu size={30} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {show && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShow(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-64 bg-violet-600 z-50 md:hidden p-6"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={() => setShow(false)}
                  className="p-2 rounded-lg hover:bg-violet-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <motion.ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li key={item}>
                    <motion.a
                      href="#"
                      className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        activeLink === item 
                          ? 'bg-violet-700 text-white' 
                          : 'text-violet-100 hover:bg-violet-700'
                      }`}
                      onClick={() => {
                        setActiveLink(item);
                        setShow(false);
                      }}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Mobile Auth Buttons */}
              <motion.div 
                className="mt-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="w-full py-3 bg-white text-violet-600 rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign In
                </motion.button>
                <motion.button
                  className="w-full py-3 border-2 border-white text-white rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Login
                </motion.button>
              </motion.div>

              {/* Mobile Icons */}
              <motion.div 
                className="flex justify-center gap-6 mt-8 pt-8 border-t border-violet-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {[HandPlatter, ShoppingBag, User].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 cursor-pointer"
                  >
                    <Icon size={28} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}