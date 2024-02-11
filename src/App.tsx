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
  Tab,
  TabBody,
  Tabs,
  WindowHeader,
  Avatar,
  TextInput,
} from 'react95';
import original from 'react95/dist/themes/original';
import { TypeAnimation } from 'react-type-animation';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Chrono } from 'react-chrono';

// Images
import tikTk from './assets/tikTk.png';
import cepSearch from './assets/cepSearch.png'
import pokedex from './assets/pokedex.png';
import rjTecnologia from './assets/rjTecnologia.png'

import profile from './assets/1696619751143.jpeg'

export default function App() {
  const [activeTabProjects, setActiveTabProjects] = useState({ activeTab: 'TikTok Downloader' });
  const [about, setAbout] = useState('0');
  const { activeTab } = activeTabProjects;

  const handleChange = (value: string) => setActiveTabProjects({ activeTab: value });
  const handleChange_2 = (value: string) => setAbout(value);

  const tiTkSaverCodeBlock = `O "TikTkSaver" é uma aplicação desenvolvida com React, Vite, API e Typescript, oferecendo um download simplificado de vídeos do TikTok. Com funcionalidades como busca intuitiva, download fácil, interface responsiva e suporte a três idiomas (inglês, espanhol e português), proporciona uma experiência de usuário agradável e eficiente.`;
  const rjTecnologiaCodeBlock = 'O website da "Rj Tecnologia" é uma plataforma moderna construída em React, oferecendo uma experiência online para os clientes da provedora de internet local. Com uma interface intuitiva e responsiva, os usuários podem explorar planos de internet, verificar cobertura, e contatar a empresa de forma fácil. O site também inclui informações sobre a empresa.'
  const pokedexCodeBlock = 'A Pokedex é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que utiliza uma API pública de Pokemon para exibir informações abrangentes sobre diferentes Pokémon. Os recursos incluem uma interface visualmente atraente, busca por nome ou número de Pokémon, exibição de detalhes como tipo, habilidades e estatísticas. Com uma navegação intuitiva, proporciona aos usuários uma experiência envolvente e informativa ao explorar o vasto mundo dos Pokémon.';
  const cepSearchCodeBlock = 'O "CEP Search" é uma aplicação React que permite aos usuários buscar informações detalhadas utilizando CEPs. Integrando-se a uma API pública, oferece uma experiência simples e intuitiva. Os principais recursos incluem busca rápida, exibição de detalhes do endereço e uma interface amigável, tornando a obtenção de informações de CEP fácil e eficiente.';

  const items = [
    {
      title: "March 2023",
      cardTitle: "CAMERITE",
      cardSubtitle: "Software Developer",
      cardDetailedText: `
      I joined Camerite in March 2023 as a software developer, focusing on technologies such as Angular, React, and JavaScript for developing responsive web interfaces. Additionally, I explored the realm of mobile development using React Native. I excelled in efficiently managing relational databases using MYSQL and Sequelize, enhancing schema modeling and implementation. The collaborative culture of the company and the encouragement of continuous learning significantly contributed to my professional growth.      `,
    }
  ];

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
              {/* <a href="#languages">
                <Button variant='menu'>
                  Languages
                </Button>
              </a> */}
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
              <img src={profile} />
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
                'Currently focused on Typescript',
                1000,
                'Currently focused on MYSQL',
                1000,
                'Currently focused on Angular',
                1000,
                'Currently focused on React',
                1000,
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </Window>
        </div>
        <div id='projects' style={{ display: 'flex', flexDirection: 'row' }}>
          <Window className='w-full'>
            <WindowHeader>Projects</WindowHeader>
            <WindowContent>
              <Tabs rows={1} value={activeTab} onChange={handleChange}>
                <Tab value='TikTok Downloader' className='truncate'>TikTok Downloader</Tab>
                <Tab value='CEP Search' className='truncate'>CEP Search</Tab>
                <Tab value='Rj Tecnologia' className='truncate'>Rj Tecnologia</Tab>
                <Tab value='Pokedex' className='truncate'>Pokedex</Tab>
                <Tab value='Checkers Game' className='truncate'>Checkers Game</Tab>
              </Tabs>
              <TabBody>
                {
                  activeTabProjects.activeTab === 'TikTok Downloader' &&
                  <a href="https://www.tiktksaver.com" target='_blank'>
                    <Avatar square size={'100%'} className='p-1 cursor-pointer'>
                      <img src={tikTk} />
                    </Avatar>
                  </a>
                }
                {
                  activeTabProjects.activeTab === 'CEP Search' &&
                  <a href="https://cep-search-xi.vercel.app/" target='_blank'>
                    <Avatar square size={'100%'} className='p-1 cursor-pointer'>
                      <img src={cepSearch} />
                    </Avatar>
                  </a>
                }
                {
                  activeTabProjects.activeTab === 'Rj Tecnologia' &&
                  <a href="https://rj-tecnologia-website.vercel.app/" target='_blank'>
                    <Avatar square size={'100%'} className='p-1 cursor-pointer'>
                      <img src={rjTecnologia} />
                    </Avatar>
                  </a>
                }
                {
                  activeTabProjects.activeTab === 'Pokedex' &&
                  <a href="https://pokedex-main-drab.vercel.app/" target='_blank'>
                    <Avatar square size={'100%'} className='p-1 cursor-pointer'>
                      <img src={pokedex} />
                    </Avatar>
                  </a>
                }
              </TabBody>
            </WindowContent>
          </Window>
          <Window className='items-center w-1/2'>
            <WindowContent>
              <GroupBox label={activeTabProjects.activeTab} style={{ fontSize: 42 }} className='w-full'>
                {
                  activeTabProjects.activeTab === 'TikTok Downloader' &&
                  <div>
                    <SyntaxHighlighter
                      language="python"
                      style={nightOwl}
                      customStyle={{ fontSize: 20, borderRadius: 10, overflow: 'hidden' }}
                      wrapLongLines
                    >
                      {tiTkSaverCodeBlock}
                    </SyntaxHighlighter>
                    <div className='flex justify-center items-center gap-2 pt-5'>
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' />
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' style={{ backgroundColor: '#282B30' }} />
                    </div>
                    <a href="https://github.com/tiktksaver" target='_blank'>
                      <Button fullWidth>Acess Github Project</Button>
                    </a>
                  </div>
                }
                {
                  activeTabProjects.activeTab === 'CEP Search' &&
                  <div>
                    <SyntaxHighlighter
                      language="python"
                      style={nightOwl}
                      customStyle={{ fontSize: 20, borderRadius: 10, overflow: 'hidden' }}
                      wrapLongLines
                    >
                      {cepSearchCodeBlock}
                    </SyntaxHighlighter>
                    <div className='flex justify-center items-center gap-2 pt-5'>
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' style={{ backgroundColor: '#282B30' }} />
                    </div>
                    <a href="https://github.com/nosycolg/cep-search" target='_blank'>
                      <Button fullWidth>Acess Github Project</Button>
                    </a>
                  </div>
                }
                {
                  activeTabProjects.activeTab === 'Rj Tecnologia' &&
                  <div>
                    <SyntaxHighlighter
                      language="python"
                      style={nightOwl}
                      customStyle={{ fontSize: 20, borderRadius: 10, overflow: 'hidden' }}
                      wrapLongLines
                    >
                      {rjTecnologiaCodeBlock}
                    </SyntaxHighlighter>
                    <div className='flex justify-center items-center gap-2 pt-5'>
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' style={{ backgroundColor: '#282B30' }} />
                    </div>
                    <a href="https://github.com/nosycolg/rj-tecnologia-website" target='_blank'>
                      <Button fullWidth>Acess Github Project</Button>
                    </a>
                  </div>
                }
                {
                  activeTabProjects.activeTab === 'Pokedex' &&
                  <div>
                    <SyntaxHighlighter
                      language="python"
                      style={nightOwl}
                      customStyle={{ fontSize: 20, borderRadius: 10, overflow: 'hidden' }}
                      wrapLongLines
                    >
                      {pokedexCodeBlock}
                    </SyntaxHighlighter>
                    <div className='flex justify-center items-center gap-2 pt-5'>
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' />
                      <Avatar square size={70} src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' />
                    </div>
                    <a href="https://github.com/nosycolg/pokedex" target='_blank'>
                      <Button fullWidth>Acess Github Project</Button>
                    </a>
                  </div>
                }
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
                <TabBody>
                  {about === '0' && (
                    <div>
                      <WindowContent>
                        <GroupBox label='Apresentation' style={{ fontSize: 22 }}>
                        Hello, my name is Cristhian Felipe da Silva, I'm 18 years old and I am a self-taught individual dedicated to learning since I was 16. I was born in São Paulo and grew up in Recife, Pernambuco. My journey in the world of knowledge began early when I decided to take control of my education at the age of 16. Self-learning has become not only a method but a philosophy of life for me. This approach has allowed me to explore areas that genuinely interest me, developing practical skills and knowledge that I consider fundamental. Currently, I am focused on enhancing skills related to technology and programming, a passion that has naturally grown over the years. I am always seeking challenges that allow me to expand my knowledge and contribute to significant projects. Although my journey is brief, each step has been marked by an unwavering commitment to continuous learning. I am eager to explore new opportunities and challenges, making the most of every experience that life and self-directed learning have to offer.
                        </GroupBox>
                      </WindowContent>
                    </div>
                  )}
                  {about === '1' && (
                    <div>
                      <Chrono
                        items={items}
                        mode="HORIZONTAL"
                        itemWidth={1920}
                        showSingle
                        flipLayout
                        timelinePointShape="square"
                        theme={{
                          primary: 'black',
                          secondary: '#060084',
                          cardBgColor: 'white',
                          titleColor: 'white',
                          titleColorActive: 'white',
                        }}

                      />
                    </div>
                  )}
                  {about === '2' && (
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
                      <Avatar square size={600}>
                      </Avatar>
                      <div className='w-full'>
                        <p style={{ lineHeight: 1.3, fontSize: 20, padding: 5 }}>
                          Your Name
                        </p>
                        <TextInput
                          value={''}
                          placeholder='Example'
                          fullWidth
                        />
                        <p style={{ lineHeight: 1.3, fontSize: 20, padding: 5 }}>
                          Your E-mail
                        </p>
                        <TextInput
                          value={''}
                          placeholder='example@example.com...'
                          fullWidth
                        />
                        <p style={{ lineHeight: 1.3, fontSize: 20, padding: 5 }}>
                          Message
                        </p>
                        <TextInput
                          multiline
                          value={''}
                          placeholder=''
                          fullWidth
                          rows={8}
                        />
                        <a href="https://github.com/nosycolg/pokedex" target='_blank'>
                          <Button fullWidth className='mt-2'>Send</Button>
                        </a>
                      </div>
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