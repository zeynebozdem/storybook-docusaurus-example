# Değişiklik Günlüğü

Bu projede yapılan tüm önemli değişiklikler bu dosyada belgelenecektir.

Format, [Keep a Changelog](https://keepachangelog.com/tr/1.0.0/) prensiplerini takip etmektedir ve bu proje [Semantik Versiyonlama](https://semver.org/lang/tr/) kullanmaktadır.

## [Yayınlanmamış]

### Eklenenler
- GitHub CI/CD entegrasyonu

### Değişenler
- Belgelendirme iyileştirmeleri

### Düzeltilenler
- Küçük CSS düzeltmeleri

## [1.0.0] - 2023-05-04

### Eklenenler
- İlk sürüm
- 5 temel bileşen: Button, Input, Checkbox, Dropdown, Modal
- Storybook entegrasyonu
- Docusaurus entegrasyonu
- Ortak dokümantasyon yapısı
- Bileşen örnekleri ve kullanım belgeleri
- Temiz ve modern UI tasarımı

### Değiştirildi
- Bileşen mimarisi optimize edildi
- Tema değişkenleri tek bir yerden yönetilecek şekilde düzenlendi

### Düzeltildi
- Tarayıcı uyumluluğu sorunları giderildi
- Erişilebilirlik iyileştirmeleri yapıldı

## Sürüm Türleri

Her sürüm aşağıdaki kategorilerden birinde sınıflandırılabilir:

- **Major (X.y.z)** - Geriye dönük uyumlu olmayan API değişiklikleri
- **Minor (x.Y.z)** - Geriye dönük uyumlu yeni özellikler
- **Patch (x.y.Z)** - Geriye dönük uyumlu hata düzeltmeleri

## Sürüm Etiketi Şablonu

Her sürüm etiketi şu şablonu takip eder:

```
[{prefix}]v{major}.{minor}.{patch}
```

Örnek:
- `v1.0.0` - İlk kararlı sürüm
- `v1.1.0` - Yeni özellikler içeren bir minor sürüm
- `v1.1.1` - Hata düzeltmeleri içeren bir patch sürüm
- `beta-v1.2.0` - Beta sürümü

## Commit Mesajları

Commit mesajları [Conventional Commits](https://www.conventionalcommits.org/) formatını takip etmelidir:

- `feat:` - Yeni bir özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Dokümantasyon değişiklikleri
- `style:` - Kod tarzı değişiklikleri
- `refactor:` - Kod değişikliği içeren ancak ne yeni özellik ne de hata düzeltmesi olan değişiklikler
- `perf:` - Performans iyileştirmeleri
- `test:` - Test ekleme veya düzenleme
- `build:` - Derleme sistemi veya harici bağımlılıklarla ilgili değişiklikler
- `ci:` - CI yapılandırma dosyalarında ve betiklerinde değişiklik
- `chore:` - Diğer değişiklikler

## Otomatik Sürüm Oluşturma

Bu proje, commit mesajlarına dayalı otomatik sürüm oluşturma için [semantic-release](https://github.com/semantic-release/semantic-release) kullanmaktadır.

---

[Yayınlanmamış]: https://github.com/zeynebozdem/storybook-docusaurus-example/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/zeynebozdem/storybook-docusaurus-example/releases/tag/v1.0.0 