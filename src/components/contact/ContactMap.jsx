import './ContactMap.css';

const MAP_SRC =
  'https://maps.google.com/maps?q=6130%20Elton%20Avenue%2C%20Las%20Vegas%2C%20NV%2089107&z=14&output=embed';

export default function ContactMap() {
  return (
    <section className="contact-map" aria-label="Office location">
      <iframe
        title="Auguste Ventures office at 6130 Elton Avenue, Las Vegas"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        className="map-pin"
        href="https://maps.google.com/?q=6130+Elton+Avenue,+Las+Vegas,+NV+89107"
        target="_blank"
        rel="noreferrer"
      >
        6130 Elton Ave, Las Vegas, Nevada, 89107
      </a>
    </section>
  );
}
