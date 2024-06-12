const Form = ({handleChange,handleCreate,bookName}) => {
  return (
    <form className='d-flex gap-3 mt-4 '>
    <input onChange={handleChange} value={bookName} type="text" placeholder="kitap ismi yazınız..." className='form-control shadow'/>
    <button onClick={handleCreate} className='shadow btn btn-warning'>Ekle</button>
    </form>
  )
}

export default Form
