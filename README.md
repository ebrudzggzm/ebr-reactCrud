# React App
CRUD APP / Create Read Update Delete 

-Bootstrap dahil et
index.html e bootstrap cdn i ekle ya da bootstrap indir.

-Toastify

AŞAMA-1
-Yeni elemanı almak için formu oluştur.
  1- form içerisinden gelen verileri al ve state aktar.(kitap ismi)
  2-ekle butonuna basıldığı anda forma girilen bilgilerle yeni bir obje oluştur.
  3-oluşturulan objenin değerleri, tarih/kitapIsmi/id/okunduMu değerleri olsun.
  4-oluşturulan objeyi kitaplar isminde bir diziye aktar.
  5-obje oluşturulduktan sonra inputu sıfırla.

AŞAMA-2
-books state inde tutulan kitapları al ve map metotu ile listele.
(react da birden fazla elemanı ekrana basmanın en kolay yoludur.)
 eğer state boşsa ekrana henüz kitap eklenmedi yaz.
-Card bileşenine kitap bilgileirni prop olarak gönder.
-Card bileşeninin kitapla ilgili bütün özelliklerini göster.

AŞAMA-3
Kitap Silme,
1-her hangi bir kitabın sil butonuna basıldığında 
çalışan fonksiyona silinecek olanın id si gitsin.
2-gelen idyi fonksiyona parametre al ve  silinecek id ye eşit olmayan objeleri tekrar state aktar.


Aşama-4
kitabı okundu olarak işaretle
1-okunudu butonuna basılınca çalışan fonksiyona kitabı parametre olarak gönder 
2-kitabın isRead değerini  tersine çevir
3-dizi içerisinde değişecek elemanı bul
4-o elemanı çıkar ve yerine yenisini ekle

Aşama-5
Düzenleme İşlemini yap
1-Düzenleme butonuna tıklandığında ekrana bir modal çıksın 
2-kitap isimini değiştirmek için bir input
3-input her değiştiğinde editInput değişkeninin günceller.
4-vazgeç butonu modalı kapatır
5-Kaydet butonu iput içeriğini alır ve state i günceller
6-Kitabı güncellerken 4.görevdeki adımları tkerarlar.
