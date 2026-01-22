// app/layout.tsx
'use client';

import { useState } from 'react';
import './global.css';
import './header.css';
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Формула налога - Юридические и налоговые услуги</title>
        <meta name="description" content="Профессиональные юридические и налоговые услуги для бизнеса" />
      </head>
      <body>
        <header>
          <nav>
            <div className="logo-container">
              <Link href="/" onClick={closeMenu}>
                <Image 
                  src="/logo.png" 
                  alt="Формула налога" 
                  width={250}
                  height={150}
                  className="logo"
                  priority
                />
              </Link>
            </div>
            
            {/* Бургер меню для мобильных */}
            <button 
              className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Меню"
              aria-expanded={isMenuOpen}
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
            
            {/* Десктопное меню */}
            <div className="nav-links">
              <Link href="/" className='TextNav'>Главная</Link>
              <Link href="/case" className='TextNav'>Наши кейсы</Link>
              <Link href="/catalog" className='TextNav'>Каталог</Link>
              <Link href="/about" className='TextNav'>Обо мне</Link>
            </div>
          </nav>
          
          {/* Мобильное меню */}
          <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-links">
              <Link href="/" className='TextNav' onClick={closeMenu}>
                <span className="nav-icon">🏠</span>
                Главная
              </Link>
              <Link href="/case" className='TextNav' onClick={closeMenu}>
                <span className="nav-icon">📁</span>
                Наши кейсы
              </Link>
              <Link href="/catalog" className='TextNav' onClick={closeMenu}>
                <span className="nav-icon">📋</span>
                Каталог
              </Link>
              <Link href="/about" className='TextNav' onClick={closeMenu}>
                <span className="nav-icon">👤</span>
                Обо мне
              </Link>
              
              <div className="mobile-contact-info">
                <a href="tel:+79124469202" className="mobile-phone">
                  <span className="phone-icon">📞</span>
                  +7 (912) 446-92-02
                </a>
                <div className="mobile-social">
                  <a href="https://t.me/KosarevaKEA" className="mobile-social-btn">
                    <Image 
                      src="/tg.png" 
                      alt="Telegram"
                      width={24}
                      height={24}
                    />
                    <span>Telegram</span>
                  </a>
                  <a href="https://vk.com/elenaakosareva" className="mobile-social-btn">
                    <Image 
                      src="/vk.png" 
                      alt="ВКонтакте"
                      width={24}
                      height={24}
                    />
                    <span>ВКонтакте</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Оверлей для мобильного меню */}
          <div 
            className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="footer-logo">
                  <Image 
                    src="/logo.png" 
                    alt="Формула налога"
                    width={150}
                    height={90}
                    priority
                  />
                </div>
                <p className="footer-tagline">
                  Профессиональные юридические и налоговые услуги для бизнеса
                </p>
                <div className="footer-contact">
                  <a href="tel:+79124469202" className="footer-phone">
                    <span className="contact-icon">📞</span>
                    +7 (912) 446-92-02
                  </a>
                  <p className="footer-email">
                    <span className="contact-icon">✉️</span>
                    @formula-naloga.ru
                  </p>
                </div>
              </div>
              
              <div className="footer-section">
                <h4>Услуги</h4>
                <ul className="footer-links">
                  <li><Link href="/catalog" onClick={closeMenu}>Налоговые консультации</Link></li>
                  <li><Link href="/catalog" onClick={closeMenu}>Юридическое сопровождение</Link></li>
                  <li><Link href="/catalog" onClick={closeMenu}>Бухгалтерские услуги</Link></li>
                  <li><Link href="/catalog" onClick={closeMenu}>Судебная защита</Link></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Компания</h4>
                <ul className="footer-links">
                  <li><Link href="/case" onClick={closeMenu}>Наши кейсы</Link></li>
                  <li><Link href="/catalog" onClick={closeMenu}>Каталог услуг</Link></li>
                  <li><Link href="/about" onClick={closeMenu}>Обо мне</Link></li>
                  <li><a href="https://yandex.ru/maps/44/izhevsk/?ll=53.223893%2C56.835490&mode=routes&rtext=~56.835490%2C53.223893&rtt=auto&ruri=~&z=17">Контакты</a></li>
                </ul>
              </div>
              
              <div className="footer-section">
                <h4>Связаться с нами</h4>
                <div className="footer-social">
                  <a href="https://t.me/kosarevaelenaa" className="social-btn telegram" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/tg.png" 
                      alt="Telegram"
                      width={20}
                      height={20}
                    />
                    <span>Telegram</span>
                  </a>
                  <a href="https://vk.com/elenaakosareva" className="social-btn vk" target="_blank" rel="noopener noreferrer">
                    <Image 
                      src="/vk.png" 
                      alt="ВКонтакте"
                      width={20}
                      height={20}
                    />
                    <span>ВКонтакте</span>
                  </a>
                  <a href="https://yandex.ru/maps/44/izhevsk/?ll=53.223893%2C56.835490&mode=routes&rtext=~56.835490%2C53.223893&rtt=auto&ruri=~&z=17" 
                     className="social-btn location" target="_blank" rel="noopener noreferrer">
                    <span className="location-icon">📍</span>
                    <span>Как доехать</span>
                  </a>
                </div>
                <div className="footer-cta">
                  <a 
                    href="https://t.me/KosarevaKEA" 
                    className="footer-order-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Заказать консультацию
                  </a>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>© 2025 Директор ООО Формула налога ИНН 180001972. Все права защищены.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}