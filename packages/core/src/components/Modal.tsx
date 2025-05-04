import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  /** Modal başlığı */
  title: string;
  /** Modal içeriği */
  children: React.ReactNode;
  /** Modal açık/kapalı durumu */
  isOpen: boolean;
  /** Kapatma işleyicisi */
  onClose: () => void;
  /** Kapatma butonuna alternatif metin */
  closeButtonText?: string;
}

export const Modal = ({
  title,
  children,
  isOpen,
  onClose,
  closeButtonText = 'Kapat',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()} 
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">{title}</h2>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label={closeButtonText}
          >
            ×
          </button>
        </div>
        <div className="modal-content">
          {children}
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            {closeButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}; 