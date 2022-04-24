/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useEffect,useState} from "react";
import { useRouter } from 'next/router';

const STYLE_HEAD = css`
  width: 100%;
  height: 62px;
  background: #151A2F;
  line-height:62px;
`;


const HEAD_LI = css`
  width: 119px;
  height: 62px;
  text-align:center;
  display:inline-block;
  font-size: 20px;
  color: #fff;
`;
const STYLE_signin = css`
  display:inline-block;
  width: 119px;
  height: 54px;
  font-size: 24px;
  text-align:center;
  background: linear-gradient(-90deg, #5352FC 0%, #6BA2FF 100%);
  color: #fff;
  float:right;
  :hover{
    margin-top:4px;
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
  width:100%;
  text-align: center;
  color:#fff;
  font-size:40px;
  text-align:center;
  line-height:70px;
  position: absolute;
  left:50%;
  top:20%;
  transform: translate(-50%)
`
const BANNER_BTN = css`
  width: 163px;
  height: 52px;
  background: linear-gradient(-90deg, #5352FC 0%, #6BA2FF 100%);
  color:#fff;
  font-size:20px;
  text-align:center;
  line-height:52px;
  position: absolute;
  left:50%;
  top:70%;
  transform: translate(-50%)
`;

const STYLE_CONTENT = css`
  width: 1200px;
  margin:0 auto;
  position: relative;
`;

const CONTENT_HEAD = css`
  width: 1200px;
  height: 152px;
  background: #373F67;
  border: 1px solid #373F67;
  border-radius: 4px 4px 8px 8px;
  position: absolute;
  margin-top: -76px;
`;

const CONTENT_UL = css`
  width: 1200px;
  display:inline-block;
`;

const CONTENT_LI = css`
  width: 300px;
  height: 152px;
  display:inline-block;
  text-align: center;
  padding-top:20px;
`;

const LI_TITLE = css`
  font-size: 16px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
`;
const LI_CON = css`
  font-size: 44px;
  font-family: D-DIN;
  font-weight: bold;
  color: #8875FF;
`;

const STYLE_CONTENT1 = css`
  width: 100%;
  height:830px;
  background: #21263e;
  overflow:hidden;
  font-size:52px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
`;
const CONTENT1_TIT = css`
  width:100%;
  height:228px;
  color: #fff;
  text-align: center;
  line-height:228px;
  overflow:hidden;
  margin-top: 76px;
`
const CONTENT1_CONBOX = css`
  width: 1200px;
  height:500px;
  margin:0 auto;
`
const ALITBOX = css`
  width: 358px;
  height: 404px;
  background: #2B314F;
  box-shadow: 0px 0px 18px 0px rgba(4, 17, 77, 0.06);
  border-radius: 4px 4px 8px 8px;
  padding:50px;
  text-align:center;
  display:inline-block;
`
const ALITBOX_CON1 = css`
  font-size: 20px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 50px;
`
const ALITBOX_CON2 = css`
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 30px;
`
const STYLE_CONTENT2 = css`
  width: 100%;
  height: 915px;
  background: #2B314F;
  text-align:center;
`
const CONTENT2_TIT = css`
  font-size: 40px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  padding-top:100px;
`
const CONTENT2_CON = css`
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 30px;
`
const CONTENT2_SIXBOX = css`
  width:1200px;
  margin:0 auto;
  margin-top: 40px;
`

const FIRSTSIX = css``

const SECONDSIX = css`
  margin-top:-20px;
`

const SIXCON = css`
  width: 253px;
  height: 284px;
  text-align:center;
  position:relative;
  display:inline-block;
  margin-left:45px;
`

const SIXIMG = css`
  width: 253px;
  height: 284px;
  position:absolute;
  top:0;
`

const SIXTEXT = css`
  padding:100px 25px;
  color:#fff;
  position:absolute;
  z-index:2;
`

const STYLE_CONTENT3 = css`
  overflow:hidden;
  width:100%;
  height: 1160px;
  background: #21263e;
`
const CONTENT3_TIT = css`
  text-align:center;
  font-size: 52px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 67px;
  margin-top:100px;
  margin-bottom: 50px;
`
const CONTENT3_CONBOX = css`
  width:1200px;
  margin:0 auto;
  display:flex;
`
const CONBOX_LEFT = css`
  width: 590px;
  height: 762px;
  background: #2B314F;
  box-shadow: 0px 0px 18px 0px rgba(4, 17, 77, 0.06);
  border-radius: 4px 4px 8px 8px;
  padding:20px;
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
  width:100%;
  height:745px;
`
const FOOTER_IMG = css`
  width:100%;
  height:100%;
`
const FOOTER_CON = css`
  position: absolute;
  left:50%;
  top:0;
  transform: translate(-50%);
  z-index:2;
  width:1200px;
  height:745px;
  display:flex;
`
const FOOTER_CONLEFT = css`
  width: 400px;
  height:100%;
  padding:80px 0; 
  margin-right:20px;
`
const FOOTER_CONRIGHT = css`
  width:780px;
  height:100%;
  padding:100px 0; 
`
const CONLEFT_P1 = css`
  font-size: 46px;
  font-family: D-DIN;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 65px;
`

const CONLEFT_P2 = css`
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 34px;
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
  margin-top:40px;
`




function IndexPage() {
  const router = useRouter()
  const whitePager = "https://hub.textile.io/ipfs/bafybeiei6dlmkuvvtahisbjcs7vufqbes6mta7pgoaenvtifvtsqechmu4";

  const _whitePager = () => {
    window.open(whitePager, "_blank")
  }
  //鉴权
  const [isAuthenticated,setIsAuthenticated] = useState(false)

  useEffect(()=>{
    const isAuthenticated = localStorage.getItem('identity')?true:false
    console.log("已登录：",isAuthenticated)
    setIsAuthenticated(isAuthenticated)
  },[])
  const _signIn =  () => {
    if (isAuthenticated) {
        router.replace("/dashboard")
    } else {
        router.push("/user/auth")
    }
  }

  const title = `Decentralized DataSharing Infrastructure`;
  const description =
    "Decentralized DataSharing Infrastructure, Based on IPFS & FileCoin ,Designed to store and share humanity's data";
  const url = "https://www.anipfs.space";

  return (
    // <WebsitePrototypeWrapper title={title} description={description} url={url} >
    // 新增页面代码
    <div style={{ width: '100%' }}>
        <div css={STYLE_HEAD}>
          <div style={{ width: '1200px',margin:"auto", }}>
          <img style={{ width: "150px", height: "42px", marginTop: "5px", display:"inline-block"}} src="../static/logo.png" alt="" />
            <ul style={{  display: "inline-block", marginLeft:"400px"}}>
              <li css={HEAD_LI}>注册</li>
              <li css={HEAD_LI}>领券中心</li>
              <li css={HEAD_LI}>关注我们</li>
              <li css={HEAD_LI}>控制台</li>
            </ul>
            <span css={STYLE_signin} onClick={_signIn}>SIGN IN</span>
          </div>
      </div>
      <div css={STYLE_BANNER}>
        <img src="/static/banner.png" style={{ width: "100%" }} alt="" />
        <p css={ BANNER_TXT }>NEXTSTORAGE IS A DECENTRALIZED STORAGE AGGRE- <br />
        GATION LAYER DESIGNED TO ESTABLISH A DATA <br />
        METAVERSE</p>
        <div css={BANNER_BTN} onClick={_whitePager}>WHITEPAGER</div>
      </div>
      <div css={STYLE_BODY}>
        <div css={STYLE_CONTENT}>
          <div css={CONTENT_HEAD}>
            <ul css={CONTENT_UL} style={{ marginLeft:"0",paddingLeft:"0"}}>
              <li css={CONTENT_LI}>
                <p css={LI_TITLE}>DATA ACCOUNTS</p>
                <p css={LI_CON}>S73.36 B</p>
              </li>
              <li css={CONTENT_LI}>
                <p css={LI_TITLE}>USER</p>
                <p css={LI_CON}>S73.36 B</p>
              </li>
              <li css={CONTENT_LI}>
                <p css={LI_TITLE}>NFTS</p>
                <p css={LI_CON}>S73.36 B</p>
              </li>
              <li css={CONTENT_LI}>
                <p css={LI_TITLE}>VOLUME</p>
                <p css={LI_CON}>S73.36 B</p>
              </li>
            </ul>
          </div>
        </div>
        <div css={STYLE_CONTENT1}>
          <p css={CONTENT1_TIT}>WHY MULTICHAIN</p>
          <div css={CONTENT1_CONBOX}>
            <dl css={ALITBOX}>
              <img style={{display:"inline-block"}} src="/static/li1.png" alt="" />
              <dd>
                <p css={ALITBOX_CON1}>NON-CUSTODIAL + MPC</p>
              </dd>
              <dt>
                <p css={ALITBOX_CON2}>MPC, THE POWERFUL SYMBOL OF DECENTRALIZATION, PROCESSES MULTICHAIN CROSS-CHAIN BRIDGING AND SMART CONTRACT METHODS ON OTHER CHAINS.</p>
              </dt>
            </dl>
            <dl css={ALITBOX} style={{margin:" 0 63px"}}>
              <img style={{display:"inline-block"}} src="/static/li3.png" alt="" />
              <dd>
                <p css={ALITBOX_CON1}>NO-SLIPPAGE SWAP</p>
              </dd>
              <dt>
                <p css={ALITBOX_CON2}>MPC, THE POWERFUL SYMBOL OF DECENTRALIZATION, PROCESSES MULTICHAIN CROSS-CHAIN BRIDGING AND SMART CONTRACT METHODS ON OTHER CHAINS.</p>
              </dt>
            </dl>
            <dl css={ALITBOX}>
              <img style={{display:"inline-block"}} src="/static/li2.png" alt="" />
              <dd>
                <p css={ALITBOX_CON1}>NON-CUSTODIAL + MPC</p>
              </dd>
              <dt>
                <p css={ALITBOX_CON2}>MPC, THE POWERFUL SYMBOL OF DECENTRALIZATION, PROCESSES MULTICHAIN CROSS-CHAIN BRIDGING AND SMART CONTRACT METHODS ON OTHER CHAINS.</p>
              </dt>
            </dl>
          </div>
        </div>
        <div css={STYLE_CONTENT2}>
          <p css={CONTENT2_TIT}>STATUS OF <span style={{ color: "#8774FD" }}>TORNADO CASH</span> DECENTRALIZATION</p>
          <p css={CONTENT2_CON}> <span style={{ color: "#8774FD" }}>TORNADO CASH</span> PROTOCOL IS FULLY DECENTRALIZED AND OWNED BY THE COMMUNITY: TORNADO CASH INITIAL</p>
          <p css={CONTENT2_CON}>DEVELOPERS HAVE NO CONTROL OVER IT AND ARE NOT RUNNING ANY SERVERS</p>
          {/* 六边形图 */}
          <div css={CONTENT2_SIXBOX}>
            <div css={FIRSTSIX}>
              <div css={SIXCON} style={{ marginLeft:"20px"}}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
              <div css={SIXCON}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
              <div css={SIXCON}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
              <div css={SIXCON}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
            </div>
            <div css={SECONDSIX}>
              <div css={SIXCON}  style={{ marginLeft:"20px"}}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
              <div css={SIXCON}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
              <div css={SIXCON}>
                <img src="/static/conbg.png" css={SIXIMG} alt="" />
                <p css={SIXTEXT}>TORNADO CASH SMART CONTRACTS, CIRCUITS, AND TOOLCHAIN ARE FULLY OPEN SOURCED.</p>
              </div>
            </div>
          </div>
        </div>
        <div css={STYLE_CONTENT3}>
          <p css={CONTENT3_TIT}>TAKE YOUR DATA <br /> SOVEREIGNTY BACK WITH .BIT</p>
          <div css={CONTENT3_CONBOX}>
            <div css={CONBOX_LEFT} style={{ marginRight:"20px"}}>
              <p css={LEFT_1}>MULTI-CHAIN</p>
              <p css={LEFT_2}>SUPPORT MULTI-CHAIN DATA STORAGE BOTTOM LAYER,</p>
              <p css={LEFT_3}>WITH THE DEVELOPMENT OF WEB3, DIFFERENT STORAGE CHAINS HAVE BEEN BORN, AND DIFFERENT CHAINS HAVE THEIR OWN ADVANTAGES.
AFTER YOU STORE DATA ON DIFFERENT STORAGE CHAINS, YOU NEED TO OPERATE YOUR DATA ON DIFFERENT CHAIN PLATFORMS. THIS IS COMPLICATED AND NOT SUITABLE FOR UNIFIED OPERATION.<br/><span></span><br/>WITH NEXTSTORAGE, YOU CAN STORE AND MODIFY DATA ON DIFFERENT STORAGE CHAINS, AS WELL AS SWITCH STORAGE PLATFORMS FOR DATA. </p>
              <img src="/static/con3left.png" style={{ width:"100%"}} alt="" />
            </div>
            <div css={CONBOX_LEFT}>
              <p css={LEFT_1}>CROSS-CHAIN</p>
              <p css={LEFT_2}>BUILDING A CROSS-CHAIN DATA METAVERSE BASED ON W3DS</p>
              <p css={LEFT_3}>ENTERING THE ERA OF WEB3, DRIVEN BY THE INCREASING PROSPERITY OF THE BLOCKCHAIN ECOSYSTEM, THE AMOUNT OF DATA IS ALSO GROWING EXPLOSIVELY, FOLLOWED BY THE UTILIZATION AND TRANSACTION OF DATA. WE CREATE ITS OWN DATA PROFILE FOR EACH DATA THROUGH THE 'W3DS' PROTOCOL. USERS CAN FIND SUITABLE DATA THROUGH MULTIPLE DIMENSIONS.<br/><span></span><br/>NEXTSTORAGE PROVIDES A CROSS-CHAIN DATA METAVERSE, YOU CAN PROFILE DATA ON DIFFERENT CHAINS, OR YOU CAN MINT DATA INTO NFT TO SUPPORT TRANSACTIONS.</p>
              <img src="/static/con3right.png" style={{ height: "330px", margin:"0 auto"}} mode="aspectFit" alt="" />
            </div>
          </div>
        </div>
        <div css={STYLE_BOTTOM} style={{ background:" #21263e" }}>
          <img css={FOOTER_IMG} src="/static/footBg.png" alt="" />
          <div css={FOOTER_CON}>
            <div css={FOOTER_CONLEFT}>
              <p css={CONLEFT_P1}>EACH .BIT IS A POWERFUL SELF-SOVEREIGN DATA CONTAINER.</p>
              <p css={CONLEFT_P2}>YOU CAN STORE ANY TYPE OF DATA IN YOUR .BIT, AND APPS CAN READ THEM BEFORE PROVIDING SERVICE FOR YOU.</p>
              <button css={CONLEFT_BTN}>MORE ABOUT DATA CONTAINER  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;-> </button>
            </div>
            <div css={FOOTER_CONRIGHT}>
              <img src="/static/footCon.png" alt="" />
            </div>
          </div>
        </div>

     
      </div>
      </div>
      
            
    );
}

export default IndexPage