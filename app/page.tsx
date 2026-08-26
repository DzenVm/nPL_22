import Image from 'next/image';

export const dynamic = 'force-dynamic';

const steps = [
  ['01', 'Wybierz swój rytm', 'Zaczynasz od krótkiej trasy i pojedynczego zadania. Gra nie wymusza pośpiechu: wracasz wtedy, gdy masz ochotę dopisać kolejny fragment wyprawy.'],
  ['02', 'Czytaj miejsce', 'Prądy, głębokość i znaleziska układają się w wskazówki. Zamiast gotowej ścieżki dostajesz przestrzeń do obserwacji oraz rozsądnych decyzji.'],
  ['03', 'Zostaw ślad', 'Każda udana wyprawa ma praktyczny sens: odsłania przejście, wzmacnia ogród, przywraca działanie starej stacji albo pomaga innym dotrzeć dalej.']
];
const features = [
  ['Mapa, która pamięta', 'Zaznaczone korytarze, własne notatki i zmieniające się warunki sprawiają, że powrót w znane miejsce nigdy nie jest całkiem taki sam.'],
  ['Wspólna praca bez presji', 'Można działać w pojedynkę albo podzielić plan między kilka osób. Wartość ma uważność, nie tempo kliknięć.'],
  ['Historie odnajdywane po drodze', 'Ruiny nie opowiadają wszystkiego naraz. Drobne przedmioty, ślady mieszkańców i nietypowe zjawiska pozwalają składać obraz archipelagu.'],
  ['Rozwój widoczny z bliska', 'Odbudowywane miejsce nabiera funkcji i charakteru: pojawiają się ścieżki, rośliny, światło oraz nowe sposoby przygotowania wypraw.']
];
const faq = [
  ['Na czym polega rozgrywka?', 'To przygodowa gra online o wyprawach w podwodny archipelag. Planujesz trasę, zbierasz informacje, rozwiązujesz sytuacje terenowe i pomagasz przywracać działanie wspólnych miejsc.'],
  ['Czy można grać samodzielnie?', 'Tak. Każdy rozdział można poznawać własnym tempem. Wspólne zadania są dodatkową drogą do odkrywania, a nie warunkiem wejścia do gry.'],
  ['Ile czasu trwa jedna sesja?', 'Krótka wyprawa mieści się zwykle w kilkunastu minutach. Dłuższe cele można spokojnie podzielić na etapy i kontynuować później.'],
  ['Czy gra jest odpowiednia dla nowych graczy?', 'Tak. Początek prowadzi przez najważniejsze mechaniki w naturalnych sytuacjach, bez zasypywania ekranami instrukcji.']
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Główna nawigacja"><a className="quiet-link" href="#o-grze">O grze</a><a className="quiet-link" href="#wyprawa">Jak wygląda wyprawa</a><span className="nav-mark" aria-hidden="true"/><a className="quiet-link" href="#swiat">Świat</a><a className="nav-cta" href="#dolacz">Sprawdź, czy to dla Ciebie <span>↗</span></a></nav>

    <section className="hero" aria-labelledby="start">
      <Image className="hero-image" src="/images/hero.png" alt="Podwodny archipelag i badacze na platformie obserwacyjnej" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-copy"><p className="eyebrow light">GRA PRZEGLĄDARKOWA · WSPÓLNA EKSPLORACJA</p><h1 id="start">Pod powierzchnią<br/><em>jest więcej dróg.</em></h1><p className="lede">Zejdź niżej, gdzie dawne wyspy mają drugie dno. Odkrywaj korytarze, odbudowuj punkty orientacyjne i składaj historię miejsca, które przez lata mówiło tylko ciszą.</p><a className="button pale" href="#dolacz">Poznaj zasady wyprawy <span>↓</span></a></div>
      <div className="hero-note"><span>01 / 04</span><p>Nie chodzi o szybkie przejście dalej.<br/>Chodzi o to, żeby zobaczyć więcej.</p></div>
    </section>

    <section className="intro section" id="o-grze"><div><p className="eyebrow">O CZYM JEST TA GRA</p><h2>Archipelag nie czeka<br/>na bohatera. Czeka<br/>na <em>uważność.</em></h2></div><div className="intro-text"><p>Woda zabrała dawne szlaki, ale nie wymazała ich całkiem. W tej grze wchodzisz do świata ukrytego pod spokojną taflą: porzuconych ogrodów, stacji nasłuchowych i przejść, które otwierają się tylko wtedy, gdy ktoś nauczy się czytać rytm miejsca.</p><p>Każda wyprawa zostawia coś po sobie. Czasem będzie to naprawiona lampa na dnie kanionu, czasem mapa bezpieczniejszego przejścia, a kiedy indziej wiadomość dla osoby, która przypłynie po Tobie.</p></div></section>

    <section className="ribbon"><p>Odkrywanie <i>·</i> współpraca <i>·</i> spokój <i>·</i> decyzje <i>·</i> odbudowa <i>·</i> odkrywanie <i>·</i></p></section>

    <section className="journey section" id="wyprawa"><div className="journey-head"><p className="eyebrow">OD PIERWSZEGO ZANURZENIA</p><h2>Wyprawa ma własny<br/><em>oddech.</em></h2><p>Bez listy zadań do odhaczenia. Z wyraźnym celem, kilkoma możliwymi drogami i miejscem na własne odkrycie.</p></div><div className="steps">{steps.map(([number,title,text])=><article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>

    <section className="image-feature"><div className="feature-copy"><p className="eyebrow light">PLANOWANIE, KTÓRE MA ZNACZENIE</p><h2>Nie każda droga<br/>musi być <em>najkrótsza.</em></h2><p>Przed zanurzeniem sprawdzasz znaki zostawione przez innych, oceniasz widoczność i wybierasz wyposażenie. Czasem najbardziej wartościowe odkrycie czeka obok wytyczonego kursu.</p><a className="text-link" href="#swiat">Zobacz, co buduje świat <span>→</span></a></div><Image src="/images/map-room.png" alt="Przygotowanie trasy wyprawy przy stole w podwodnym schronieniu" fill sizes="(max-width: 800px) 100vw, 50vw"/></section>

    <section className="section features" id="swiat"><div className="features-title"><p className="eyebrow">CO ZOSTAJE Z TOBĄ DŁUŻEJ</p><h2>Świat, który<br/>odpowiada na <em>gest.</em></h2></div><div className="feature-grid">{features.map(([title,text], i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="gallery"><figure className="tall"><Image src="/images/garden.png" alt="Podwodny ogród w szklanej kopule" fill sizes="(max-width: 800px) 100vw, 38vw"/><figcaption>Ogrody, które wracają do życia</figcaption></figure><div className="gallery-copy"><p className="eyebrow">MIEJSCA, DO KTÓRYCH CHCE SIĘ WRACAĆ</p><h2>Małe odkrycia<br/>zmieniają <em>całość.</em></h2><p>Świat rozwija się nie przez wielkie deklaracje, tylko przez setki prostych, sensownych działań. W tym tkwi jego siła.</p></div><figure className="wide"><Image src="/images/canyon.png" alt="Ekspedycja przemierza podwodny kanion" fill sizes="(max-width: 800px) 100vw, 55vw"/><figcaption>Szlak przez głęboki kanion</figcaption></figure></section>

    <section className="quote-block"><div className="quote-orb"/><blockquote>„Dobra wyprawa zostawia Cię<br/>z jedną odpowiedzią i trzema<br/><em>lepszymi pytaniami.”</em></blockquote><p>Tak budowany jest każdy kolejny obszar.</p></section>

    <section className="listen"><Image src="/images/listening-room.png" alt="Stacja nasłuchowa z widokiem na głębię oceanu" fill sizes="100vw"/><div className="listen-copy"><p className="eyebrow light">ŚWIAT NIE KOŃCZY SIĘ NA MAPIE</p><h2>Słuchaj, zanim<br/>ruszysz <em>dalej.</em></h2><p>Niektóre miejsca zdradzają swój rytm dopiero po chwili. Gra nagradza ciekawość, ale nigdy nie zabiera Ci prawa do własnego tempa.</p></div></section>

    <section className="faq section" id="dolacz"><div><p className="eyebrow">ZANIM ZACZNIESZ</p><h2>Warto wiedzieć<br/><em>na początku.</em></h2></div><div className="faq-list">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
    <section className="closing"><p className="eyebrow">GOTOWOŚĆ NIE JEST WARUNKIEM</p><h2>Wystarczy<br/>ciekawość.</h2><p>Resztę odkryjesz po drodze.</p><a className="button pale" href="#start">Wróć na powierzchnię <span>↑</span></a></section>
    <footer><span>© {new Date().getFullYear()} · Informacje o grze</span><div><a href="/prywatnosc">Prywatność</a><a href="/kontakt">Kontakt</a><a href="/zasady">Zasady korzystania</a></div></footer>
  </main>;
}
