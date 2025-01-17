import Head from 'next/head'
import Link from 'next/link'
import Schedule from '../components/schedule'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Barrioings Wedding</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Lora:wght@500&family=Work+Sans:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>
      <div className="header_container">
        <h1 className="title">Welcome to the Barrioings Wedding</h1>
        <h2>brought to you by Elizabeth Barrios & Dylan Goings</h2>
        <p className="description">
          Friday, June 24th, 2022, 6:00pm EST
        </p>
        <p className="description">
          <a href="https://goo.gl/maps/Ge6i28KAUbpqtEdU7">Ypsilanti Freighthouse</a><br />
          100 Market Pl, Ypsilanti, MI 48198
        </p>
      </div>
      <div className="background_block"></div>
      <main>
        <div className="grid">
          <div className="intro">
            <p>We're getting married, mainly because we needed an excuse to throw a dance party!</p>

            <p>It turns out there's still a global pandemic happening, but we're pushing ahead.
              We want to see all your lovely faces and create a safe environment for us to revel in each others' company.</p>
          </div>
          <Link href="/faq">
            <a className="card">
              <h3>FAQs &rarr;</h3>
              <p>The answers to life, the universe, and everything</p>
            </a>
          </Link>

          <a href="https://barrioings.online-rsvp.com" className="card">
            <h3>RSVP &rarr;</h3>
            <img src="qrcode_1879.png" width="150px"></img>
          </a>
          <a href="https://www.marriott.com/events/start.mi?id=1646233047781&key=GRP" className="card">
            <h3>Hotel Reservations &rarr;</h3>
            <p>User our hotel room block for your stay</p>
          </a>
          <a href="mailto:dylan@dgoings.com" className="card">
            <h3>Questions? &rarr;</h3>
            <p>Email Dylan with whatever's on your mind!</p>
          </a>
        </div>
        <h2 className="schedule_header" id="schedule">Schedule of Events</h2>
        <Schedule />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: rgb(40 40 40);
        }

        .header_container {
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-column: space-between;
          height: 100vh;
          max-height: 100vh;
          position: fixed;
          top: 0;
          width: 100%;
          padding: 5rem 0;
          text-align: center;
          background-image: url('/couple2.jpg');
          background-position: 50%;
          background-size: cover;
          background-repeat: no-repeat;
          transition: margin-top 0.2s;
        }
        .header_container p {
          background-color: rgba(255 255 241 / 50%);
        }
        .background_block {
          pointer-events: none;
          height: 100vh;
          max-height: 100vh;
        }

        main {
          z-index: 3;
          overflow: visible;
          min-height: 101vh;
          width: 100%;
          transition: margin-top 0.4s;
          margin-bottom: -100vh;
          padding: 2rem 0;
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          font-family: "Work Sans";
          background-color: rgb(255 255 241);
          color: rgb(70 70 70);
        }

        a,
        a:visited {
          text-decoration: none;
          font-size: 1.25rem;
          color: black;
        }

        a:hover {
          background-color: #95f6e6;
        }

        .intro {
          max-width: 500px;
          padding: 2rem 0;
          line-height: 1.6;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          font-family: "Lora";
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          align-self: stretch;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: #95f6e6;
          border-color: #95f6e6;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .schedule_header {
          font-family: "Lora";
          font-size: 24px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
