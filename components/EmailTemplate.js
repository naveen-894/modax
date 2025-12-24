export default function EmailTemplate({ name, email, phone, company, message }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#2563eb', marginBottom: '20px' }}>New Demo Request from Modax Website</h1>

      <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ marginTop: '0', color: '#1e293b' }}>Contact Details</h2>
        <p><strong>Name:</strong> {name || 'Not provided'}</p>
        <p><strong>Email:</strong> {email || 'Not provided'}</p>
        <p><strong>Phone:</strong> {phone || 'Not provided'}</p>
        <p><strong>Company:</strong> {company || 'Not provided'}</p>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ marginTop: '0', color: '#1e293b' }}>Message</h2>
        <p style={{ lineHeight: '1.6', color: '#475569' }}>
          {message || 'No message provided'}
        </p>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#dbeafe', borderRadius: '8px' }}>
        <p style={{ margin: '0', color: '#1e40af', fontSize: '14px' }}>
          This demo request was submitted through the Modax website contact form.
        </p>
      </div>
    </div>
  );
}
