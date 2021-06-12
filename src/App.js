import React, { useEffect } from 'react';
import { PortfolioProvider } from './context';
import Home from './pages/home';
import { projects, profile } from './data';
import publicIp from 'public-ip';
import {
  browserName,
  browserVersion,
  deviceType,
  engineName,
  engineVersion,
  fullBrowserVersion,
  getUA,
  mobileModel,
  mobileVendor,
  osName,
  osVersion,
} from 'react-device-detect';

export default function App() {
  const device = {
    browserName,
    browserVersion,
    deviceType,
    engineName,
    engineVersion,
    fullBrowserVersion,
    getUA,
    mobileModel,
    mobileVendor,
    osName,
    osVersion,
  };
  const sendDeviceInformation = (device, ip) => {
    const scriptURL = process.env.REACT_APP_SPREADSHEETS_DEVICE;
    let formData = new FormData();
    formData.append('deviceinformation', `${JSON.stringify(device)}`);
    formData.append('ip', ip);
    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => {})
      .catch((error) => {});
  };
  useEffect(() => {
    (async function sendDeviceInfo() {
      try {
        const ip = await publicIp.v4();
        if (sessionStorage.getItem('YourIPAdDresS') !== ip) {
          sendDeviceInformation(device, ip);
          sessionStorage.setItem('YourIPAdDresS', ip);
        }
      } catch (error) {}
    })();
  }, []);
  return (
    <PortfolioProvider value={{ projects, profile }}>
      <Home />
    </PortfolioProvider>
  );
}
