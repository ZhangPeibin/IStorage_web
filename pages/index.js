/** @jsx jsx */
import {jsx, css} from "@emotion/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import WebsitePrototypeWrapper from 'components/core/WebsitePrototypeWrapper'
import Web3Modal from "web3modal";
import {getChainData} from "../components/web3/network";
import Web3 from "web3";
import {generateMessageForEntropy, hashPersonalMessage} from "../components/web3/signMessage";
import {BigNumber, utils} from "ethers";
import {PrivateKey} from "@textile/hub";

const STYLE_HEAD = css`
  width: 100%;
  height: 62px;
  background: #151A2F;
  line-height: 62px;
`;


const HEAD_LI = css`
  height: 62px;
  margin-right: 16px;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  color: #fff;
`;
const STYLE_signin = css`
  font-size: 14px;
  line-height: 40px;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  margin-left: 8px;
  background: linear-gradient(-90deg, #5352FC 0%, #6BA2FF 100%);
  color: #fff;

  :hover {
    margin-top: 4px;
  }
`;
const STYLE_BODY = css`
  width: 100%;
  height: 100%;
`;
const STYLE_BANNER = css`
  width: 100%;
  position: relative;
`;
const BANNER_TXT = css`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 44px;
  text-align: center;
  line-height: 150px;//todo edit 
  position: absolute;
  left: 50%;
  font-family: Times;
  top: 20%;
  transform: translate(-50%)
`
const BANNER_BTN = css`
  padding-left: 32px;
  padding-right: 32px;
  background: linear-gradient(-90deg, #5352FC 0%, #6BA2FF 100%);
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 42px;
  font-family:"Times New Roman";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%)
`;

const STYLE_CONTENT = css`
  width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const CONTENT_HEAD = css`
  width: 1200px;
  height: 140px;
  background: #373F67;
  border: 1px solid #373F67;
  border-radius: 4px 4px 8px 8px;
  position: absolute;
  margin-top: -76px;
`;

const CONTENT_UL = css`
  width: 1200px;
  display: inline-block;
`;

const CONTENT_LI = css`
  width: 300px;
  height: 152px;
  display: inline-block;
  text-align: center;
  padding-top: 20px;
`;

const LI_TITLE = css`
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 4px;
`;
const LI_CON = css`
  font-size: 44px;
  line-height: 1.6rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
  color: #8875FF;
`;

const STYLE_CONTENT1 = css`
  width: 100%;
  height: 830px;
  background: #21263e;
  overflow: hidden;

  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
`;
const CONTENT1_TIT = css`
  width: 100%;
  height: 228px;
  color: #fff;
  font-size: 52px;
  text-align: center;
  line-height: 128px;
  overflow: hidden;
  margin-top: 76px;
`
const CONTENT1_CONBOX = css`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
`
const ALITBOX = css`
  width: 358px;
  height: 404px;
  background: #2B314F;
  box-shadow: 0px 0px 18px 0px rgba(4, 17, 77, 0.06);
  border-radius: 4px 4px 8px 8px;
  padding: 50px;
  text-align: center;
  float: left;
`
const ALITBOX_CON1 = css`
  font-weight: bold;
  font-family: Manrope-ExtraBold;
  font-size: 1.375rem;
  text-align: center;
  margin-top: 4px;
  color: #FFFFFF;
  line-height: 50px;
`
const ALITBOX_CON2 = css`
  font-size: 1rem;
  line-height: 2rem;
  color: #FFFFFF;
  font-family: Manrope-Regular;
`
const STYLE_CONTENT2 = css`
  width: 100%;
  height: 915px;
  background: #2B314F;
  text-align: center;
`
const CONTENT2_TIT = css`
  font-size: 52px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  padding-top: 100px;
`

const CONTENT2_TIT_contact = css`
  font-size: 52px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
`
const CONTENT2_CON = css`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding: 0;
  margin: 0;
`
const CONTENT2_CON_CONTACT = css`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`

const CONTENT2_CON_SUB = css`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  padding: 0;
  margin-top: 4px;
`


const CONTENT2_SIXBOX = css`
  width: 1200px;
  margin: 0 auto; 
  margin-top: 60px;
`

const FIRSTSIX = css``

const SECONDSIX = css`
  margin-top: -20px;
`

const SIXCON = css`
  width: 253px;
  height: 284px;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-left: 45px;
`

const SIXIMG = css`
  width: 253px;
  height: 284px;
  position: absolute;
  top: 0;
`

const SIXTEXT = css`
  font-size: 18px;
  padding: 100px 25px;
  color: #fff;
  position: absolute;
  z-index: 2;
`

const STYLE_CONTENT3 = css`
  overflow: hidden;
  width: 100%;
  height: 1160px;
  background: #21263e;
`
const CONTENT3_TIT = css`
  text-align: center;
  font-size: 52px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 67px;
  margin-top: 100px;
  margin-bottom: 50px;
`
const CONTENT3_CONBOX = css`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`
const CONBOX_LEFT = css`
  width: 590px;
  height: 762px;
  background: #2B314F;
  box-shadow: 0px 0px 18px 0px rgba(4, 17, 77, 0.06);
  border-radius: 4px 4px 8px 8px;
  padding: 20px;
`
const LEFT_1 = css`
  font-size: 20px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFD06B;
  line-height: 48px;
`
const LEFT_2 = css`
  font-size: 24px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 32px;
`

const LEFT_3 = css`
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 24px;
`
const STYLE_BOTTOM = css`
  position: relative;
  width: 100%;
  height: 745px;
`
const FOOTER_IMG = css`
  width: 100%;
  height: 100%;
`
const FOOTER_CON = css`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%);
  z-index: 2;
  width: 1200px;
  height: 745px;
  display: flex;
`
const FOOTER_CONLEFT = css`
  width: 400px;
  height: 100%;
  margin-right: 20px;
  margin-top: 120px;
`
const FOOTER_CONRIGHT = css`
  width: 780px;
  height: 100%;
  padding: 80px 0;
  margin-left: 172px;
`
const CONLEFT_P1 = css`
  font-size: 46px;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 70px;
`

const CONLEFT_P2 = css`
  font-size: 16px;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 38px;
`
const CONLEFT_BTN = css`
  width: 360px;
  height: 52px;
  background: linear-gradient(-90deg, #5352FC 0%, #6BA2FF 100%);
  font-size: 16px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 48px;
  margin-top: 20px;
`

const BANNER_TITLE = css`
  font-size: 24px;
  color: #FFFFFF;
  font-family:"Times New Roman"
`
const data = {
    rows: [
        {
            title: "How to ensure login security ? ",
            content: "When the user logs in through the wallet or Magic, the previous section will use the keccak_256 method to generate a unique seed from the wallet address or mailbox, and use the ed25519 method provided by textile to obtain the unique secret key. Everything is done on the user side. "
        },
        {
            title: "When is the official launch?",
            content: "We will open Testnet 1.0 after the feature is complete, so stay tuned!"
        },
        {
            title: "Will a DAO be built? ",
            content: "Yes, we will build DAO. We will establish a data audit mechanism, which will take DAO as the core to ensure the quality and standardization of the data market. Of course, there are more DAO functions to promote ecological development."
        }]
}


function IndexPage() {

    const  getNetwork = () => getChainData(80001).network;

    const router = useRouter()
    const whitePager = "https://pitch.com/public/7d9a3314-c3f8-40e8-b19c-1291974c4bcb";
    const W3DS = "https://www.w3ds.world/";
    const APP = "https://app.istorage.one";

    const _whitePager = () => {
        window.open(whitePager, "_blank")
    }
    //鉴权
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function initWeb3(provider) {
        const web3 = new Web3(provider);
        web3.eth.extend({
            methods: [
                {
                    name: "chainId",
                    call: "eth_chainId",
                    outputFormatter: web3.utils.hexToNumber
                }
            ]
        });

        return web3;
    }


    useEffect(() => {
        const isAuthenticated = localStorage.getItem('identity') ? true : false
        console.log("已登录：", isAuthenticated)
        setIsAuthenticated(isAuthenticated)
    }, [])
    const _signIn = async () => {
        // const web3Modal = new Web3Modal({
        //     network: getNetwork(),
        //     cacheProvider: true,
        // });
        //
        // const provider = await web3Modal.connect();
        // const web3 = initWeb3(provider);
        // await switchNetworkMumbai(web3);
        // const accounts = await web3.eth.getAccounts();
        // console.log(accounts)
        // const address = accounts[0];
        // const networkId = await web3.eth.net.getId();
        // const chainId = await web3.eth.chainId()
        // console.log(chainId)
        // console.log(networkId)
        // const message = generateMessageForEntropy(address, "MultiStorage", "MultiStorage")
        // const hasPersonalMessage = hashPersonalMessage(message)
        // const signedText = await web3.eth.sign(hasPersonalMessage, address);
        // const hash = utils.keccak256(signedText);
        // console.log(hash)
        // const array = hash
        //     // @ts-ignore
        //     .replace('0x', '')
        //     // @ts-ignore
        //     .match(/.{2}/g)
        //     .map((hexNoPrefix) => BigNumber.from('0x' + hexNoPrefix).toNumber())
        //
        // if (array.length !== 32) {
        //     throw new Error('Hash of signature is not the correct size! Something went wrong!');
        // }
        // const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array))
        // localStorage.setItem('seed', JSON.stringify(array));
        // // @ts-ignore
        // localStorage.setItem("identity", identity.toString())

        window.open(APP, "_blank")
    }

    const title = `IStorage`;
    const description =
        "Build Decentralized Storage Aggregation Layer to establish a Data Metaverse";
    const url = "https://www.anipfs.space";

    const switchNetworkMumbai = async (web3) => {
        try {
            await web3.currentProvider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0x13881" }],
            });
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await web3.currentProvider.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainId: "0x13881",
                                chainName: "Mumbai",
                                rpcUrls: ["https://rpc-mumbai.matic.today"],
                                nativeCurrency: {
                                    name: "Matic",
                                    symbol: "Matic",
                                    decimals: 18,
                                },
                                blockExplorerUrls: ["https://explorer-mumbai.maticvigil.com"],
                            },
                        ],
                    });
                } catch (error) {
                    alert(error.message);
                }
            }
        }
    }


    return (
        <WebsitePrototypeWrapper title={title} description={description} url={url}>
            <div style={{width: '100%'}}>
                <div css={STYLE_HEAD}>
                    <div style={{width: '1200px', margin: "auto",}}>
                        <nav className="navbar navbar-expand-xl">
                            {/*<img style={{width: "150px", height: "42px", marginTop: "5px", }}*/}
                            {/*     src="../static/logo.png" alt=""/>*/}
                            <span onClick={() => {
                            }} css={BANNER_TITLE} href="#home">IStorage</span>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a onClick={() => {
                                    }} className="nav-link" href="#home">Home</a>
                                    <a onClick={() => {
                                        window.open(W3DS, "_blank")
                                    }} className="nav-link" href="#home">What is W3DS</a>
                                    <a onClick={() => {
                                    }} className="nav-link" href="#roadmap">Roadmap</a>
                                    <a onClick={() => {

                                    }} className="nav-link" href="#contact">Contact</a>
                                </div>
                            </div>
                            <button css={STYLE_signin} onClick={_signIn}>Launch App</button>
                        </nav>

                    </div>
                </div>
                <div css={STYLE_BANNER}>
                    <img src="/static/banner.png" style={{width: "100%",height:700}} alt=""/>
                    <p css={BANNER_TXT}>Build Decentralized Storage Aggregation Layer
                    </p>
                    <p css={BANNER_TXT} style={{marginTop: 56}}>Designed to establish a Data Metaverse</p>
                    <button css={BANNER_BTN} onClick={_whitePager}>Deck</button>
                </div>
                <div css={STYLE_BODY}>
                    {/*<div css={STYLE_CONTENT}>*/}
                    {/*    <div css={CONTENT_HEAD}>*/}
                    {/*        <ul css={CONTENT_UL} style={{marginLeft: "0", paddingLeft: "0"}}>*/}
                    {/*            <li css={CONTENT_LI}>*/}
                    {/*                <h3 css={LI_TITLE}>Total Data</h3>*/}
                    {/*                <p css={LI_CON}>1352</p>*/}
                    {/*            </li>*/}
                    {/*            <li css={CONTENT_LI}>*/}
                    {/*                <h3 css={LI_TITLE}>Total Volume</h3>*/}
                    {/*                <p css={LI_CON}> 73.36 </p>*/}
                    {/*            </li>*/}
                    {/*            <li css={CONTENT_LI}>*/}
                    {/*                <h3 css={LI_TITLE}>Users</h3>*/}
                    {/*                <p css={LI_CON}>38</p>*/}
                    {/*            </li>*/}
                    {/*            <li css={CONTENT_LI}>*/}
                    {/*                <h3 css={LI_TITLE}>NFTS</h3>*/}
                    {/*                <p css={LI_CON}>456</p>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div css={STYLE_CONTENT1}>
                        <p css={CONTENT1_TIT}>Why IStorage</p>
                        <div css={CONTENT1_CONBOX}>
                            <dl css={ALITBOX}>
                                <img style={{display: "inline-block"}} src="/static/li3.png" alt=""/>
                                <dd>
                                    <p css={ALITBOX_CON1}>Decentralized Identity</p>
                                </dd>
                                <dt>
                                    <p css={ALITBOX_CON2}>IStorage uses DID for user authentication, which increases
                                        personal privacy and autonomous control of data</p>
                                </dt>
                            </dl>
                            <dl css={ALITBOX} style={{margin: " 0 63px"}}>
                                <img style={{display: "inline-block"}} src="/static/li1.png" alt=""/>
                                <dd>
                                    <p css={ALITBOX_CON1}>Multi-Chain storage</p>
                                </dd>
                                <dt>
                                    <p css={ALITBOX_CON2}>IStorage will integrate multiple chains to provide data
                                        cross-chain and aggregation interaction capabilities</p>
                                </dt>
                            </dl>
                            <dl css={ALITBOX}>
                                <img style={{display: "inline-block"}} src="/static/li2.png" alt=""/>
                                <dd>
                                    <p css={ALITBOX_CON1}>Cross-Chain market</p>
                                </dd>
                                <dt>
                                    <p css={ALITBOX_CON2}>IStorage provides cross-chain data transaction functions. It
                                        allows data transactions on different chains</p>
                                </dt>
                            </dl>
                        </div>
                    </div>
                    <div css={STYLE_CONTENT2}>
                        <p css={CONTENT2_TIT}>Keep <span
                            style={{color: "#8774FD"}}>Decentralized</span></p>
                        <p css={CONTENT2_CON}>
                            <span style={{color: "#8774FD"}}>IStorage</span> is fully
                            decentralized and will be owned by Data DAO
                        </p>
                        <p css={CONTENT2_CON_SUB}>Devs cannot control anyone's data and trace data back to
                            individuals,All
                            is Decentralized</p>
                        {/* 六边形图 */}
                        <div css={CONTENT2_SIXBOX}>
                            <div css={FIRSTSIX}>
                                <div css={SIXCON} style={{marginLeft: "20px"}}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>Authorize signing with web3 wallet and produce identity via
                                        Ed25519</p>
                                </div>
                                <div css={SIXCON}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>Link DID through Identity and build user's web3 social portrait
                                        with
                                        DID</p>
                                </div>
                                <div css={SIXCON}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>All data is stored in decentralized storage for free, whether
                                        public or
                                        private</p>
                                </div>
                                <div css={SIXCON}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>Encrypt and decrypt data using identities on the web frontend</p>
                                </div>
                            </div>
                            <div css={SECONDSIX}>
                                <div css={SIXCON} style={{marginLeft: "20px"}}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>DID controls user file indexing system, personal data, cross-chain
                                        configuration</p>
                                </div>
                                <div css={SIXCON}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>Marketplace allows users to choose a pattern of "bid => data test => final deal"</p>
                                </div>
                                <div css={SIXCON}>
                                    <img src="/static/conbg.png" css={SIXIMG} alt=""/>
                                    <p css={SIXTEXT}>All data will not be fetched  until the last transaction is completed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div css={STYLE_CONTENT3}>
                        <p css={CONTENT3_TIT}>Hold all your data <br/> On IStorage</p>
                        <div css={CONTENT3_CONBOX}>
                            <div css={CONBOX_LEFT} style={{marginRight: "20px"}}>
                                <p css={LEFT_1}>MULTI-CHAIN</p>
                                <p css={LEFT_2}>
                                    Support multi-chain data storage bottom layer</p>
                                <p css={LEFT_3}>With the development of web3, different storage chains have been born,
                                    and
                                    different chains have their own advantages.
                                    After you store data on different storage chains, you need to operate your data on
                                    different chain platforms. This is complicated and not suitable for unified
                                    operation<br/><span></span><br/>With IStorage you can store and modify data on
                                    different
                                    storage chains, as well as switch storage platforms for data. </p>
                                <img src="/static/con3left.png" style={{width: "100%", marginTop: "100px"}} alt=""/>
                            </div>
                            <div css={CONBOX_LEFT}>
                                <p css={LEFT_1}>CROSS-CHAIN</p>
                                <p css={LEFT_2}>Building a cross-chain data metaverse based on W3DS</p>
                                <p css={LEFT_3}>Entering the era of web3, driven by the increasing prosperity of the
                                    blockchain ecosystem, the amount of data is also growing explosively, followed by
                                    the
                                    utilization and transaction of data. We create its own data profile for each data
                                    through the 'W3DS' protocol. Users can find suitable data through multiple
                                    dimensions<br/><span></span><br/>
                                    IStorage provides a cross-chain data metaverse, you can profile data on different
                                    chains, or you can mint data into NFT to support transactions</p>
                                <img src="/static/con3right.png" style={{height: "330px", margin: "0 auto"}}
                                     mode="aspectFit" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div css={STYLE_BOTTOM} style={{background: " #21263e"}}>
                        <img css={FOOTER_IMG} src="/static/footBg.png" alt=""/>
                        <div css={FOOTER_CON}>
                            <div css={FOOTER_CONLEFT}>
                                <p css={CONLEFT_P1}>IStorage is your own fully decentralized data platform</p>
                                <p css={CONLEFT_P2}>The architecture diagram is updated in real time and the code has
                                    been
                                    open sourced</p>
                                <button onClick={function (e) {
                                    window.open("https://github.com/ZhangPeibin/IPFSpace", "_blank")
                                }} css={CONLEFT_BTN}>Visit Github
                                </button>
                            </div>
                            <div css={FOOTER_CONRIGHT}>
                                <img src="/static/footCon.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <section style={{background: "#2b314f", color: "#fff",}}
                             className='roadmap container-fluid bg-gray '
                             id="roadmap">
                        <div className="Grid_grid__tdbxd" style={{marginTop: 96, marginBottom: 88}}>
                            <div className="App_left__j7ytm"
                                 style={{marginBottom: 48, width: "1120px", textAlign: "center"}}>
                                <div className="App_markdown__B3Yg5"
                                     style={{textAlign: "center", width: "1120px"}}>
                                    <a id="roadmap-4" className="App_synthetich2__6_CLu deleteHover" href="#roadmap-4"
                                       level="2">Roadmap</a>
                                    <p><strong> IStorage will keep updated with the latest project progress.</strong>
                                    </p>
                                </div>
                            </div>
                            <div style={{marginLeft: 200}}>
                                <span className="App_timelineItem___1W7J">
                            <span className="App_timelineItemDate__E0zPY">
                                <div>June 2022</div>
                            </span>
                            <span className="App_timelineItemDot___6Cxz"
                                  style={{background: "#0e67ff", color: "#ffffff"}}>

                            </span>
                            <span className="App_timelineItemText__neUgD">
                                <section className="App_line__sMNHr"></section>
                                <div
                                    className="App_h3__exlvD">Milestone 0: Perfect the establishment of data market</div>
                                <div className="App_desc__3G6Gd" style={{marginTop: 12}}>
                                    <p>
                                        We will improve the data NFT trading market based on Polygon, including the following points: data trading process design, NFT market design.
Then Testnet 1.0 Launch Initiated .All users participating in the test will obtain contribution value according to the contribution amount. After the test is completed, airdrop will be carried out according to the contribution value.
                                    </p>
                                </div>
                            </span>
                        </span>
                                <span className="App_timelineItem___1W7J">
                            <span className="App_timelineItemDate__E0zPY">
                                <div>July 2022</div>
                            </span>
                            <span className="App_timelineItemDot___6Cxz"
                                  style={{background: "#0e67ff", color: "#ffffff"}}>

                            </span>
                            <span className="App_timelineItemText__neUgD">
                                <section className="App_line__sMNHr"></section>
                                <div
                                    className="App_h3__exlvD">Milestone 1: Testnet 2.0 Launch Initiated</div>
                                <div className="App_desc__3G6Gd" style={{marginTop: 12}}>
                                    <p>
                                        When the modification of Testnet 1.0 is completed, the top 200 users of Testnet 1.0 will be invited to test Testnet 2.0. Testnet 2.0 will focus on the interaction of core functions.
                                    </p>
                                </div>
                            </span>
                        </span>
                                <span className="App_timelineItem___1W7J">
                            <span className="App_timelineItemDate__E0zPY">
                                <div>Sep 2022</div>
                            </span>
                            <span className="App_timelineItemDot___6Cxz"
                                  style={{background: "#0e67ff", color: "#ffffff"}}>

                            </span>
                            <span className="App_timelineItemText__neUgD">
                                <section className="App_line__sMNHr"></section>
                                <div
                                    className="App_h3__exlvD">Milestone 2: Mainnet Launch Initiated</div>
                                <div className="App_desc__3G6Gd" style={{marginTop: 12}}>
                                    <p>
                                        When the testnet is completed, we will choose a time to launch the mainnet and issue governance tokens at the same time. The airdrops obtained by the testnet can be exchanged for the mainnet token at this time.
                                    </p>
                                </div>
                            </span>
                        </span>
                            </div>

                        </div>
                    </section>

                    <section style={{background: "#21263e"}} className='contact container-fluid bg-gray ' id="contact">
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='text-center'>
                                    <p css={CONTENT2_TIT_contact}>Contact us</p>
                                    <div className="small-border"></div>
                                    <footer className="footer bg__gradient">
                                        <div className="footer__wrapper padding-top padding-bottom">
                                            <div className="container">
                                                <div className="footer__content text-center">
                                                    <p css={CONTENT2_CON_CONTACT}>We are glad that you can contact
                                                        us</p>
                                                    <ul className="social justify-content-center"
                                                        style={{marginTop: "40px"}}>
                                                        <li className="social__item">
                                                            <a href="https://twitter.com/IPFSpace" target={'_blank'}
                                                               style={{color: "#fff"}} className="social__link"><i
                                                                className="fab fa-twitter"></i></a>
                                                        </li>
                                                        {/*<li className="social__item">*/}
                                                        {/*    <a href="#" className="social__link" target={'_blank'}><i style={{ color:"#fff"}} className="fab fa-discord"></i></a>*/}
                                                        {/*</li>*/}
                                                        <li className="social__item">
                                                            <a href="mailto:wiki4zhang@gmail.com" className="social__link"
                                                               style={{color: "#fff"}} target={'_blank'}><i
                                                                className="far fa-envelope-open"></i></a>

                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </WebsitePrototypeWrapper>

    );
}

export default IndexPage