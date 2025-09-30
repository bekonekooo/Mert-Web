import React from 'react'

const KvkPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-sm leading-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">
        KİŞİSEL VERİLERİN KORUNMASI VE GİZLİLİK POLİTİKASI
      </h1>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Giriş</h2>
      <p>
        bagnucorakciakademi.com olarak kişisel verilerinizin korunmasına önem veriyoruz. 
        Bu politika; hangi verilerin toplandığını, nasıl işlendiğini ve hangi amaçlarla 
        kullanıldığını açıklamaktadır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. Toplanan Veriler</h2>
      <ul className="list-disc ml-6">
        <li>Ad, soyad, telefon numarası, e-posta</li>
        <li>Eğitim, seminer ve danışmanlık hizmetleri için gerekli iletişim bilgileri</li>
        <li>Site kullanım verileri (çerezler, IP adresi, tarayıcı bilgisi)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Veri İşleme Amaçları</h2>
      <ul className="list-disc ml-6">
        <li>Eğitim, seminer ve danışmanlık hizmetlerinin sunulması</li>
        <li>Katılımcılarla iletişimin sağlanması</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Pazarlama ve bilgilendirmeler (açık rıza ile)</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Verilerin Paylaşımı</h2>
      <p>
        Kişisel verileriniz yalnızca yasal zorunluluklar çerçevesinde ilgili kamu kurumları 
        ve resmi mercilerle paylaşılır. Üçüncü şahıslara ticari amaçla aktarılmaz.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Çerezler (Cookies)</h2>
      <p>
        Site deneyiminizi geliştirmek için çerezler kullanılmaktadır. Çerezleri 
        tarayıcı ayarlarınızdan kısıtlayabilir veya tamamen kapatabilirsiniz.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. Haklarınız</h2>
      <p>
        KVKK kapsamında, kişisel verileriniz üzerinde aşağıdaki haklara sahipsiniz:
      </p>
      <ul className="list-disc ml-6">
        <li>Verilerinize erişim talep etme</li>
        <li>Düzeltme, silme veya güncelleme isteme</li>
        <li>İşlenmesini sınırlandırma</li>
        <li>Veri taşınabilirliği talep etme</li>
        <li>
          İşlemeye ilişkin itirazda bulunma ve açık rızanızı geri çekme hakkı
        </li>
      </ul>
      <p className="mt-2">
        Bu haklarınızı kullanmak için{' '}
        <strong>banucorakci@hotmail.com</strong> adresine yazılı başvuruda
        bulunabilirsiniz.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. Güvenlik</h2>
      <p>
        Tüm verileriniz SSL sertifikası ile korunmakta olup, yetkisiz erişime 
        karşı güvenlik önlemleri alınmaktadır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">8. İletişim</h2>
      <p>
        Adres: Antalya / Türkiye <br />
        Telefon: +90 530 303 04 98 <br />
        E-posta: banucorakci@hotmail.com
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">9. Yürürlük</h2>
      <p>
        Bu politika 30.09.2025 tarihinde güncellenmiştir ve bagnucorakciakademi.com 
        üzerinde yayınlandığı tarihten itibaren yürürlüğe girer.
      </p>
    </div>
  )
}

export default KvkPage
