import { useState } from "react";
import { toast } from "react-toastify";

const ModalEdit = ({
  books,
  book,
  toggleModalEdit,
  setBooks,
  setbookName,
  setModalEdit,
}) => {
  const [editedInput, setEditedInput] = useState(book.title);

  const handleChangeTitle = (e) => {
    setEditedInput(e.target.value);
  };
  console.log(books, "boooks", book);
  const handleEditBookInfo = (id) => {
    //kitapı güncelle
    const updatedBook = {
      ...book,
      title: editedInput,
      date: new Date().toLocaleString(),
    };

    // copyBooks.splice(index,1,updatedBook);

    const updatedBooks = books.map((editedBook) =>
      editedBook.id === id ? updatedBook : editedBook
    );

    setBooks(updatedBooks);

    //modalı kapat
    setModalEdit(false);
    //inputu temizle.
    setbookName("");
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
            defaultValue={editedInput}
          />
        </div>
        <div className="d-flex flex-column gap-3">
          <button className="btn btn-danger" onClick={toggleModalEdit}>
            Vazgeç
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleEditBookInfo(book.id)}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
