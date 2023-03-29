import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import { cloneElement, ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = () => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
