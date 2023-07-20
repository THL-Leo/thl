import {TbSun, TbMoon} from 'react-icons/tb';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const {resolvedTheme, setTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={handleClick}>
      {resolvedTheme === 'dark' ? (
        <TbSun className={'h-6 w-6'} />
      ) : (
        <TbMoon className={'h-6 w-6'} />
      )}
    </button>
  );
};

export default ThemeSwitch;
