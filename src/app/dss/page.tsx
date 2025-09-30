import React from 'react'

const DanismanlikSozlesmesi = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-sm leading-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">
        DANIŞMANLIK & SEMİNER SÖZLEŞMESİ
      </h1>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        BAĞNU ÇORAKÇI AKADEMİ DANIŞMANLIK SÖZLEŞMESİ
      </h2>
      <p>
        Aşağıda belirtilen şartlar, kurallar ve yasal sorumlulukları içeren
        hizmet sözleşmesine ilişkin düzenlenen KVKK politikası ve aydınlatma
        metni <strong>www.bagnucorakciakademi.com</strong> adresinde yer almakta
        olup, sözleşme onaylandığı anda kabul edilmiş sayılmaktadır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. TARAFLAR</h2>
      <p>
        Bir tarafta <strong>Bağnu Çorakçı Akademi</strong> (Antalya / Türkiye),
        diğer tarafta sözleşmeyi onaylayıp bilgilerini giren{' '}
        <strong>danışan</strong> bu sözleşmenin taraflarını oluşturur.
        Danışan, bilgilerini doğru ve eksiksiz şekilde beyan ettiğini taahhüt
        eder.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. KONU</h2>
      <p>
        Bu sözleşmenin konusunu, Bağnu Çorakçı Akademi bünyesinde verilen{' '}
        <strong>danışmanlık, kişisel gelişim eğitimi, seminer ve atölye
        çalışmaları</strong> oluşturmaktadır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. ÜCRET ŞARTLARI</h2>
      <ul className="list-disc ml-6">
        <li>
          Danışmanlık/seminer hizmeti almak isteyenler, bilgilerini eksiksiz
          bildirip belirlenen ücreti ödeyerek hizmet hakkı kazanırlar.
        </li>
        <li><strong>Bedelin iadesi mümkün değildir.</strong></li>
        <li>
          Ödeme tam ve eksiksiz yapıldığında hizmet kesinleşir.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. ÖZEL ŞARTLAR</h2>
      <ul className="list-disc ml-6">
        <li>Danışmanlığa ilişkin tüm bilgiler danışana verilmiştir.</li>
        <li>
          Danışan, kendisine ait bilgileri eksiksiz ve doğru şekilde kuruma
          iletmekle yükümlüdür.
        </li>
        <li>
          Hizmetin yeri, tarihi ve saatleri Bağnu Çorakçı Akademi tarafından
          belirlenmektedir.
        </li>
        <li>
          Danışanın belirlenen gün ve saatte katılım göstermesi esastır. Aksi
          halde telafi yapılmaz.
        </li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. GİZLİLİK</h2>
      <p>
        Taraflar, bu sözleşmeye dair tüm bilgileri gizli tutar ve üçüncü
        kişilerle paylaşmaz. Gizlilik ihlalinde bulunan taraf, diğer tarafa
        doğan tüm zararları tazmin etmekle yükümlüdür.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">
        6. FİKRİ MÜLKİYET HAKLARI
      </h2>
      <p>
        Bağnu Çorakçı Akademi’ye ait tüm unvan, marka, logo, tasarım, eğitim
        içerikleri ve diğer fikri mülkiyet hakları kurumun mülkiyetindedir.
        Sağlanan içerikler hiçbir şekilde çoğaltılamaz, yayınlanamaz,
        kopyalanamaz veya izinsiz kullanılamaz.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. SÖZLEŞME SÜRESİ</h2>
      <p>
        Bu sözleşme, taraflar arasında onaylandığı anda yürürlüğe girer ve
        hizmet dönemi boyunca geçerlidir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">8. TEBLİGAT ADRESLERİ</h2>
      <p>
        Taraflar, işbu sözleşmede belirttikleri adresler ile bağlıdır. Adres
        değişikliği yazılı olarak bildirilmediği sürece mevcut adreslere yapılan
        tebligatlar geçerli kabul edilir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">9. DELİL SÖZLEŞMESİ</h2>
      <p>
        İşbu sözleşme nedeniyle oluşacak ihtilaflarda, Bağnu Çorakçı Akademi
        tarafından tutulan kayıtlar, raporlar ve elektronik veriler kesin delil
        niteliğindedir.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">10. ANLAŞMAZLIK ÇÖZÜMÜ</h2>
      <p>
        Anlaşmazlıklar öncelikle taraflar arasında uzlaşma yoluyla çözülmeye
        çalışılacak, aksi halde Antalya Mahkemeleri ve İcra Müdürlükleri yetkili
        olacaktır.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">YÜRÜRLÜK</h2>
      <p>
        Bu sözleşme, taraflarca onaylandığı tarih itibarıyla okunarak kabul
        edilmiş sayılır.
      </p>

      <p className="mt-6">
        <strong>Bağnu Çorakçı Akademi</strong> <br />
        Yetkili İmza <br /><br />
        <strong>Danışan / Katılımcı</strong> <br />
        Yetkili İmza <br />
        <strong>Tarih:</strong> {new Date().toLocaleDateString('tr-TR')}
      </p>
    </div>
  )
}

export default DanismanlikSozlesmesi
