import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  GroupBox,
  Window,
  WindowContent,
  AppBar,
  Button,
  Handle,
  Toolbar,
  Checkbox,
  Tab,
  TabBody,
  Tabs,
  WindowHeader,
  NumberInput,
  Avatar,
} from 'react95';
import original from 'react95/dist/themes/original';
import { TypeAnimation } from 'react-type-animation';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import myImage from './assets/tiktk.jpeg';

const App = () => {
  const [state, setState] = useState({ activeTab: 'TikTok Downloader' });
  const [about, setAbout] = useState('0');
  const { activeTab } = state;

  const handleChange = (value: string) => setState({ activeTab: value });
  const handleChange_2 = (value: string) => setAbout(value);

  const codeString = `const TikTkSaver = {
    nome: 'Download de Vídeos do TikTok',
    tecnologias: ['React', 'Vite', 'API', 'Typescript'],
    descricao: 'Desenvolvi uma aplicação que permite o download simplificado de vídeos do TikTok.',
    funcionalidades: [
      'Busca intuitiva de vídeos utilizando palavras-chave, hashtags ou nomes de usuários.',
      'Download fácil e rápido dos vídeos desejados.',
      'Interface amigável e responsiva proporcionando uma experiência de usuário agradável.',
      'Com tradução para três idiomas: inglês, espanhol e português.',
    ],
  };`;

  return (
    <>
      <ThemeProvider theme={original}>
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
              <a href="#projects">

                <Button variant='menu'>
                  Projects
                </Button>
              </a>
              <a href="#about-me">
                <Button variant='menu'>
                  About me
                </Button>
              </a>
              <Handle size={35} />
            </Toolbar>
          </AppBar>
        </div>
        <div className='flex justify-center items-center h-screen flex-col'>
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
          <Window className='relative bottom-8 right-28'>
            <TypeAnimation
              sequence={[
                'Atualmente focando em Typescript',
                1000,
                'Atualmente focando em MYSQL',
                1000,
                'Atualmente focando em Angular',
                1000,
                'Atualmente focando em React',
                1000,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </Window>
        </div>
        <div id='projects' style={{ display: 'flex', flexDirection: 'row', textWrap: 'nowrap' }}>
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
              <TabBody>
                <Avatar square size={'100%'} className='p-1'>
                  <img src={myImage} />
                </Avatar>
              </TabBody>
            </WindowContent>
          </Window>
          <Window className='items-center w-1/2'>
            <WindowContent>
              <GroupBox label={state.activeTab} style={{ fontSize: 42 }} className='w-full'> 
                <SyntaxHighlighter 
                language="javascript" 
                style={nightOwl}
                customStyle={{fontSize: 15, borderRadius: 10}}
                wrapLongLines
                >
                  {codeString}
                </SyntaxHighlighter>
              </GroupBox>
            </WindowContent>
          </Window>
        </div>
        <div className='mt-44' id='about-me'>
          <Window className='w-full'>
            <WindowHeader>About me</WindowHeader>
            <WindowContent style={{ display: 'flex', flexDirection: 'row' }}>
              <div className='w-full'>
                <Tabs value={about} onChange={handleChange_2}>
                  <Tab value={'0'}>Who i am?</Tab>
                  <Tab value={'1'}>Experiences</Tab>
                  <Tab value={'2'}>Contact</Tab>
                </Tabs>
                <TabBody style={{ height: 300 }}>
                  {about === '0' && (
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
                  {about === '1' && (
                    <div>
                      <div>Coming soon</div>
                    </div>
                  )}
                  {about === '2' && (
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