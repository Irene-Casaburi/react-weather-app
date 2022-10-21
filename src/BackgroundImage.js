import React from "react";

export default function BackgroundImage(props) {
  const backgroundImages = {
    "01d": "000/045/565/original/01d.jpg?1662402327",
    "01n": "000/045/637/original/01n_2.png?1662452805",
    "02d": "000/045/563/original/02d.jpg?1662401767",
    "02n": "000/045/642/original/02n_2.png?1662455764",
    "03d": "000/045/638/original/03d_2.jpg?1662454573",
    "03n": "000/045/590/original/03n_2.jpg?1662405668",
    "04d": "000/045/638/original/03d_2.jpg?1662454573",
    "04n": "000/045/590/original/03n_2.jpg?1662405668",
    "09d": "000/045/591/original/09d_2.jpg?1662405676",
    "09n": "000/045/592/original/09n_2.jpg?1662405686",
    "10d": "000/045/591/original/09d_2.jpg?1662405676",
    "10n": "000/045/592/original/09n_2.jpg?1662405686",
    "11d": "000/045/639/original/11n_2.jpg?1662455030",
    "11n": "000/045/639/original/11n_2.jpg?1662455030",
    "13d": "000/045/640/original/13d_2.jpg?1662455171",
    "13n": "000/045/646/original/13n_2.jpg?1662456023",
    "50d": "000/045/593/original/50d_2.jpg?1662405697",
    "50n": "000/045/593/original/50d_2.jpg?1662405697",
  };

  return (
    <div
      className={
        props.mobile ? "mobile-bg col-md-12 col-lg-8 p-0" : "desktop-bg"
      }
      style={{
        backgroundImage: `url("https://s3.amazonaws.com/shecodesio-production/uploads/files/${
          backgroundImages[props.icon]
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
}
