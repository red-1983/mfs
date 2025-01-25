import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Header from './components/header/Header.js';
import Footer from './components/Footer.js';
import Home from './components/main/Home.js';
import About from './components/main/About.js';
import Contacts from './components/main/Contacts.js';
import NotFound from './components/main/NotFound.js';
import Menu from './components/header/Menu.js';
import Shop from './components/main/Shop.js';
import Wholesale from './components/main/Wholesale.js';
import Services from './components/main/Services.js';
import './App.css';
import Logo from './UI/logo/Logo.js';
import { useMatchMedia } from './hooks/useMatchMedia.js';
import PhoneList from './UI/phoneList/PhoneList.js';
import ContactsList from './UI/contactsList/ContactsList.js';
import ButtonMenu from './UI/buttonMenu/ButtonMenu.js';
import Block1 from './UI/blocks/block1/Block1.js';

function App() {
  /*i-параметр для массива PhoneList*/
  const { isTablet, isLaptop, isDesktop } = useMatchMedia();
  const screenStyle = isDesktop
    ? 'isDesktop'
    : isLaptop
      ? 'isLaptop'
      : isTablet
        ? 'isTablet'
        : 'isMobile';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <BrowserRouter>
      <Header style={screenStyle}>
        <div>
          <Logo style={screenStyle} />

          {screenStyle === 'isDesktop' || screenStyle === 'isLaptop' ? (
            <div>
              <PhoneList i={0} />
              <PhoneList i={1} />
            </div>
          ) : (
            ''
          )}

          {screenStyle === 'isTablet' || screenStyle === 'isMobile' ? (
            <ButtonMenu onClick={toggleMenu} />
          ) : (
            ''
          )}
        </div>
        <Menu style={screenStyle} isOpen={isMenuOpen} />
      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About style={screenStyle} />} />
          <Route path="services" element={<Services />} />
          <Route path="shop" element={<Shop />} />
          <Route path="Wholesale" element={<Wholesale />} />
          <Route path="contacts" element={<Contacts style={screenStyle} />} />
          <Route path="*" element={<NotFound />} />
          <Route />
        </Routes>
      </main>
      <Footer style={screenStyle}>
        <div>
          {screenStyle === 'isDesktop' || screenStyle === 'isLaptop' ? (
            <div>
             
              <Menu style={'footer_menu'}/>
            </div>
          ) : (
            ''
          )}
          <ContactsList i={0} style={screenStyle} />
          <ContactsList i={1} hideLink={true} style={screenStyle} />
          {screenStyle === 'isDesktop' || screenStyle === 'isLaptop' ? (
            <Block1 style={screenStyle} />
          ) : (
            ''
          )}
        </div>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
