/** @jsxImportSource react */
import Typist from "react-typist";

export default function CodeCard() {
  return (
    <div
      className="mx-auto w-full overflow-hidden rounded-lg sm:w-[600px]"
      aria-hidden="true"
    >
      <div
        className="inverse-toggle h-[300px] overflow-hidden rounded-lg border border-t3-purple-200/20 bg-white/10 px-1 pb-6 pt-4 
         font-mono text-[10px] leading-normal text-t3-purple-50 subpixel-antialiased shadow-lg transition-all sm:h-[400px] sm:px-2 sm:text-xs md:px-5"
      >
        <div className="top mb-2 flex">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-orange-300"></div>
          <div className="ml-2 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}>
          pnpx daxso-cli@latest
          <Typist.Delay ms={1250} />
        </Typist>
        <Typist
          className="leading-1 translate-y-[-0.2rem] bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text font-mono text-[7px] text-transparent sm:text-sm md:translate-y-[-0.4rem]"
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <Typist.Delay ms={2000} />
          <br />
          8888888b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.d8888b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          888&nbsp;&nbsp;"Y88b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d88P&nbsp;&nbsp;Y88b&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          888&nbsp;&nbsp;&nbsp;&nbsp;888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y88b.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          888&nbsp;&nbsp;&nbsp;&nbsp;888&nbsp;&nbsp;8888b.&nbsp;&nbsp;888&nbsp;&nbsp;888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Y888b.&nbsp;&nbsp;&nbsp;&nbsp;.d88b.&nbsp;&nbsp;
          <br />
          888&nbsp;&nbsp;&nbsp;&nbsp;888&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"88b&nbsp;`Y8bd8P'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Y88b.&nbsp;d88""88b&nbsp;
          <br />
          888&nbsp;&nbsp;&nbsp;&nbsp;888&nbsp;.d888888&nbsp;&nbsp;&nbsp;X88K&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"888&nbsp;888&nbsp;&nbsp;888&nbsp;
          <br />
          888&nbsp;&nbsp;.d88P&nbsp;888&nbsp;&nbsp;888&nbsp;.d8""8b.&nbsp;d8b&nbsp;Y88b&nbsp;&nbsp;d88P&nbsp;Y88..88P&nbsp;
          <br />
          8888888P"&nbsp;&nbsp;"Y888888&nbsp;888&nbsp;&nbsp;888&nbsp;Y8P&nbsp;&nbsp;"Y8888P"&nbsp;&nbsp;&nbsp;"Y88P"
          <br />
        </Typist>
        <Typist 
          startDelay={2100}
          className=""
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <div>
          Developer Acceleration eXperience for Smart-contract Organizations
          </div >

            </Typist>
        <Typist
          startDelay={2100}
          className=""
          cursor={{ show: false }}
          avgTypingDelay={-500}
        >
          <div>
            ? What will your project be called? (my-web3-proj)
            <Typist.Delay ms={500} />
            <Typist
              cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
              avgTypingDelay={50}
              className="inline pl-1 text-blue-400"
            >
              dax-web3-app
            </Typist>
          </div>
          <br />
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={4800}
          avgTypingDelay={-10000}
        >
          ? What kind of contract will you be building? (Use arrow keys)
          <br />
          ❯ ERC 721
          <br />
          &nbsp;&nbsp;ERC 20
          <Typist.Backspace count={87} delay={1000} />
          <Typist
            cursor={{ show: false }}
            avgTypingDelay={-10000}
            className="translate-y-[-1.8rem] md:translate-y-[-2.0rem]"
          >
            <span>
              <span>? ? What kind of contract will you be building?</span>
              <span className="pl-2 text-blue-400">ERC 721</span>
            </span>
          </Typist>
        </Typist>
        <Typist
          cursor={{ show: false }}
          startDelay={6300}
          avgTypingDelay={-10000}
          className="translate-y-[-1.8rem] text-green-400 md:translate-y-[-2.0rem]"
        >
          Good choice! Adding ERC!
          <br />
          <Typist.Delay ms={1000} />
          
        </Typist>
        </div>
    </div>
  );
}
