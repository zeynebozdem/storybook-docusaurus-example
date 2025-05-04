# Katkıda Bulunma Kılavuzu

Bu dokümantasyon, projemize katkıda bulunmak isteyenler için rehber niteliğindedir. Hem bileşen geliştirme hem de dokümantasyon iyileştirme süreçleri için yönergeler içerir.

## 🌱 Başlarken

Projeyi yerel ortamınıza kurmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone https://github.com/zeynebozdem/storybook-docusaurus-example.git

# Proje dizinine gidin
cd storybook-docusaurus-example

# Bağımlılıkları yükleyin
npm install

# Storybook'u başlatın
npm run storybook

# Docusaurus'u başlatın (farklı bir terminalde)
npm run docs
```

## 📁 Proje Yapısı

Projemiz aşağıdaki ana bileşenlerden oluşur:

- **packages/core**: React bileşenleri ve Storybook hikayeleri
- **docusaurus**: Docusaurus ile oluşturulmuş dokümantasyon sitesi
- **docs-content**: Hem Storybook hem de Docusaurus'ta kullanılan ortak içerikler

## 🧩 Yeni Bileşen Ekleme

Yeni bir bileşen eklerken izlemeniz gereken adımlar:

1. `packages/core/src/components/` dizininde yeni bileşen dosyanızı oluşturun (örneğin: `NewComponent.tsx`)
2. Aynı dizinde `.stories.mdx` uzantılı Storybook hikayenizi oluşturun
3. `docs-content/` dizininde bileşen dokümantasyonu için markdown dosyası oluşturun
4. Her iki platformda da bileşeninizi test edin

### Bileşen Şablonu

```tsx
import React from 'react';

export interface NewComponentProps {
  /** Bileşen açıklaması */
  label: string;
  /** Diğer özellikler */
}

export const NewComponent: React.FC<NewComponentProps> = ({ 
  label, 
  ...props 
}) => {
  return (
    <div className="component" {...props}>
      {label}
    </div>
  );
};
```

### Storybook Hikaye Şablonu

```mdx
import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';
import { NewComponent } from './NewComponent';
import newComponentDocs from '../../../docs-content/new-component.md';

<Meta title="Components/NewComponent" component={NewComponent} />

<h1>NewComponent</h1>

<Canvas>
  <Story name="Default">
    <NewComponent label="Örnek Bileşen" />
  </Story>
</Canvas>

<ArgsTable of={NewComponent} />

<div dangerouslySetInnerHTML={{ __html: newComponentDocs }} />
```

## 📝 Dokümantasyon Geliştirme

Dokümantasyon geliştirirken dikkat edilmesi gerekenler:

1. Tüm bileşen dokümantasyonlarını `docs-content/` dizininde tutun
2. Markdown formatını kullanın
3. Örnekler ve kod parçacıkları ekleyin
4. Docusaurus için özel bileşenler oluşturuyorsanız, `docusaurus/src/components/` dizinini kullanın

## 🧪 Test Etme

Değişikliklerinizi göndermeden önce:

1. Linting kontrollerini çalıştırın: `npm run lint`
2. Testleri çalıştırın: `npm run test`
3. Hem Storybook hem de Docusaurus'ta değişikliklerinizi kontrol edin

## 🚀 Pull Request Gönderme

1. Kendi fork'unuzu oluşturun
2. Yeni bir branch oluşturun: `git checkout -b feature/amazing-feature`
3. Değişikliklerinizi commit edin: `git commit -m 'feat: harika bir özellik eklendi'`
4. Branch'inizi push edin: `git push origin feature/amazing-feature`
5. Bir Pull Request oluşturun

## 📌 Commit Mesajları

Commit mesajlarınızı [Conventional Commits](https://www.conventionalcommits.org/) formatında yazın:

- `feat:` - Yeni bir özellik
- `fix:` - Hata düzeltmesi
- `docs:` - Sadece dokümantasyon değişiklikleri
- `style:` - Kod stili değişiklikleri (boşluk, format vb.)
- `refactor:` - Kod refaktörü
- `test:` - Test ekleme veya düzenleme
- `chore:` - Yapılandırma, derleme süreci vb. değişiklikler

## 🌐 İletişim

Sorularınız veya önerileriniz için [GitHub Issues](https://github.com/zeynebozdem/storybook-docusaurus-example/issues) üzerinden iletişime geçebilirsiniz. 