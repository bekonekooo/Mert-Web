import React from 'react'

const MssPage = () => {
  const today = new Date().toLocaleDateString("tr-TR");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-sm leading-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">BİLGİLENDİRME METNİ</h1>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. TARAFLAR</h2>
      <p>
        İşbu metin aşağıdaki taraflar arasında düzenlenmiştir:
      </p>
      <p className="mt-2">
        <strong>HİZMET SAĞLAYICI:</strong> Bağnu Çorakçı Akademi <br />
        Adres: Antalya / TÜRKİYE <br />
        Telefon: +90 530 303 04 98 <br />
        E-posta: banucorakci@hotmail.com <br />
        İnternet Sitesi: https://bagnucorakciakademi.com
      </p>
      <p className="mt-2">
        <strong>KATILIMCI:</strong> Sitemiz üzerinden kişisel gelişim
        içeriklerine erişim sağlayan kullanıcılar.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. KONU</h2>
      <p>
        İşbu bilgilendirme metni, Bağnu Çorakçı Akademi’nin sunduğu kişisel gelişim
        içerikleri ve eğitimleri hakkında genel bilgileri içerir. Sitemiz üzerinden
        herhangi bir satış, sipariş veya kargo işlemi yapılmamaktadır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. GENEL HÜKÜMLER</h2>
      <ul className="list-disc ml-6">
        <li>
          Sitemizde yalnızca kişisel gelişim alanında eğitim, seminer ve
          bilgilendirme içerikleri sunulmaktadır.
        </li>
        <li>
          Herhangi bir fiziksel ürün satışı, sipariş veya kargo hizmeti
          bulunmamaktadır.
        </li>
        <li>
          Kullanıcılar, içeriklerden yalnızca kişisel gelişim ve eğitim
          amaçlı faydalanabilir.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. UYUŞMAZLIKLAR</h2>
      <p>
        Olası uyuşmazlıklarda Antalya Mahkemeleri yetkilidir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. YÜRÜRLÜK</h2>
      <p>
        Kullanıcı, site üzerinden içeriklere erişim sağladığında işbu bilgilendirme
        metnini kabul etmiş sayılır.
      </p>

      <p className="mt-6">
        <strong>HİZMET SAĞLAYICI:</strong> Bağnu Çorakçı Akademi <br />
        <strong>KATILIMCI:</strong> Online kullanıcı <br />
        <strong>Tarih:</strong> {today}
      </p>
    </div>
  )
}

export default MssPage
