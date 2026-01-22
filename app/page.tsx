'use client';

import { useState, useRef } from 'react';

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const copyPhone = async () => {
    const phoneNumber = '+7 (912) 446-92-02';
    
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phoneNumber);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowTooltip(false);
      }, 2000);
      
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsSoundOn(!videoRef.current.muted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <main>
      <h1><b>Формула налога</b></h1>
      <div className="naz">
        Юридические услуги, Адвокаты, Бухгалтерские услуги
      </div>
      <div className="Slogan">
        «Мы не просто консультируем — мы решаем проблемы и предотвращаем риски!»
      </div>
      
      <div className="Stroki">
        <div 
          className={`Box2 ${copied ? 'copied' : ''}`} 
          onClick={copyPhone} 
          onMouseEnter={() => !copied && setShowTooltip(true)}
          onMouseLeave={() => !copied && setShowTooltip(false)}
          style={{ 
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <b>{copied ? '✓ Скопировано!' : '+7 (912) 446-92-02'}</b>
          
          {showTooltip && !copied && (
            <div className="tooltip">
              Нажмите чтобы скопировать
            </div>
          )}

          {copied && (
            <div className="copied-indicator">
              ✓
            </div>
          )}
        </div>
        <a href="https://yandex.ru/maps/44/izhevsk/?ll=53.223893%2C56.835490&mode=routes&rtext=~56.835490%2C53.223893&rtt=auto&ruri=~&z=17" className='Box2'>
          📍 Как доехать
        </a>
        <a href="https://t.me/KosarevaKEA" className="Box2">
          📱 Телеграм
        </a>
        <a href="https://vk.com/elenaakosareva" className='Box2'>
          👥 Вконтакте
        </a>
      </div>
      
      <div className='Container'> 
        <div className="video-wrapper">
          <video 
            ref={videoRef}
            className="video"
            muted={!isSoundOn}
            loop
            playsInline
            onClick={handleVideoClick}
            onEnded={handleVideoEnd}
            poster="/video-poster.jpg"
          >
            <source src="/video.mp4" type="video/mp4" />
            <source src="/video.webm" type="video/webm" />
            Ваш браузер не поддерживает видео.
          </video>
          
          {!isPlaying && (
            <div className="video-overlay" onClick={togglePlay}>
              <div className="play-button">
                <div className="play-circle">
                  <span className="play-icon">▶</span>
                </div>
              </div>
            </div>
          )}
          
          <div className="video-controls">
            <button 
              className="control-btn"
              onClick={togglePlay}
            >
              {isPlaying ? '⏸️ Пауза' : '▶ Воспроизвести'}
            </button>
            
            <button 
              className="control-btn sound-btn"
              onClick={toggleSound}
            >
              {isSoundOn ? '🔊 Вкл' : '🔇 Выкл'}
            </button>
          </div>
        </div>
        
        <div className="text-content">
          <h2>Мы не просто консультируем — мы решаем проблемы и предотвращаем риски!</h2>
          <p>Мы решаем проблемы и предотвращаем риски! В условиях изменения налогового законодательства и судебной практики необходима переоценка бизнес-процессов и новые подходы для сохранения прибыли в бизнесе!</p>
          
          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">⚖️</span>
              <span>Юридическое сопровождение</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Налоговое консультирование</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <span>Защита в судах</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}