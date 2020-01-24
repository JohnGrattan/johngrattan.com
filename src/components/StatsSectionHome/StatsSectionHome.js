import React from 'react';

const StatsSectionHome = ({ stat, srcUrl, srcText }) => {
  return (
    <div className="neg-margin-top-stats">
      <div className="col justify-content-center align-items-center">
        <div className="px-lg-5">
          <p className="text-left text-light lead px-lg-5">
            <span className="d-flex bg-dark border border-secondary rounded p-3 p-md-5 drop-shadow-dark">
              <i className="fas fa-exclamation-circle mt-1 text-secondary"></i>
              <span className="ml-2">
                {stat}
                <span className="d-block">
                  (Source: <a href={srcUrl}>{srcText}</a>)
                </span>
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSectionHome;
