import React, { useState } from "react";
import Modal from "./Modal";
import ModalEdit from "./ModalEdit";

const Card = ({
 
  setBooks,
  setbookName,
  books,
  bookName,
  book,
  handleDelete,
  handleIsRead,
  setModalEdit,
  modalEdit,
  toggleModalEdit,
  handleEditClick 
}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="d-flex border shadow p-3 justify-content-between align-items-center flex-col">
        <div className="">
          <h5
            style={{
              textDecoration: book.isRead ? "line-through" : "none",
            }}
          >
            {book.title}
          </h5>
          <p>{book.date}</p>
        </div>
        <div className="btn-group ">
          {/* <button className='btn btn-danger' onClick={()=>handleDelete(book.id)}>Sil</button> */}
          <button className="btn btn-danger" onClick={toggleModal}>
            Sil
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleEditClick (book.id)}
          >
            Düzenle
          </button>
          <button
            className="btn btn-success"
            onClick={() => handleIsRead(book)}
          >
            {book.isRead ? "Okundu" : "Okunmadı"}
          </button>
        </div>
      </div>
      <div className="">
        {modal && (
          <Modal book={book} handleDelete={handleDelete} setModal={setModal} />
        )}
        {/* {modalEdit && (
          <ModalEdit
            books={books}
            setBooks={setBooks}
            setbookName={setbookName}
            book={book}
            bookName={bookName}
            setModalEdit={setModalEdit}
            toggleModalEdit={toggleModalEdit}
          />
        )} */}
      </div>
    </>
  );
};

export default Card;
