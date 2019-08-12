import React from "react";
import Modal from "react-modal";
import { categories, categoryList, labels } from "./pictures";

Modal.setAppElement("#root");

// Stylesheet for Photo Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      imageUrl: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Function to open Modal
  openModal(imageUrl, key) {
    this.setState({ modalIsOpen: true, image: imageUrl, label: key });
  }

  // Function to close Modal
  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  // Function to display images per category and show a Photo Modal for images onClick
  renderImage(imageUrl, category) {
    return (
      <img
        key={imageUrl}
        src={imageUrl}
        onClick={() => this.openModal(imageUrl, category)}
        alt={this.state.label}
      />
    );
  }

  render() {
    return (
      <div className="galleryContainer">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="PhotoModal"
        >
          <img id="photoModal" src={this.state.image} alt={this.state.label} />
          <div>{labels[this.state.image]}</div>
        </Modal>
        {categoryList.map(category => {
          const photos = categories[category];
          return (
            <div key={category} className="photoCategory">
              {category}
              <div>{photos.map(item => this.renderImage(item, category))}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Gallery;
