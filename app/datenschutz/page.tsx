import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const linkClass = 'font-semibold text-[#0b63ce] underline-offset-4 hover:underline'

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-[#eef4f8] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-8 rounded-[12px] border border-[#d7e2ee] bg-white p-7 shadow-[0_18px_55px_rgba(15,55,100,0.06)] sm:p-10">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Stand: Juli 2026</p>
              <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#0b1220] sm:text-4xl">Datenschutzerklärung</h1>
            </div>

            <section className="space-y-2">
              <h2 className="text-xl font-black text-[#0b1220]">1. Verantwortlicher</h2>
              <div className="leading-7 text-[#5b6b7d]">
                <p>LocalSites</p>
                <p>Philipp Friedrich</p>
                <p>[Ladungsfähige Anschrift ergänzen]</p>
                <p>E-Mail: kontakt@localsites-mainfranken.de</p>
                <p>Telefon: [Telefonnummer ergänzen]</p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">2. Hosting und Server-Logfiles</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Diese Website wird über Vercel bereitgestellt. Beim Aufruf können technisch erforderliche Daten wie IP-Adresse,
                Datum und Uhrzeit, aufgerufene Seite, Browsertyp und Betriebssystem in Server-Logfiles verarbeitet werden. Die
                Verarbeitung dient dem sicheren und stabilen Betrieb der Website und beruht auf Art. 6 Abs. 1 lit. f DSGVO.
              </p>
              <p className="leading-7 text-[#5b6b7d]">
                Anbieter: Vercel Inc., USA. Weitere Informationen finden Sie in der{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer" className={linkClass}>Datenschutzerklärung von Vercel</a>
                {' '}und im <a href="https://vercel.com/legal/dpa" target="_blank" rel="noreferrer" className={linkClass}>Data Processing Addendum</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">3. Kontaktformular und E-Mail-Versand</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Wenn Sie das Kontaktformular absenden, verarbeiten wir die eingegebenen Angaben zur Bearbeitung Ihrer Anfrage und
                für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um vorvertragliche Maßnahmen
                geht, ansonsten Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Beantwortung von Anfragen.
              </p>
              <p className="leading-7 text-[#5b6b7d]">
                Für die serverseitige Zustellung der Formularanfrage nutzen wir Resend. Dabei werden die für den E-Mail-Versand
                erforderlichen Angaben an Resend übermittelt. Weitere Informationen: {' '}
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer" className={linkClass}>Datenschutzerklärung</a>
                {' '}und <a href="https://resend.com/legal/dpa" target="_blank" rel="noreferrer" className={linkClass}>Data Processing Addendum von Resend</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">4. Terminplanung mit Calendly</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Nach dem Absenden einer Anfrage kann eine Terminplanung über Calendly angezeigt werden. Bei Nutzung werden insbesondere
                technische Verbindungsdaten und die von Ihnen bei der Terminbuchung eingegebenen Angaben an Calendly übermittelt. Die
                Nutzung ist freiwillig. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO; eine erteilte Einwilligung kann für die Zukunft
                widerrufen werden.
              </p>
              <p className="leading-7 text-[#5b6b7d]">
                Anbieter: Calendly LLC, USA. Weitere Informationen finden Sie in der{' '}
                <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noreferrer" className={linkClass}>Datenschutzerklärung von Calendly</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">5. KI-Empfang mit Chatbase</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Der KI-Empfang wird erst geladen, wenn Sie ihn aktiv öffnen. Dabei können technische Verbindungsdaten sowie Inhalte,
                die Sie freiwillig in den Chat eingeben, durch Chatbase verarbeitet werden. Bitte übermitteln Sie dort keine sensiblen
                oder vertraulichen Informationen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
              </p>
              <p className="leading-7 text-[#5b6b7d]">
                Anbieter: Chatbase Inc., USA. Weitere Informationen: {' '}
                <a href="https://www.chatbase.co/legal/privacy" target="_blank" rel="noreferrer" className={linkClass}>Datenschutzerklärung</a>
                {' '}und <a href="https://www.chatbase.co/legal/dpa" target="_blank" rel="noreferrer" className={linkClass}>Data Processing Addendum von Chatbase</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">6. Angebots- und Anfrageverwaltung mit Airtable</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Zur strukturierten Angebots-, Kunden- und Anfrageverwaltung können die für die Bearbeitung erforderlichen Kontaktdaten,
                Projektangaben, Paketwünsche und Bearbeitungsstatus in Airtable gespeichert werden. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. b DSGVO, soweit die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen oder eines Vertrags erforderlich ist.
              </p>
              <p className="leading-7 text-[#5b6b7d]">
                Anbieter: Formagrid Inc. dba Airtable, USA. Weitere Informationen: {' '}
                <a href="https://www.airtable.com/company/privacy" target="_blank" rel="noreferrer" className={linkClass}>Datenschutzerklärung</a>
                {' '}und <a href="https://www.airtable.com/company/dpa" target="_blank" rel="noreferrer" className={linkClass}>Data Processing Addendum von Airtable</a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">7. Datenübermittlung in Drittländer</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Einige der genannten Anbieter haben ihren Sitz in den USA oder setzen dort Unterauftragnehmer ein. Soweit dabei
                personenbezogene Daten außerhalb der EU oder des EWR verarbeitet werden, richtet sich die Übermittlung nach den
                gesetzlichen Voraussetzungen der Art. 44 ff. DSGVO, insbesondere einem Angemessenheitsbeschluss oder geeigneten
                Garantien wie den EU-Standardvertragsklauseln.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">8. Speicherdauer</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist. Anschließend
                werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder berechtigten Gründe für eine weitere
                Speicherung bestehen.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">9. Ihre Rechte</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
                der Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte Einwilligungen können Sie jederzeit mit Wirkung für
                die Zukunft widerrufen. Außerdem besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-black text-[#0b1220]">10. SSL/TLS-Verschlüsselung</h2>
              <p className="leading-7 text-[#5b6b7d]">
                Diese Website nutzt eine SSL/TLS-Verschlüsselung, um übermittelte Inhalte vor dem Zugriff Dritter zu schützen.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
