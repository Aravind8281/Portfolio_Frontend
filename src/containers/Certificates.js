import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Assets/certificates.css";

function Certificate() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    fetchPortfolioData();
  }, []);

  const fetchPortfolioData = async () => {
    try {
      const response = await fetch("https://backend-b4hi.onrender.com/api/portfolio");
      const data = await response.json();
      setPortfolioData(data);
      setIsLoading(false); 
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    }
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  return (
    <div className="cert-container">
      {isLoading ? ( // Show loading state
        <p className="load">Loading...</p>
      ) : (
        <div className="certs">
          <div className="scroll-container">
            {portfolioData.map((item) => (
              <img
                key={item._id}
                className="cert-imgs"
                src={item.imageURL}
                alt=""
                onClick={() => openModal(item.imageURL)}
              />
            ))}
          </div>
        </div>
      )}

      <Modal
        className="Model"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
      >
        <img className="img-open" src={selectedImage} alt="Certificate" />
        <button className="img-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Certificate;
