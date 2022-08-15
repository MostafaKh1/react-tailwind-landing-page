import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

function About() {
  return (
    <div className='w-full bg-black text-white'>

    <div className='max-w-[1240px] mx-auto px-4 py-16'>
        <div className='text-center '>
            <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
            <p className=' text-center  '>The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4  py-16'>
                    
                        <AboutCard icon={<SiHiveBlockchain size={30} color={"black"} />}   title={'Reliable, tamper-proof network'} text='Use decentralization, trusted nodes, premium data, and
                        cryptographic proofs to connect highly accurate and available
                        data/APIs to any smart contract.' />
                        <AboutCard icon={<SiFsecure size={30} color={"black"} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <AboutCard icon={<SiStrapi size={30} color={"black"} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AboutCard icon={<VscServerProcess size={30}  color={"black"}/>} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
                
                    
            </div>
        </div>  
    </div>
    </div>
  )
}

export default About