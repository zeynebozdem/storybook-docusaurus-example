# Storybook ve Docusaurus Entegrasyonu Örneği

Bu proje, tasarım sistemimizin dokümantasyonunu ve bileşenlerini içerir. Proje iki ana parçadan oluşur:

## 📁 Proje Yapısı

```
.
├── packages/
│   └── core/                 # React bileşenleri ve Storybook
│       ├── src/
│       │   └── components/   # UI bileşenleri
│       └── .storybook/      # Storybook konfigürasyonu
│
├── docusaurus/              # Docusaurus dokümantasyon sitesi
│   └── docs/
│       └── components/      # Bileşen dokümantasyonları
│
└── docs-content/            # Ortak dokümantasyon içerikleri
    └── button.md           # Button bileşeni içeriği
```

## 🚀 Başlangıç

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Storybook'u başlatın:
   ```bash
   npm run storybook
   ```

3. Docusaurus'u başlatın:
   ```bash
   npm run docs
   ```

## 📝 Dokümantasyon Yapısı

- Tüm bileşen dokümantasyonları `docs-content/` klasöründe merkezi olarak yönetilir
- Bu içerikler hem Storybook hem de Docusaurus tarafından import edilir
- Böylece dokümantasyon güncellemeleri her iki platformda da otomatik olarak yansır

## 🔄 Geliştirme Akışı

1. Yeni bir bileşen eklerken:
   - `packages/core/src/components/` altında bileşeni oluşturun
   - `docs-content/` altında dokümantasyon içeriğini ekleyin
   - Storybook ve Docusaurus entegrasyonlarını yapın

2. Dokümantasyon güncellemesi yaparken:
   - Sadece `docs-content/` altındaki ilgili dosyayı güncelleyin
   - Değişiklikler otomatik olarak her iki platformda görünür olacaktır 