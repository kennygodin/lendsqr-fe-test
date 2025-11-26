import "./not-found.scss";

import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-wrapper">
        <div className="notfound-hero">
          <h1 className="notfound-code">404</h1>

          <div className="notfound-icon-wrapper">
            <div className="notfound-icon">
              {/* Search Icon (SVG) */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1e1b4b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>

        <div className="notfound-text">
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for seems to have wandered off. Let's
            get you back on track.
          </p>
        </div>

        <div className="notfound-actions">
          <button onClick={() => navigate(-1)} className="btn btn-back">
            {/* Arrow Left Icon (SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1e1b4b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Go Back
          </button>

          <button onClick={() => navigate("/")} className="btn btn-home">
            {/* Home Icon (SVG) */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7"></path>
              <path d="M9 22V12h6v10"></path>
            </svg>
            Back to Home
          </button>
        </div>

        <div className="notfound-loaders">
          <div className="loader-bar bar1"></div>
          <div className="loader-bar bar2"></div>
          <div className="loader-bar bar3"></div>
        </div>
      </div>
    </div>
  );
}
