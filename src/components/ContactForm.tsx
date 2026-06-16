import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle, Archive, Trash2, ShieldCheck, MailCheck } from "lucide-react";
import Modal from "./Modal";

interface LocalMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [outbox, setOutbox] = useState<LocalMessage[]>([]);
  const [showOutbox, setShowOutbox] = useState(false);

  // Load outbox messages from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("portfolio_messages");
    if (saved) {
      try {
        setOutbox(JSON.parse(saved));
      } catch (e) {
        console.error("Gagal memuat outbox", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      const newMessage: LocalMessage = {
        id: crypto.randomUUID(),
        name,
        email,
        subject: subject || "Perihal Kerja Sama Umum",
        message,
        date: new Date().toLocaleString("id-ID")
      };

      const updatedOutbox = [newMessage, ...outbox];
      setOutbox(updatedOutbox);
      localStorage.setItem("portfolio_messages", JSON.stringify(updatedOutbox));

      setIsSubmitting(false);
      setIsSuccess(true);

      // Clear fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");

      // Revert success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
        setIsModalOpen(false);
      }, 3500);
    }, 1500);
  };

  const handleClearMessage = (id: string) => {
    const updated = outbox.filter((m) => m.id !== id);
    setOutbox(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8" id="contact">
      {/* Icon header */}
      <div className="flex justify-center">
        <div className="p-4 bg-brand-primary/10 rounded-full border border-brand-primary/30 text-brand-primary animate-pulse">
          <Mail className="w-8 h-8" />
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl text-brand-on-surface tracking-tight">
          Mari Bekerja Sama
        </h2>
        <p className="font-sans text-base sm:text-lg text-brand-on-surface-variant leading-relaxed">
          Situs ini sedang terbuka untuk penawaran proyek lepas (freelance) atau full-time. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan membalas pesan Anda secepatnya!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          id="contact-say-hello-trigger"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center px-10 py-4 bg-brand-primary text-brand-on-primary font-bold text-xs uppercase tracking-widest rounded-md hover:bg-brand-primary-container hover:shadow-lg hover:shadow-brand-primary/15 transition-all duration-300 w-full sm:w-auto cursor-pointer"
        >
          Say Hello <Send className="w-4 h-4 ml-2" />
        </button>

        {outbox.length > 0 && (
          <button
            id="contact-view-outbox-button"
            onClick={() => setShowOutbox(!showOutbox)}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-primary hover:underline py-2 px-3 hover:bg-brand-surface-container/30 rounded"
          >
            <Archive className="w-4 h-4" /> Kotak Keluar ({outbox.length})
          </button>
        )}
      </div>

      {/* Outbox Messages Log list console */}
      {showOutbox && outbox.length > 0 && (
        <div className="max-w-xl mx-auto text-left rounded-xl border border-brand-outline-variant bg-brand-surface-container-low p-5 space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center pb-2 border-b border-brand-outline-variant/30">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-primary font-bold flex items-center gap-1.5">
              <Archive className="w-4 h-4" /> Riwayat Pesan Terkirim (Lokal)
            </h4>
            <span className="text-[10px] font-mono text-brand-on-surface-variant font-medium">Beban Sinkron</span>
          </div>
          <div className="space-y-3.5 max-h-56 overflow-y-auto pr-1">
            {outbox.map((msg) => (
              <div key={msg.id} className="p-3 bg-brand-surface border border-brand-outline-variant/30 rounded text-xs space-y-1">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-brand-on-surface">{msg.name} ({msg.email})</span>
                  <button
                    id={`delete-outbox-msg-${msg.id}`}
                    onClick={() => handleClearMessage(msg.id)}
                    className="text-brand-on-surface-variant hover:text-red-400 p-0.5"
                    title="Hapus riwayat"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[11px] font-mono text-brand-primary font-medium">{msg.subject}</div>
                <p className="text-brand-on-surface-variant leading-relaxed italic">"{msg.message}"</p>
                <div className="text-[9px] font-mono text-brand-on-surface-variant/60 text-right">{msg.date}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Social and quick contacts wrapper closer */}
      <div className="pt-8 border-t border-brand-outline-variant/20 flex flex-col items-center gap-4">
        <span className="font-mono text-xs tracking-wider text-brand-on-surface-variant uppercase font-semibold">Tautan Langsung</span>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full border border-brand-outline-variant/60 hover:bg-brand-primary/10 hover:border-brand-primary hover:text-brand-primary flex items-center justify-center text-brand-on-surface-variant transition-all hover:-translate-y-1"
          >
            <Send className="w-4 h-4 pointer-events-none" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border border-brand-outline-variant/60 hover:bg-brand-primary/10 hover:border-brand-primary hover:text-brand-primary flex items-center justify-center text-brand-on-surface-variant transition-all hover:-translate-y-1"
          >
            <Mail className="w-4 h-4 pointer-events-none" />
          </a>
        </div>
      </div>

      {/* Interactive Messaging Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          if (!isSubmitting) setIsModalOpen(false);
        }}
        title="Kirim Pesan Baru"
      >
        {isSuccess ? (
          <div className="py-8 text-center space-y-4 flex flex-col items-center justify-center">
            <div className="w-14 h-14 bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/30 flex items-center justify-center animate-bounce">
              <MailCheck className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-brand-primary">Pesan Terkirim Sukses!</h3>
            <p className="text-sm font-sans text-brand-on-surface-variant max-w-sm mx-auto leading-relaxed">
              Terima kasih! Pesan Anda telah dicatat di Outbox lokal browser Anda. Saya akan meninjau dan merespons sesegera mungkin.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label htmlFor="input-name" className="text-[11px] font-mono uppercase tracking-wider text-brand-on-surface-variant font-bold">
                Nama Lengkap <span className="text-brand-primary">*</span>
              </label>
              <input
                id="input-name"
                type="text"
                required
                disabled={isSubmitting}
                placeholder="Masukkan nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-brand-surface-container border border-brand-outline-variant/60 hover:border-brand-outline-variant focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded outline-none text-brand-on-surface text-sm transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="input-email" className="text-[11px] font-mono uppercase tracking-wider text-brand-on-surface-variant font-bold">
                  Email Address <span className="text-brand-primary">*</span>
                </label>
                <input
                  id="input-email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="nama@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-brand-surface-container border border-brand-outline-variant/60 hover:border-brand-outline-variant focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded outline-none text-brand-on-surface text-sm transition-all"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="input-subject" className="text-[11px] font-mono uppercase tracking-wider text-brand-on-surface-variant font-bold">
                  Topik Perihal
                </label>
                <input
                  id="input-subject"
                  type="text"
                  disabled={isSubmitting}
                  placeholder="Proyek Baru, Sapaan, dll"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 bg-brand-surface-container border border-brand-outline-variant/60 hover:border-brand-outline-variant focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded outline-none text-brand-on-surface text-sm transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="input-message" className="text-[11px] font-mono uppercase tracking-wider text-brand-on-surface-variant font-bold">
                Pesan <span className="text-brand-primary">*</span>
              </label>
              <textarea
                id="input-message"
                required
                disabled={isSubmitting}
                rows={4}
                placeholder="Tulis pesan Anda di sini..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 bg-brand-surface-container border border-brand-outline-variant/60 hover:border-brand-outline-variant focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 rounded outline-none text-brand-on-surface text-sm transition-all resize-none"
              />
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-brand-outline-variant/20">
              <button
                type="button"
                id="contact-form-cancel"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-on-surface-variant hover:text-brand-on-surface rounded transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                id="contact-form-submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-brand-primary text-brand-on-primary font-bold text-xs font-mono uppercase tracking-wider rounded hover:bg-brand-primary-container hover:text-white transition-all inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>Mengirim...</>
                ) : (
                  <>
                    Kirim Pesan <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            <div className="text-[10px] text-brand-on-surface-variant/60 text-center flex items-center justify-center gap-1 font-mono pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" /> Koneksi terenkripsi sandbox aman
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
