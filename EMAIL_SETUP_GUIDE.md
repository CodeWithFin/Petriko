# Email Setup Guide for Petriko Website Quote Requests

## ✅ Current Status

The website now has a fully functional quote request system that will send emails to `petricolimited@gmail.com` when customers submit quote requests.

## 🚀 How It Works

When a client submits a quote request:

1. **Form Submission**: Client fills out the multi-step form with:
   - Contact information (name, email, phone, location)
   - Project details (service type, budget, description)
   - Optional reference images

2. **Email Notification**: An email is automatically sent to `petricolimited@gmail.com` containing:
   - All client information
   - Project details and requirements
   - Any uploaded reference images as attachments
   - Client's contact information for easy follow-up

3. **Client Confirmation**: Client sees a success message confirming their request was received

## 📧 Email Configuration Required

To activate the email functionality, you need to set up Gmail App Password:

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled

### Step 2: Generate App Password
1. Go to Google Account > Security > App passwords
2. Select "Mail" as the app
3. Copy the 16-character password generated

### Step 3: Configure Environment Variables
Create a `.env.local` file in the root directory with:

```env
GMAIL_USER=petricolimited@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
```

## 📱 How Company Will Receive Quote Requests

### Email Format
You'll receive professionally formatted emails with:

```
Subject: New Quote Request - Interior Design Project in Nairobi

Client Information:
- Name: John Doe
- Email: john@example.com  
- Phone: 0726 452055
- Location: Nairobi, Kenya

Project Details:
- Service Type: Interior Design
- Budget Range: KSh 500,000 - 1,000,000
- Description: [Client's detailed project description]

Contact Information:
Reply to this email or call 0726 452055 to follow up.

Note: 3 reference image(s) attached.
```

### What To Do When You Receive a Quote Request

1. **Immediate Response**: Reply within 24 hours (as promised on website)
2. **Review Details**: Check project requirements and budget
3. **Schedule Consultation**: Contact client to arrange site visit
4. **Prepare Quote**: Create detailed quotation based on requirements
5. **Follow Up**: Send quote and schedule project if accepted

## 🔧 Alternative Contact Methods

If email setup is not immediate, clients can still reach you via:
- **Phone**: 0726 452055, 0726 379289, 0714 995033, 0771 191801
- **WhatsApp**: Direct link to 0726 452055
- **Email**: Direct mailto link to petricolimited@gmail.com

## ⚡ Testing the System

After setting up the environment variables:

1. Restart the website (`npm run dev`)
2. Submit a test quote request
3. Check petricolimited@gmail.com for the notification email
4. Verify all information and attachments are received correctly

## 🔒 Security & Privacy

- Client emails are sent securely via Gmail's SMTP
- Files are temporarily processed and attached, not stored permanently
- All sensitive credentials are stored in environment variables
- Form data is validated before sending

## 📊 Benefits of This System

- **Immediate Notifications**: Get quote requests instantly
- **Professional Presentation**: Well-formatted emails with all details
- **File Attachments**: Reference images included automatically
- **Easy Follow-up**: Client contact info readily available
- **No Manual Work**: Fully automated process
- **Backup Contact**: Multiple contact methods available

The system ensures you never miss a potential client and can respond quickly to quote requests!
