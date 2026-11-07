import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Copy,
  Send,
  AlertCircle,
  Building,
  Check
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactAndQuoteProps {
  initialService?: string;
  initialQuantity?: number;
  initialNotes?: string;
}

export const ContactAndQuote: React.FC<ContactAndQuoteProps> = ({
  initialService,
  initialQuantity,
  initialNotes,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || '',
    quantity: initialQuantity ? String(initialQuantity) : '',
    branch: 'Tagum Main Facility (New Visayan)',
    message: initialNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update if props change
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
        quantity: initialQuantity ? String(initialQuantity) : prev.quantity,
        message: initialNotes ? initialNotes : prev.message,
      }));
    }
  }, [initialService, initialQuantity, initialNotes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg('');
  };

  const generateQuotationSummary = () => {
    return `==========================================
CEO TAILORING | ATEXCO TAGUM
Official Quotation Inquiry
==========================================
Client / Company : ${formData.name}
Contact Number   : ${formData.phone}
Email Address    : ${formData.email}
Requested Service: ${formData.service}
Target Quantity  : ${formData.quantity} units/meters
Preferred Branch : ${formData.branch}

Project Specifications:
${formData.message || 'No additional notes provided.'}
==========================================
Submitted via CEO Tailoring Online Portal
Hotlines: 09514556757 / 09516216321
Tagum City & Panabo City, Davao del Norte`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.service) {
      setErrorMsg('Please complete all required fields marked with an asterisk (*).');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const handleCopyClipboard = () => {
    const text = generateQuotationSummary();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`Quotation Request: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(generateQuotationSummary());
    window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Two Branches */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#174F91] mb-2">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
                Let's Work Together
              </h2>
              <div className="w-16 h-1 bg-[#174F91] rounded-full my-4" />
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need custom athletic jerseys, high-volume roll-to-roll sublimation printing, or an ongoing B2B manufacturing partnership, our production team is ready to assist.
              </p>
            </div>

            {/* Quick Contacts List */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-blue-50 text-[#174F91] shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Contact Numbers
                  </div>
                  <div className="text-base font-bold text-[#0B1F3A] mt-0.5 space-x-2">
                    <a href="tel:09514556757" className="hover:text-[#174F91] transition-colors tabular-nums">
                      0951 455 6757
                    </a>
                    <span className="text-slate-300">·</span>
                    <a href="tel:09516216321" className="hover:text-[#174F91] transition-colors tabular-nums">
                      0951 621 6321
                    </a>
                  </div>
                  <div className="text-xs text-slate-500">Smart / TNT Mobile & SMS</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-blue-50 text-[#174F91] shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-base font-bold text-[#0B1F3A] hover:text-[#174F91] transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <div className="text-xs text-slate-500">Official Inquiries & Design File Submissions</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-blue-50 text-[#174F91] shrink-0 border border-blue-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Operating Hours
                  </div>
                  <div className="text-base font-bold text-[#0B1F3A]">
                    {BUSINESS_INFO.hours}
                  </div>
                  <div className="text-xs text-slate-500">Monday through Sunday (Open Daily)</div>
                </div>
              </div>
            </div>

            {/* Production Locations */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-4 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#174F91]" />
                <span>Production Hubs & Drop-off Points</span>
              </h3>

              <div className="space-y-3">
                {/* Branch 1 */}
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[#0B1F3A]">
                      Tagum Main Production Facility
                    </span>
                    <span className="text-[11px] font-semibold text-[#174F91] uppercase tracking-wider">
                      Main Hub
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    New Visayan, Tagum City, Davao del Norte, 8100
                  </p>
                  <a
                    href="https://maps.google.com/?q=New+Visayan+Tagum+City+Davao+del+Norte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#174F91] hover:underline"
                  >
                    <span>View Tagum Location on Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Branch 2 */}
                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-[#0B1F3A]">
                      Panabo Service Hub
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Branch
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    Rachoville, New Visayas, Panabo City, Davao del Norte, 8105
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rachoville+New+Visayas+Panabo+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#174F91] hover:underline"
                  >
                    <span>View Panabo Location on Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg border border-slate-200 p-7 sm:p-10 shadow-sm relative">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-[#0B1F3A]">
                  Request a Price Quotation
                </h3>
                <p className="text-slate-500 text-sm mt-1">
                  Fill out your garment specifications. Our Tagum production desk will review and prepare your formal project quotation.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 rounded bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {submitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 border border-emerald-200 text-slate-800 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                    <span>Quotation Request Generated Successfully!</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry for <strong>{formData.service}</strong> ({formData.quantity} units) has been recorded. You can copy the quotation sheet below to send via Messenger/SMS or launch Gmail directly:
                  </p>

                  <div className="bg-white rounded border border-emerald-200 p-4 font-mono text-xs text-slate-700 whitespace-pre-wrap max-h-56 overflow-y-auto">
                    {generateQuotationSummary()}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleMailto}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#174F91] hover:bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider rounded shadow-sm transition-all"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send to ceotailoring20@gmail.com</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyClipboard}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider rounded transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline ml-auto"
                    >
                      Edit Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Customer / Company Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Juan dela Cruz or Davao Sportswear Co."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Contact Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="09xxxxxxxxx"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                        required
                      >
                        <option value="" disabled>Select a Service</option>
                        <option value="Sublimation Roll Printing (₱65/meter)">Printing Only — ₱65/meter (72" Roll)</option>
                        <option value="Printing + Heat Press (Our Fabric - ₱160/pc)">Printing + Heat Press (Our Fabric - ₱160/pc)</option>
                        <option value="Printing + Heat Press (Customer Fabric - ₱90/pc)">Printing + Heat Press (Customer Fabric - ₱90/pc)</option>
                        <option value="Custom Jersey Manufacturing">Custom Jersey Manufacturing</option>
                        <option value="Tailoring & Sewing Services">Tailoring & Sewing Services</option>
                        <option value="B2B Wholesale / Subcontract Partnership">B2B Wholesale / Subcontract Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Quantity (Pieces or Meters) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Preferred Drop-off / Pickup Branch
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                    >
                      <option value="Tagum Main Facility (New Visayan)">Tagum Main Facility (New Visayan, Tagum City)</option>
                      <option value="Panabo Service Hub (Rachoville)">Panabo Service Hub (Rachoville, Panabo City)</option>
                      <option value="Courier Delivery (LBC / J&T / Cargo)">Courier / Cargo Freight Delivery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message & Technical Specifications <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify fabric type, sizes, design readiness (AI/PSD/PDF), target delivery deadline, or any special tailoring requirements..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded text-slate-900 focus:outline-none focus:border-[#174F91] focus:ring-1 focus:ring-[#174F91]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-[#0B1F3A] hover:bg-[#174F91] text-white rounded font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all"
                  >
                    Submit Quotation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
