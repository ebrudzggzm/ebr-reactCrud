
const Modal = ({book,handleDelete,setModal}) => {
  return (
  <div className="confirm-modal">
      <div className='modal-container'>
        <p>Silmek istediğinizden emin misiniz?</p>
        <div className="d-flex gap-3 justify-content-center flex-column">
        <button className='btn btn-danger' onClick={()=>handleDelete(book.id)}>Sil</button>
        <button className='btn btn-warning' onClick={()=>setModal(false)} >vazgeç</button>
        </div>
    </div>
  </div>
  )
}

export default Modal;
