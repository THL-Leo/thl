import {TbSun, TbMoon} from 'react-icons/tb';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const {resolvedTheme, setTheme} = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(resolvedTheme === 'dark');

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={handleClick} color='inherit'>
      {isDarkMode ? (
        <TbMoon className='h-6 w-6' />
      ) : (
        <TbSun className='h-6 w-6' />
      )}
    </button>
  );
};

export default ThemeSwitch;
