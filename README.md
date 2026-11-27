# Museum of Me

Her anı, müzende bir yeri hak eder. Kişisel dijital anı müzesi.

## Başlatma

1. Node.js LTS kurun.
2. Proje klasöründe `npm install` çalıştırın.
3. `npm run dev` komutunu çalıştırıp terminaldeki adresi açın.
4. Üretim derlemesi için `npm run build`.

## Mimari

- `src/domain`: eser modeli ve kullanım senaryoları.
- `src/data`: LocalStorage deposu ve başlangıç eserleri.
- `src/presentation`: React sayfaları, ortak bileşenler ve ViewModel hookları.

ViewModel hook'u görünüm durumunu ve kullanıcı eylemlerini yönetir. React Router ana sayfa, koleksiyonlar ve eser detay rotalarını ayırır. Fotoğraflar küçültülerek LocalStorage'da saklanır. Depolama tarayıcı sınırlarına tabidir; bulut yedeği ve kullanıcı hesabı yoktur.
