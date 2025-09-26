import React from 'react'

const MssPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-sm leading-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">MESAFELİ SATIŞ SÖZLEŞMESİ</h1>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. TARAFLAR</h2>
      <p>
        İşbu sözleşme aşağıdaki taraflar arasında düzenlenmiştir:
      </p>
      <p className="mt-2">
        <strong>SATICI:</strong> Nazif Eken <br />
        Adres: Yeşilbahçe Mah. Metin Kasapoğlu Cad. Yorgancıoğlu Apt. A Blok
        No:27/A Muratpaşa / ANTALYA <br />
        Telefon: 0507 213 41 81 <br />
        E-posta: dgceken7@outlook.com <br />
        İnternet Sitesi: https://optikce.com
      </p>
      <p className="mt-2">
        <strong>ALICI:</strong> Sitemiz üzerinden alışveriş yapan tüm tüketiciler.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. KONU</h2>
      <p>
        İşbu sözleşme, ALICI’nın SATICI’ya ait internet sitesi (optikce.com)
        üzerinden sipariş verdiği gözlük, lens ve aksesuar ürünlerinin satış ve
        teslimine ilişkin olarak 6502 sayılı TKHK ve Mesafeli Sözleşmeler
        Yönetmeliği hükümleri uyarınca tarafların hak ve yükümlülüklerini
        düzenler.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. GENEL HÜKÜMLER</h2>
      <ul className="list-disc ml-6">
        <li>
          ALICI, sipariş öncesi ürünlerin nitelikleri, satış fiyatı, ödeme ve
          teslimat bilgileri hakkında bilgilendirildiğini kabul eder.
        </li>
        <li>
          SATICI, ürünleri eksiksiz, ayıpsız ve mevzuata uygun olarak teslim
          etmekle yükümlüdür.
        </li>
        <li>
          Teslimat, ALICI’nın sipariş formunda belirttiği adrese yapılır. Yanlış
          adres bildirimi ALICI’nın sorumluluğundadır.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. TESLİMAT</h2>
      <p>
        Ürünler sipariş onayından itibaren en geç 7 iş günü içinde kargoya
        verilir. Kargo ücreti aksi belirtilmedikçe ALICI’ya aittir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. CAYMA HAKKI</h2>
      <p>
        ALICI, ürünü teslim aldığı tarihten itibaren <strong>4 gün içinde</strong>{' '}
        cayma hakkını kullanabilir. Cayma hakkı kapsamında ürünün kullanılmamış,
        hasarsız ve tekrar satılabilir durumda olması şarttır. Cayma hakkı
        kullanıldığında kargo bedeli ALICI’ya aittir. Sağlık ve hijyen nedeniyle
        lens ve açılmış ambalajlı ürünlerde cayma hakkı kullanılamaz.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. TEMERRÜT</h2>
      <p>
        ALICI kredi kartı ile ödeme yapmış ve temerrüde düşmüşse, banka ile
        arasındaki sözleşme gereği faiz ve masraflardan sorumlu olur.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. UYUŞMAZLIKLAR</h2>
      <p>
        Uyuşmazlıklarda Antalya Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri
        yetkilidir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">8. YÜRÜRLÜK</h2>
      <p>
        ALICI, site üzerinden sipariş verip ödeme yaptığında işbu sözleşmenin tüm
        şartlarını kabul etmiş sayılır.
      </p>

      <p className="mt-6">
        <strong>SATICI:</strong> Nazif Eken <br />
        <strong>ALICI:</strong> Online alışveriş yapan tüketici <br />
        <strong>Tarih:</strong> [sipariş tarihi]
      </p>
    </div>
  )
}

export default MssPage