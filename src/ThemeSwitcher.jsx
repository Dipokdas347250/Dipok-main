import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  return (
    // <section >
    //     <div className=" flex flex-col gap-4 pr-3 pl-2 py-5 bg-[#000]   fixed top-[36%] left-0 shadow-md rounded-r-2xl z-50 ">
    //         <button
    //     onClick={() => changeTheme('bg-white', 'text-black')}
    //     className="w-[50px] h-[50px] bg-[#fff] text-black  rounded-full hover:bg-gray-300"
    //   >
    //     Main
    //   </button>
    //   <button
    //     onClick={() => changeTheme('bg-red-500', 'text-white')}
    //     className="w-[50px] h-[50px] bg-red-500 text-white  rounded-full hover:bg-red-600"
    //   >
    //     Red
    //   </button>
    //   <button
    //     onClick={() => changeTheme('bg-blue-600', 'text-white')}
    //     className="w-[50px] h-[50px] bg-blue-600 text-white  rounded-full hover:bg-blue-700"
    //   >
    //     Blue
    //   </button>
    //   <button
    //     onClick={() => changeTheme('bg-yellow-300', 'text-black')}
    //     className="w-[50px] h-[50px] bg-yellow-300 text-black  rounded-full hover:bg-yellow-400"
    //   >
    //     Yellow
    //   </button>
      
    //   <button
    //     onClick={() => changeTheme('bg-[#006211]', 'text-[#aaff00]')}
    //     className="w-[50px] h-[50px] bg-[#006211] text-[#aaff00]  rounded-full hover:bg-[#8ea98d]"
    //   >
    //     Green
    //   </button>
    // </div>
    // </section>
    <section>
  <div className="fixed left-2 bottom-[10%] z-50 group">
    <div className=" text-5xl rounded-full flex items-center text-center justify-center shadow-lg cursor-pointer">
      🎨
    </div>
    <div className="absolute p-2 bg-[#000] bottom-[-50px] left-[60px] flex flex-col gap-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
      {[
        { label: 'Main', bg: 'bg-white', text: 'text-black' },
        { label: 'Red', bg: 'bg-red-500', text: 'text-white' },
        { label: 'Blue', bg: 'bg-blue-600', text: 'text-white' },
        { label: 'Yellow', bg: 'bg-yellow-300', text: 'text-black' },
        { label: 'Green', bg: 'bg-[#006211]', text: 'text-[#aaff00]' },
      ].map((theme, index) => (
        <button
          key={index}
          onClick={() => changeTheme(theme.bg, theme.text)}
          className={`w-[20px] h-[20px] ${theme.bg} ${theme.text} rounded-full   cursor-pointer`}
        />
      ))}
    </div>
    
  </div>
</section>

  );
};

export default ThemeSwitcher;
