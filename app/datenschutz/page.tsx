import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const notice =
  'Hinweis: Dieser Rechtstext ist ein Platzhalter und muss vor Veröffentlichung rechtlich geprüft werden.'

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-[#EEF4F8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-amber-900 mb-8">
            <p className="font-medium">{notice}</p>
          </div>

          <article className="rounded-2xl bg-white border border-[#D7E2EE] shadow-lg shadow-blue-500/5 p-8 lg:p-10 space-y-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">Datenschutzerklärung</h1>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Verantwortlicher</h2>
              <p className="text-[#5B6B7D]">LocalSites</p>
              <p className="text-[#5B6B7D]">[Dein vollständiger Name]</p>
              <p className="text-[#5B6B7D]">[Deine Straße und Hausnummer]</p>
              <p className="text-[#5B6B7D]">[PLZ Ort]</p>
              <p className="text-[#5B6B7D]">E-Mail: kontakt@localsites.de</p>
              <p className="text-[#5B6B7D]">Telefon: [Telefonnummer einfügen]</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Allgemeine Hinweise</h2>
              <p className="text-[#5B6B7D]">
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert in allgemeiner Form über
                Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf dieser Website.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Erfassung personenbezogener Daten</h2>
              <p className="text-[#5B6B7D]">
                Personenbezogene Daten werden nur erhoben, wenn Sie uns diese im Rahmen einer Anfrage oder durch Nutzung einzelner
                Funktionen freiwillig mitteilen.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Kontaktformular</h2>
              <p className="text-[#5B6B7D]">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Formspree als Form-Provider</h2>
              <p className="text-[#5B6B7D]">
                Für den Versand von Formularanfragen wird ein externer Dienstleister eingesetzt: Formspree. Die konkreten
                datenschutzrechtlichen Angaben (inklusive Rechtsgrundlage, Auftragsverarbeitung und Drittlandbezug) sind als
                Platzhalter vor Veröffentlichung rechtlich zu prüfen und zu ergänzen.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Hosting / Vercel</h2>
              <p className="text-[#5B6B7D]">
                Diese Website kann auf Infrastruktur von Vercel gehostet werden. Konkrete Angaben zur Datenverarbeitung durch den
                Hosting-Anbieter sind vor Veröffentlichung rechtlich zu prüfen und zu ergänzen.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Server-Logfiles</h2>
              <p className="text-[#5B6B7D]">
                Beim Aufruf dieser Website können durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Logfiles
                gespeichert werden (z. B. Browsertyp, Betriebssystem, Uhrzeit des Zugriffs, IP-Adresse).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Rechte der betroffenen Personen</h2>
              <p className="text-[#5B6B7D]">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen insbesondere das Recht auf Auskunft, Berichtigung,
                Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer Daten.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Speicherdauer</h2>
              <p className="text-[#5B6B7D]">
                Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweils genannten Zwecke erforderlich ist oder
                gesetzliche Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">SSL/TLS-Verschlüsselung</h2>
              <p className="text-[#5B6B7D]">
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-
                Verschlüsselung.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-[#0B1220]">Beschwerderecht bei einer Aufsichtsbehörde</h2>
              <p className="text-[#5B6B7D]">
                Ihnen steht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, wenn Sie der Ansicht sind, dass die
                Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
