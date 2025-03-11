// import React, { useState } from 'react';

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);

//   const menuItems = [
//     {
//       id: 'shop',
//       icon: '🛒',
//       label: 'Shop',
//       submenu: [
//         { id: 'products', icon: '📦', label: 'Products' },
//         { id: 'new-arrivals', icon: '🆕', label: 'New Arrivals' },
//         { id: 'bestsellers', icon: '🏆', label: 'Bestsellers' },
//         { id: 'discounts', icon: '💰', label: 'Discounts' }
//       ]
//     },
//     {
//       id: 'resource',
//       icon: '📑',
//       label: 'Resource',
//       submenu: [
//         { id: 'framer-motion', icon: '✨', label: 'Framer motion' },
//         { id: 'navigation', icon: '🧭', label: 'Navigation' },
//         { id: 'components', icon: '🧩', label: 'Components' },
//         { id: 'all-resource', icon: '📁', label: 'All resource' }
//       ]
//     },
//     {
//       id: 'menu',
//       icon: '≡',
//       label: 'Menu',
//       submenu: [
//         { id: 'settings', icon: '⚙️', label: 'Settings' },
//         { id: 'profile', icon: '👤', label: 'Profile' },
//         { id: 'help', icon: '❓', label: 'Help & FAQ' },
//         { id: 'logout', icon: '🚪', label: 'Logout' }
//       ]
//     }
//   ];

//   return (
//     <div className="flex justify-center items-center p-4 h-screen">
//       <div className="relative">
//         {/* Main Navbar */}
//         <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 text-gray-200">
//           {menuItems.map((item) => (
//             <button
//               key={item.id}
//               className={`flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-700 transition-colors duration-200 ${
//                 activeMenu === item.id ? 'bg-gray-700' : ''
//               }`}
//               onMouseEnter={() => setActiveMenu(item.id)}
//             >
//               <span>{item.icon}</span>
//               <span>{item.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Dynamic Submenu for any menu item */}
//         {activeMenu && menuItems.find(item => item.id === activeMenu)?.submenu && (
//           <div 
//             className="absolute left-0 right-0 mt-2 p-4 bg-gray-800 rounded-xl text-gray-200 shadow-lg z-10"
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <div className="flex flex-col gap-3">
//               {menuItems.find(item => item.id === activeMenu).submenu.map((subItem) => (
//                 <button
//                   key={subItem.id}
//                   className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-left"
//                 >
//                   <span className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md">{subItem.icon}</span>
//                   <span>{subItem.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    {
      id: 'shop',
      icon: '🛒',
      label: 'Shop',
      submenu: [
        { id: 'products', icon: '📦', label: 'Products' },
        { id: 'new-arrivals', icon: '🆕', label: 'New Arrivals' },
        { id: 'bestsellers', icon: '🏆', label: 'Bestsellers' },
        { id: 'discounts', icon: '💰', label: 'Discounts' }
      ]
    },
    {
      id: 'resource',
      icon: '📑',
      label: 'Resource',
      submenu: [
        { id: 'framer-motion', icon: '✨', label: 'Framer motion' },
        { id: 'navigation', icon: '🧭', label: 'Navigation' },
        { id: 'components', icon: '🧩', label: 'Components' },
        { id: 'all-resource', icon: '📁', label: 'All resource' }
      ]
    },
    {
      id: 'menu',
      icon: '≡',
      label: 'Menu',
      submenu: [
        { id: 'settings', icon: '⚙️', label: 'Settings' },
        { id: 'profile', icon: '👤', label: 'Profile' },
        { id: 'help', icon: '❓', label: 'Help & FAQ' },
        { id: 'logout', icon: '🚪', label: 'Logout' }
      ]
    }
  ];

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  const menuButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const submenuVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const submenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="flex justify-center items-center p-4 h-screen">
      <div className="relative">
        {/* Main Navbar */}
        <motion.div 
          className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 text-gray-200 shadow-lg"
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors duration-200 ${
                activeMenu === item.id ? 'bg-gray-700' : ''
              }`}
              onMouseEnter={() => setActiveMenu(item.id)}
              variants={menuButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.span 
                animate={{ rotate: activeMenu === item.id ? [0, -10, 10, -10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.span>
              <span>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeMenu && menuItems.find(item => item.id === activeMenu)?.submenu && (
            <motion.div 
              className="absolute left-0 right-0 mt-2 p-4 bg-gray-800 rounded-xl text-gray-200 shadow-lg z-10 overflow-hidden"
              onMouseLeave={() => setActiveMenu(null)}
              variants={submenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={activeMenu}
            >
              <div className="flex flex-col gap-3">
                {menuItems.find(item => item.id === activeMenu).submenu.map((subItem, index) => (
                  <motion.button
                    key={subItem.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200 text-left"
                    variants={submenuItemVariants}
                    custom={index}
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {subItem.icon}
                    </motion.span>
                    <span>{subItem.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;