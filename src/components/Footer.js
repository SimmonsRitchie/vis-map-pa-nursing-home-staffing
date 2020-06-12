import React from "react";

const Footer = ({byline, outlet, outletUrl, source, footnote, footnote2}) => {
  return (
    <div>
      <div className="footer__container">
        <div>
          {footnote && <div className="footer__notes is-size-7">
            <i>
              {footnote}
            </i>
          </div>}
          {footnote2 && <div className="footer__notes is-size-7">
            <i>
              {footnote2}
            </i>
          </div>}
          <div className="footer__byline-source is-size-7 has-text-grey">
            <span>Source: {source}{' '}</span>
            <span className="footer__source">
              <span className="footer__separator"></span>
              <span className="footer__byline">
                Graphic by: {byline},{" "}
                <a href={outletUrl}>{outlet}</a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
