import React from "react";
import "./Registry.css";
import amazon from "../images/amazon-icon.png";
import target from "../images/target-icon.png";
import bbb from "../images/bbb-icon.jpeg";

const Registry = () => {
  return (
    <div className="registry">
      <h1 className="registry__title">Registry</h1>

      <h3>Katie and Jimmy are registered at the three stores below:</h3>
      <p>
        <em>Click on one of the logos</em>
      </p>
      <div className="registry__icon-section">
        <div>
          <a href="https://www.amazon.com/wedding/share/katieandjimmy611">
            <img
              className="registry__icon"
              src={amazon}
              alt="amazon-registry"
            />
          </a>
        </div>
        <div>
          <a href="https://www.target.com/gift-registry/giftgiver?registryId=4a6f6cf063de49c3aa5b52d32471de24&type=WEDDING&ref=reg_home_friends_fam">
            <img
              className="registry__icon"
              src={target}
              alt="target-registry"
            />
          </a>
        </div>
        <div>
          <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550238932?eventType=Wedding">
            <img className="registry__icon" src={bbb} alt="bbb-registry" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registry;
