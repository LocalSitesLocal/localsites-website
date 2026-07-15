import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-[#EEF4F8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="rounded-2xl bg-white border border-[#D7E2EE] shadow-lg shadow-blue-500/5 p-8 lg:p-10 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">Impressum</h1>

            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-[#0B1220]">Angaben gemäß § 5 DDG</h2>
              <p className="text-[#5B6B7D]">Die folgenden Angaben sind Platzhalter und vor Veröffentlichung zu vervollständigen.</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Anbieter</h2>
              <p className="text-[#5B6B7D]">LocalSites</p>
              <p className="text-[#5B6B7D]">Philipp Friedrich</p>
              <p className="text-[#5B6B7D]">[Ihre Straße und Hausnummer]</p>
              <p className="text-[#5B6B7D]">[PLZ Ort]</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Vertreten durch</h2>
              <p className="text-[#5B6B7D]">Philipp Friedrich</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Kontakt</h2>
              <p className="text-[#5B6B7D]">E-Mail: kontakt@localsites-mainfranken.de</p>
              <p className="text-[#5B6B7D]">Telefon: [Telefonnummer einfügen]</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Umsatzsteuer-ID</h2>
              <p className="text-[#5B6B7D]">[Umsatzsteuer-Identifikationsnummer einfügen]</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Verantwortlich für den Inhalt</h2>
              <p className="text-[#5B6B7D]">Philipp Friedrich</p>
              <p className="text-[#5B6B7D]">[Ihre Straße und Hausnummer]</p>
              <p className="text-[#5B6B7D]">[PLZ Ort]</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Haftung für Inhalte</h2>
              <p className="text-[#5B6B7D]">
                Als Diensteanbieter sind wir gemäß den allgemeinen gesetzlichen Vorschriften für eigene Inhalte auf diesen Seiten
                verantwortlich. Dieser Abschnitt ist als Platzhalter formuliert und muss rechtlich geprüft werden.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Haftung für Links</h2>
              <p className="text-[#5B6B7D]">
                Diese Website kann Links zu externen Websites enthalten. Für Inhalte externer Seiten sind ausschließlich deren
                Betreiber verantwortlich. Dieser Hinweis ist ein rechtlicher Platzhalter.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Urheberrecht</h2>
              <p className="text-[#5B6B7D]">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Die genaue rechtliche Ausgestaltung dieses Abschnitts ist vor Veröffentlichung zu prüfen.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
