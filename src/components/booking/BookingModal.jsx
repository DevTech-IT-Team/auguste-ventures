import { useEffect, useMemo, useState } from 'react';
import { BriefcaseBusiness, CalendarDays, Clock3, DollarSign, Globe2, X } from 'lucide-react';
import { SERVICES } from '../../data/services';
import './BookingModal.css';

const TIME_SLOTS = [
  '9:00 AM',
  '9:15 AM',
  '9:30 AM',
  '9:45 AM',
  '10:00 AM',
  '10:15 AM',
  '10:30 AM',
  '10:45 AM',
  '11:00 AM',
];

function getLocalDate() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().split('T')[0];
}

export default function BookingModal({ isOpen, onClose }) {
  const [serviceSlug, setServiceSlug] = useState('financial-literacy-program');
  const [date, setDate] = useState(getLocalDate);
  const [time, setTime] = useState(TIME_SLOTS[0]);

  const service = useMemo(
    () => SERVICES.find((item) => item.slug === serviceSlug) ?? SERVICES[0],
    [serviceSlug],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const continueBooking = () => {
    const subject = encodeURIComponent(`Booking request: ${service.title}`);
    const body = encodeURIComponent(
      [
        'Hello Auguste Ventures,',
        '',
        `I would like to book: ${service.title}`,
        `Date: ${date}`,
        `Time: ${time}`,
        'Time zone: Pacific Time - Los Angeles',
        `Price: ${service.price ?? 'Request a quote'}`,
        '',
        'Please contact me to confirm this appointment.',
      ].join('\n'),
    );

    window.location.href = `mailto:info@augusteventures.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="booking-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button type="button" className="booking-close" onClick={onClose} aria-label="Close booking">
          <X size={30} />
        </button>

        <h2 id="booking-title">Booking</h2>

        <div className="booking-service-row">
          <label className="booking-field booking-service-field">
            <span className="booking-label">Select a Service</span>
            <span className="booking-control">
              <BriefcaseBusiness size={20} />
              <select value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)}>
                {SERVICES.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </span>
          </label>

          <div className="booking-price" aria-label={`Price ${service.price ?? 'on request'}`}>
            <DollarSign size={21} />
            <span>{service.price?.replace('$', '') ?? 'Quote'}</span>
          </div>
        </div>

        <div className="booking-date-time">
          <label className="booking-field">
            <span className="booking-label">Date</span>
            <span className="booking-control">
              <CalendarDays size={20} />
              <input
                type="date"
                min={getLocalDate()}
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </span>
          </label>

          <label className="booking-field">
            <span className="booking-label">Time</span>
            <span className="booking-control">
              <Clock3 size={20} />
              <select value={time} onChange={(event) => setTime(event.target.value)}>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </span>
          </label>
        </div>

        <div className="booking-timezone">
          <Globe2 size={21} />
          <span>(GMT-07:00) Pacific Time - Los Angeles</span>
        </div>

        <div className="booking-divider" />
        <p className="booking-prompt">Please choose a time below</p>

        <div className="booking-slots" role="radiogroup" aria-label="Available appointment times">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              role="radio"
              aria-checked={time === slot}
              className={`booking-slot${time === slot ? ' is-selected' : ''}`}
              onClick={() => setTime(slot)}
            >
              {slot}
            </button>
          ))}
        </div>

        <button type="button" className="booking-continue" onClick={continueBooking}>
          Continue
        </button>
      </section>
    </div>
  );
}
