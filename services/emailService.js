import transporter from '../config/email.js';

const sendCredentials = async ({ name, email, password }) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 0; background: #FFFDF2; font-family: 'Times New Roman', Times, serif; }
  .wrap { max-width: 520px; margin: 40px auto; background: #ffffff; border: 2px solid #000000; }
  .header { background: #000000; padding: 32px 40px; }
  .header h1 { margin: 0; color: #FFFDF2; font-size: 26px; letter-spacing: 2px; font-weight: normal; }
  .header p { margin: 4px 0 0; color: #aaaaaa; font-size: 13px; letter-spacing: 1px; }
  .body { padding: 36px 40px; }
  .body p { color: #1a1a1a; font-size: 15px; line-height: 1.7; margin: 0 0 16px; }
  .cred-box { border: 1px solid #000; padding: 20px 24px; margin: 24px 0; background: #FFFDF2; }
  .cred-label { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #555; margin: 0 0 4px; }
  .cred-value { font-size: 18px; font-weight: bold; color: #000; margin: 0; letter-spacing: 0.5px; font-family: 'Courier New', monospace; }
  .note { font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; margin-top: 28px; padding-top: 16px; }
  .footer { background: #000; padding: 16px 40px; text-align: center; }
  .footer p { color: #888; font-size: 11px; margin: 0; letter-spacing: 1px; }
</style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <h1>ALLIANCE QUIZ AI</h1>
      <p>Assessment Platform</p>
    </div>
    <div class="body">
      <p>Dear <strong>${name}</strong>,</p>
      <p>Your registration has been completed successfully. Below are your login credentials to access the Alliance Quiz AI platform:</p>
      <div class="cred-box">
        <p class="cred-label">Email Address</p>
        <p class="cred-value">${email}</p>
      </div>
      <div class="cred-box">
        <p class="cred-label">Password</p>
        <p class="cred-value">${password}</p>
      </div>
      <p>Use these credentials to log in at the platform. Please keep them secure and do not share them with anyone.</p>
      <p class="note">
        This is an automated message from Alliance Quiz AI. If you did not register, please contact your administrator.
      </p>
    </div>
    <div class="footer">
      <p>© 2025 ALLIANCE QUIZ AI — ASSESSMENT PLATFORM</p>
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"Alliance Quiz AI" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your Alliance Quiz AI Login Credentials',
    html,
  });
};

export { sendCredentials };
