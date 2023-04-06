import {TbSun, TbMoon} from 'react-icons/tb';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import Button from '@mui/material/Button';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const {resolvedTheme, setTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button className="duration-400 h-6 w-6 transition-opacity"
      onClick={handleClick}
      color='inherit'
    >
      <TbSun
        className={`absolute top-0 right-0 h-6 w-6 ${
          resolvedTheme === 'light' ? '' : 'rotate-180 opacity-0'
        }`}
      />
      <TbMoon
        className={`absolute top-0 right-0 h-6 w-6 ${
          resolvedTheme === 'dark' ? '' : 'rotate-180 opacity-0'
        }`}
      />
    </Button>
  );
};

export default ThemeSwitch;
