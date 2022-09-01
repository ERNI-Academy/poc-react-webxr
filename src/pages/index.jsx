import Head from "next/head";
import {
  Twitch,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  GitHub,
} from "react-feather";
import Button from "../components/common/Button/Button";
import HighScore from "../components/high-score/HighScore";
import { useRouter } from "next/router";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>ERNI Mole Attack - React WebXR PoC</title>
        <meta name="description" content="React WebXR PoC by ERNI" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="prefetch" href="/wood-tile.png" />
        <link rel="prefetch" href="/mole-wood-tile.png" />
      </Head>

      <MainLayout>
        <div>
          <p>Welcome to &quot;Mole Attack&quot; simulator!</p>
          <p>
            We have a problem with some cute-but-not-friendly moles in our
            basement, our engineers have been thinking ways to get rid off them
            and they have manage to build this &quot;simulator&quot; to help us
            get the best people on board to succeed in our mission.
          </p>
          <p>Are you up for this adventure?</p>
          <p>Good luck and be safe out there.</p>
        </div>

        <div className="margin-top">
          <Button onClick={() => router.push("/game")} animate>
            Start simulator
          </Button>
        </div>

        <div className="margin-top">
          <p>
            Do you want to check what our engineers (we call them ERNIans) are
            up to? Check out our social profiles and Github account.
          </p>
          <ul className="social-list">
            <li>
              <a className="github" href="" target="_blank">
                <GitHub color="white" /> <span>Github</span>
              </a>
            </li>
            <li>
              <a className="twitch" href="" target="_blank">
                <Twitch color="#6441a5" /> <span>Twitch</span>
              </a>
            </li>
            <li>
              <a className="youtube" href="" target="_blank">
                <Youtube color="#ff0000" /> <span>Youtube</span>
              </a>
            </li>
            <li>
              <a className="linkedin" href="" target="_blank">
                <Linkedin color="#0e76a8" /> <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a className="twitter" href="" target="_blank">
                <Twitter color="#1da1f2" /> <span>Twitter</span>
              </a>
            </li>
            <li>
              <a className="instagram" href="" target="_blank">
                <Instagram color="#c13584" /> <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="margin-top">
          <HighScore />
        </div>
      </MainLayout>
      <style jsx>{`
        .margin-top {
          margin-top: 32px;
        }
        .social-list {
          padding: 0;
          margin: 0;
        }
        .social-list ul {
          display: flex;
          flex-flow: row wrap;
        }
        .social-list li {
          display: inline-block;
          list-style: none;
          margin-right: 24px;
          margin-top: 12px;
        }
        .social-list span {
          margin-left: 12px;
          display: block;
          vertical-align: center;
          text-transform: uppercase;
        }
        .social-list a {
          display: flex;
          flex-flow: row nowrap;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
        .social-list a:hover span {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
