import { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import './ServicesContactForm.css';

export default function ServicesContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });
  const [sent, setSent] = useState(false);

  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.agree) return;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:info@augusteventures.com?subject=${encodeURIComponent('Service enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="enquire-band" id="enquire">
      <form className="enquire-card" onSubmit={onSubmit}>
        <h2>Let&apos;s Discuss Your Business&apos;s Next Big Step</h2>
        <p className="enquire-lead">Ready to optimize your business and drive growth?</p>
        <p className="enquire-copy">
          Get in touch with us today for personalized consulting and strategic solutions that lead
          to lasting success. We&apos;re here to help you unlock your business&apos;s full potential.
        </p>

        <div className="enquire-row">
          <label>
            Your first name
            <span>
              <User size={15} />
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={form.firstName}
                onChange={update}
                required
              />
            </span>
          </label>
          <label>
            Your last name
            <span>
              <User size={15} />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={form.lastName}
                onChange={update}
                required
              />
            </span>
          </label>
        </div>

        <div className="enquire-row">
          <label>
            Your email
            <span>
              <Mail size={15} />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={update}
                required
              />
            </span>
          </label>
          <label>
            Your phone number
            <span>
              <Phone size={15} />
              <input
                name="phone"
                type="tel"
                placeholder="e.g. +1 212 736 3100"
                value={form.phone}
                onChange={update}
              />
            </span>
          </label>
        </div>

        <label className="enquire-message">
          Tell us about your request
          <textarea
            name="message"
            rows="3"
            value={form.message}
            onChange={update}
          />
        </label>

        <label className="enquire-agree">
          <input
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={update}
            required
          />
          <span>
            I agree with the Terms &amp; Conditions and the Privacy &amp; Cookie Policy of Auguste
            Ventures.
          </span>
        </label>

        <button type="submit" className="enquire-submit">Send Message</button>
        {sent && <p className="enquire-thanks">Thanks — your email app should open next.</p>}
      </form>
    </section>
  );
}
