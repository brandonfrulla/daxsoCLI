import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import Web3 from 'web3';
import { MetaMaskInpageProvider } from "@metamask/providers";
//this is a hacky fix to get the window.ethereum type to work
//T-215 figure out how to get the type to work without this
declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

interface Web3ContextType {
  web3: Web3 | null;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export function Web3Provider({ children }: { children: ReactNode }) {
  const [web3, setWeb3] = useState<Web3 | null>(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const _web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(_web3);
        } catch (error) {
          console.error("User denied account access");
        }
      } else if (window.web3) {
        const _web3 = new Web3(window.web3.currentProvider);
        setWeb3(_web3);
      } else {
        console.log('Non-Ethereum browser detected');
      }
    };
    initWeb3();
  }, []);

  return (
    <Web3Context.Provider value={{ web3 }}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3() {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context.web3;
}
