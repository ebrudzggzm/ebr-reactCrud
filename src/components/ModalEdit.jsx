import { useState } from "react";
import { toast } from "react-toastify";

const ModalEdit = ({
  books,
  setBooks, 
  setModalEdit,
  editedId, 
}) => {
  const [editedInput, setEditedInput] = useState("");

  const handleChangeTitle = (e) => {
    setEditedInput(e.target.value);
  };


  const currentBook = books.find((book) => book.id === editedId);

  const handleEditBookInfo = () => {
    //kitapı güncelle
    const updatedBook = {
      ...currentBook,
      title: editedInput,
      date: new Date().toLocaleString(),
    };

    // copyBooks.splice(index,1,updatedBook);

    const updatedBooks = books.map((editedBook) =>
      editedBook.id === editedId ? updatedBook : editedBook
    );

    setBooks(updatedBooks);

    //modalı kapat
    setModalEdit(false);
    //inputu temizle.
    setEditedInput("");
    //alert göster
    toast.dark("Kitap Başarıyla Güncellendi!", {
      position: "top-right",
    });
  };
  return (
    <div className="confirm-modal">
      <div className="modal-container">
        <div className="d-flex flex-column">
          <label htmlFor="editedInput">Kitap Adı:</label>
          <input
            className="form-control shadow"
            id="editedInput"
            onChange={handleChangeTitle}
            defaultValue={currentBook.title}
          />
        </div>
        <div className="d-flex flex-column gap-3">
          <button className="btn btn-danger" onClick={() => setModalEdit(false)}>
            Vazgeç
          </button>
          <button
            className="btn btn-warning"
            onClick={handleEditBookInfo}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
