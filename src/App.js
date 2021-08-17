import "./styles.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Viseu" />

      <p className="footer">
        <em>This page was built by </em>
        <a
          href="https://www.instagram.com/inesferreira/"
          target="_blank"
          className="insta"
          rel="noopener noreferrer"
        >
          InêsFerreira
        </a>
        <p className="footer">
          <a
            href="https://github.com/inesmcferreira/weather-app-1"
            target="_blank"
            className="code"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
        </p>
      </p>
    </div>
  );
}
