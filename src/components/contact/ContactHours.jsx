import { Clock } from 'lucide-react';
import { BUSINESS_HOURS } from '../../data/hours';
import './ContactHours.css';

export default function ContactHours() {
  return (
    <section className="contact-hours">
      <div className="hours-banner">
        <h2>Available Hours to Serve You</h2>
      </div>

      <div className="hours-card">
        {BUSINESS_HOURS.map((item) => (
          <div key={item.day} className="hours-day">
            <Clock size={22} color={item.color} strokeWidth={1.7} />
            <strong>{item.day}</strong>
            {item.open ? (
              <>
                <span>{item.start}</span>
                <span>{item.end}</span>
              </>
            ) : (
              <span className="hours-closed">Closed</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
