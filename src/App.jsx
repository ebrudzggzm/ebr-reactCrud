import { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import ModalEdit from "./components/ModalEdit";

const App = () => {
  const [bookName, setbookName] = useState("");
  const [books, setBooks] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [editedId, setEditedId] = useState(null);

  const toggleModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const handleName = (e) => {
    setbookName(e.target.value);
  };
  const now = new Date();

  //ekle butonuna tıklandığında çalışır /handleSubmit form a versek de aynı şekilde olur.
  const handleCreateBook = (e) => {
    e.preventDefault();
    if (!bookName) {
      toast.error("Kitap ismi boş olamaz!", {
        position: "top-right",
      });
      return;
    }
    //kitap için gerkli bilgilere sahip obje oluştur.
    const newBook = {
      id: v4(),
      title: bookName,
      date: now.toLocaleString(),
      isRead: false,
    };
    //spread operatör,önceden eklenenleri muhafaza eder
    setBooks([...books, newBook]);
    //setBooks((prevBooks) => [...prevBooks, newBook]);  aynı ifade.
    //eleman eklenince inputu sıfırla ,input ve bookName in senkron olduğunu belirt,inputun value
    // süne value={bookName} ver
    setbookName("");

    toast.success("Kitap Başarıyla Eklendi!", {
      position: "top-right",
    });
  };

  //
  const handleDeleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
    toast.warn("Kitap Başarıyla Silindi!", {
      position: "top-right",
    });
  };
  //okundu butonuns basılınca
  //1-okundu değerini tersine çevir
  //2-books dizisinin bir kopyasını oluştur
  //3-düzenlenecek olan kitabın sırasını bul
  //4-eski kitabı  kopya diziden çıkar yerine güncellenmiş versiyonunu koy
  //5-güncel olan kopya diziyi state e aktar

  //state de dpğrudan değişiklik yapmak reactda hatalara sebp olabilir
  //kopyaya aktar,düzenle,tekrar state aktar yapmalıyız.
  //doğrudan yapınca react state in değiştiğini algılmıyor ve veriyi güncellemiyor.
  const handleIsReadBook = (book) => {
    const updatedBook = {
      ...book,
      isRead: !book.isRead,
    };
    //dizinin kopyasını oluştur.
    const cloneBooks = [...books];
    //findIndex js fonksiyonu ile  elemanın sırasını bul
    const index = cloneBooks.findIndex((item) => item.id === book.id);
    //okundu değerini tersine çevir

    console.log(index, "index");
    cloneBooks.splice(index, 1, updatedBook);
    console.log(cloneBooks, "clonebook");
    setBooks(cloneBooks);

    toast.info("Kitap Başarıyla Güncellendi!", {
      position: "top-right",
    });
  };

  const handleEditClick = (id) => {
    setEditedId(id);
    setModalEdit(true);
  };

  return (
    <div>
      {/* header */}
      <div className="bg-dark text-light px-5 py-2 fs-5 text-center">
        Kitap Kurdu
      </div>
      <div className="container border">
        <Form
          handleChange={handleName}
          handleCreate={handleCreateBook}
          bookName={bookName}
        />
        <div className="d-flex flex-column gap-3 py-5">
          {books.length === 0 && <h4>Henüz kitap eklemediniz.</h4>}
          {books.map((book) => (
            <Card
              key={book.id}
              book={book}
              handleDelete={handleDeleteBook}
              handleIsRead={handleIsReadBook}
              handleEditClick={handleEditClick}
            />
          ))}
        </div>
      </div>
      {modalEdit && (
        <ModalEdit
          books={books}
          editedId={editedId}
          setBooks={setBooks}
          setModalEdit={setModalEdit}
        />
      )}
    </div>
  );
};

export default App;
