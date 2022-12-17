import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Explain() {
  return(
    <div　>
      <p>氏名:江刺　裕太</p>
      <p>学籍番号:5421081</p>
      <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
      <p>鳥の画像がランダムに出力されます</p>
    </div>
  );
}

function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Bird Images</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
          <img src={props.src} alt="cute duck!" />
          </figure>
        </div>
      </div>
    );
  }

  function Loading() {
    return <p>Loading...</p>;
  }

  function Gallery(props) {
    const { urls } = props;
    if (urls == null) {
        return <Loading />;
    }    
    return (
      <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
      </div>
    );
  }
  
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages("shiba").then((urls) => {
            setUrls(urls);
        });
      }, []);
    return (
      <main>
        <section className="section">
          <div className="container">
          <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Bird images are retrieved from Shibe.Online</p>
          <p>
            <a href="https://shibe.online/">Shibe.Online</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Explain />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;