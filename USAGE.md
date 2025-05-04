# Kullanım Kılavuzu

Bu dokümantasyon, Storybook ve Docusaurus entegrasyonu ile oluşturulmuş bu projenin nasıl kullanılacağını açıklar. Hem geliştiriciler hem de tasarımcılar için faydalı bilgiler içerir.

## 📚 İçindekiler

- [Başlangıç](#başlangıç)
- [Storybook Kullanımı](#storybook-kullanımı)
- [Docusaurus Kullanımı](#docusaurus-kullanımı)
- [Bileşen Entegrasyonu](#bileşen-entegrasyonu)
- [Özelleştirme](#özelleştirme)
- [SSS](#sık-sorulan-sorular)

## 🚀 Başlangıç

Projeyi yerel ortamınıza kurmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/zeynebozdem/storybook-docusaurus-example.git

# Proje dizinine gidin
cd storybook-docusaurus-example

# Bağımlılıkları yükleyin
npm install
```

Temel komutlar:

| Komut | Açıklama |
|-------|----------|
| `npm run storybook` | Storybook geliştirme sunucusunu başlatır |
| `npm run docs` | Docusaurus geliştirme sunucusunu başlatır |
| `npm run build` | Tüm projeyi derler |
| `npm run build-storybook` | Storybook'u statik dosyalara derler |
| `npm run build-docs` | Docusaurus'u statik dosyalara derler |

## 📖 Storybook Kullanımı

Storybook, bileşen kütüphanemizi keşfetmek ve interaktif olarak test etmek için harika bir araçtır.

### Storybook'u Başlatma

```bash
npm run storybook
```

Bu komut, tarayıcınızda Storybook'u açacaktır (varsayılan olarak http://localhost:6006).

### Storybook'ta Gezinme

1. **Bileşen Keşfi**: Sol kenar çubuğunda tüm bileşenlerimizi kategorilere ayrılmış şekilde bulabilirsiniz.
2. **İnteraktif Örnekler**: Her bileşenin farklı durumlarını (state) görebilir ve "Controls" sekmesi ile özelliklerini değiştirebilirsiniz.
3. **Dokümantasyon**: "Docs" sekmesi, her bileşen için ayrıntılı dokümantasyon ve kullanım örnekleri sunar.
4. **Erişilebilirlik Testleri**: "Accessibility" sekmesi ile bileşenlerinizin erişilebilirlik standartlarına uygunluğunu kontrol edebilirsiniz.

### Özel Hikayelerin Oluşturulması

Bir bileşen için özel bir hikaye oluşturmak için:

```jsx
// MyComponent.stories.js
import { MyComponent } from './MyComponent';

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  argTypes: {
    // Bileşen prop'ları için kontroller
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <MyComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Birincil',
  backgroundColor: '#ff0000',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'İkincil',
  backgroundColor: '#00ff00',
};
```

## 🌐 Docusaurus Kullanımı

Docusaurus, bileşen dokümantasyonumuzu, kullanım kılavuzlarını ve tasarım prensiplerini içeren kapsamlı bir dokümantasyon sitesi sunar.

### Docusaurus'u Başlatma

```bash
npm run docs
```

Bu komut, tarayıcınızda Docusaurus sitesini açacaktır (varsayılan olarak http://localhost:3000).

### Dokümantasyon Yapısı

- **Giriş**: Projeye genel bakış, kurulum ve başlangıç kılavuzları
- **Bileşenler**: Tüm bileşenlerin detaylı dokümantasyonu ve kullanım örnekleri
- **Tasarım Sistemi**: Tasarım prensipleri, renkler, tipografi ve diğer stil rehberleri
- **Geliştirici Kılavuzu**: Geliştiriciler için teknik dokümantasyon
- **Katkıda Bulunma**: Projeye katkı sağlama yönergeleri

### İçerik Ekleme

Docusaurus'a yeni içerik eklemek için:

1. `docusaurus/docs/` dizinine yeni bir Markdown veya MDX dosyası ekleyin
2. Dosya başına metadata ekleyin:

```md
---
id: my-doc-id
title: Doküman Başlığı
sidebar_label: Kenar Çubuğu Etiketi
---

İçerik buraya gelecek...
```

3. `docusaurus/sidebars.js` dosyasını güncelleyerek kenar çubuğuna ekleyin

## 🧩 Bileşen Entegrasyonu

Projenizdeki bileşenleri kendi uygulamanıza entegre etmek için:

### NPM paketi olarak kullanım

```bash
npm install @zeynepozdem/storybook-docusaurus-example
```

```jsx
import { Button, Input, Modal } from '@zeynepozdem/storybook-docusaurus-example';

function App() {
  return (
    <div>
      <Button label="Tıkla" onClick={() => alert('Merhaba!')} />
      <Input placeholder="Adınız" />
    </div>
  );
}
```

### Doğrudan kaynak kodundan

Bileşenleri doğrudan projenizden kopyalayabilirsiniz:

1. `packages/core/src/components/` dizininden istediğiniz bileşeni kopyalayın
2. Projenize ekleyin ve bağımlılıkları yükleyin
3. Projenizde import edin ve kullanın

## 🎨 Özelleştirme

### Tema Özelleştirme

Renk paletini, tipografiyi ve diğer tema özelliklerini değiştirmek için:

1. Storybook: `.storybook/preview.js` dosyasını düzenleyin
2. Docusaurus: `docusaurus/src/css/custom.css` dosyasını düzenleyin

### Bileşen Özelleştirme

Bileşenleri kendi ihtiyaçlarınıza göre özelleştirebilirsiniz:

```jsx
// Örnek özelleştirme
import { Button } from '@zeynepozdem/storybook-docusaurus-example';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  border-radius: 10px;
  background-color: purple;
`;

function App() {
  return <CustomButton label="Özelleştirilmiş Buton" />;
}
```

## ❓ Sık Sorulan Sorular

### Storybook ve Docusaurus neden birlikte kullanılıyor?

Storybook, bileşenlerin görsel olarak test edilmesi ve geliştirilmesi için mükemmel bir ortam sunarken, Docusaurus daha geniş kapsamlı dokümantasyon için ideal bir çözümdür. İkisini birlikte kullanmak, hem geliştiriciler hem de tasarımcılar için kapsamlı bir ekosistem oluşturur.

### Bileşenleri projeme nasıl dahil edebilirim?

Bileşenleri doğrudan kaynak kodundan kopyalayabilir veya (eğer yayınlanmışsa) NPM üzerinden paket olarak yükleyebilirsiniz. Ayrıntılar için [Bileşen Entegrasyonu](#bileşen-entegrasyonu) bölümüne bakın.

### Yeni bir bileşen eklemek istiyorum, nasıl yapabilirim?

Bileşen ekleme süreci ve şablonlar için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını inceleyebilirsiniz.

### Hata buldum, nasıl bildirebilirim?

Hataları [GitHub Issues](https://github.com/zeynebozdem/storybook-docusaurus-example/issues) üzerinden bildirebilirsiniz. Lütfen olabildiğince detaylı açıklama ve gerekirse ekran görüntüleri ekleyin.

---

Daha fazla soru veya destek için lütfen [GitHub Issues](https://github.com/zeynebozdem/storybook-docusaurus-example/issues) üzerinden iletişime geçin. 