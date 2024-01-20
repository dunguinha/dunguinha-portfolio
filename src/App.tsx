import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import {
  GroupBox, Window, WindowContent, styleReset, AppBar, Button, Handle, Toolbar, Checkbox,
  Tab,
  TabBody,
  Tabs,
  WindowHeader,
  NumberInput,
  Avatar,
} from 'react95';
import original from 'react95/dist/themes/original';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const App = () => {
  const [state, setState] = useState({ activeTab: 'Shoes' });
  const [about, setAbout] = useState('');
  const { activeTab } = state;

  const handleChange = (value: string) => setState({ activeTab: value });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  return (
    <>
      <ThemeProvider theme={original}>
        <GlobalStyles />
        <div>
          <AppBar style={{ justifyContent: 'space-between', flexDirection: 'row', zIndex: '100' }}>
            <p style={{ lineHeight: 1.3, fontSize: 30, padding: 5 }}>
              My portfolio!
            </p>
            <Toolbar>
              <Handle size={35} />
              <a href="#languages">
                <Button variant='menu'>
                  Languages
                </Button>
              </a>
              <Button variant='menu'>
                Projects
              </Button>
              <Handle size={35} />
            </Toolbar>
          </AppBar>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <Window style={{ display: 'flex', flexDirection: 'row' }} className='items-center'>
            <Avatar square size={200} className='p-1'>
              <img src='https://media.licdn.com/dms/image/D4D03AQFV7DnPw8VoeQ/profile-displayphoto-shrink_200_200/0/1696619751143?e=1710979200&v=beta&t=MFDsOko_STeUWo8zWYFViB5YTFV7iqPQ8CDSgg4pPLQ' />
            </Avatar>
            <WindowContent>
              <GroupBox label='Apresentation' style={{ fontSize: 42 }}>
                Hey! My name is Cristhian Felipe!
              </GroupBox>
            </WindowContent>
          </Window>
        </div>
        <div id='languages'>
          <Window className='w-full'>
            <WindowHeader>Languages</WindowHeader>
            <WindowContent>
              <Tabs rows={2} value={activeTab} onChange={handleChange}>
                <Tab value='TikTok Downloader'>TikTok Downloader</Tab>
                <Tab value='CEP Consulter'>CEP Consulter</Tab>
                <Tab value='1'>project coming soon</Tab>
                <Tab value='2'>project coming soon</Tab>
                <Tab value='3'>project coming soon</Tab>
                <Tab value='4'>project coming soon</Tab>
                <Tab value='5'>project coming soon</Tab>
                <Tab value='6'>project coming soon</Tab>
                <Tab value='7'>project coming soon</Tab>
              </Tabs>
              <TabBody >
                <p>
                  Coming son
                </p>
                <Window className='w-full h-10'>
                  <WindowContent className='w-full h-full'>
                    <img src='' className='w-full h-full'>
                    </img>
                  </WindowContent>
                </Window>
              </TabBody>
            </WindowContent>
          </Window>
        </div>
        <div className='mt-44'>
          <Window className='w-full'>
            <WindowHeader>About me</WindowHeader>
            <WindowContent style={{ display: 'flex', flexDirection: 'row' }}>
              <div className='w-full'>
                <Tabs value={activeTab} onChange={handleChange}>
                  <Tab value={0}>Shoes</Tab>
                  <Tab value={1}>Accesories</Tab>
                  <Tab value={2}>Clothing</Tab>
                </Tabs>
                <TabBody style={{ height: 300 }}>
                  {activeTab === '0' && (
                    <div>
                      <GroupBox label='Order:'>
                        <div style={{ padding: '0.5em 0 0.5em 0' }}>Amount:</div>
                        <NumberInput width='100%' min={0} defaultValue={0} />
                        <br />
                        <Checkbox
                          name='shipping'
                          value='fast'
                          label='Fast shipping'
                          onChange={() => null}
                          defaultChecked
                        />
                      </GroupBox>
                    </div>
                  )}
                  {activeTab === '1' && (
                    <div>
                      <div>Coming soon</div>
                    </div>
                  )}
                  {activeTab === '2' && (
                    <div>
                      <div>Coming soon</div>
                    </div>
                  )}
                </TabBody>
              </div>
            </WindowContent>
          </Window>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App;