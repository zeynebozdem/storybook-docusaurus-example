import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/components/button">
            Bileşenleri Keşfet
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/storybook">
            Storybook'a Git
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Storybook ve Docusaurus Entegrasyonu Örneği">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--4">
              <div className="card margin-bottom--lg">
                <div className="card__header">
                  <h3>Bileşenler</h3>
                </div>
                <div className="card__body">
                  <p>
                    Uygulama genelinde kullanılan tüm bileşenler ve kullanım rehberleri.
                  </p>
                </div>
                <div className="card__footer">
                  <Link to="/docs/components/button" className="button button--outline button--primary button--block">
                    Bileşenler Kütüphanesi
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4">
              <div className="card margin-bottom--lg">
                <div className="card__header">
                  <h3>Storybook</h3>
                </div>
                <div className="card__body">
                  <p>
                    Bileşenleri etkileşimli olarak test edin ve inceleyin.
                  </p>
                </div>
                <div className="card__footer">
                  <Link to="/storybook" className="button button--outline button--primary button--block">
                    Storybook'u Aç
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="col col--4">
              <div className="card margin-bottom--lg">
                <div className="card__header">
                  <h3>Tasarım İlkeleri</h3>
                </div>
                <div className="card__body">
                  <p>
                    Projemizde kullandığımız tasarım ilkeleri ve kuralları.
                  </p>
                </div>
                <div className="card__footer">
                  <Link to="/docs/components/button" className="button button--outline button--primary button--block">
                    Tasarım Rehberi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
} 