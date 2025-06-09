# 🧪 Quote Request System Testing Checklist

## 📋 **PRE-TESTING SETUP**

### **1. Environment Configuration**
- [ ] Created `.env.local` file with Gmail credentials
- [ ] Gmail 2-factor authentication enabled
- [ ] Gmail app password generated and configured
- [ ] Website restarted after environment setup

### **2. Basic Verification**
- [ ] Website loads at `http://localhost:3000`
- [ ] Contact form is visible and accessible
- [ ] All form steps navigate properly
- [ ] No console errors in browser developer tools

## 🧪 **TESTING SCENARIOS**

### **Test 1: Basic Quote Request (No Files)**
**Steps:**
1. Navigate to contact section
2. Fill Step 1: Contact Information
   - Name: "Test Client"
   - Email: "test@example.com"
   - Phone: "0726452055"
   - Location: "Nairobi, Kenya"
3. Fill Step 2: Project Details
   - Service Type: "Interior Design"
   - Budget: "KSh 500,000 - 1,000,000"
   - Description: "Test project description"
4. Skip Step 3: File Upload
5. Step 4: Submit Request

**Expected Results:**
- [ ] Form submits without errors
- [ ] Success message displays
- [ ] Email received at petricolimited@gmail.com
- [ ] Email contains all form data
- [ ] Reply-to address is test@example.com

### **Test 2: Quote Request with File Attachments**
**Steps:**
1. Complete Steps 1-2 as above
2. Step 3: Upload 2-3 test images
   - Verify image previews work
   - Test remove file functionality
3. Submit request

**Expected Results:**
- [ ] Files upload successfully
- [ ] Email received with attachments
- [ ] Image files properly attached and viewable
- [ ] Email indicates number of attachments

### **Test 3: Form Validation**
**Steps:**
1. Try submitting with empty required fields
2. Enter invalid email format
3. Try uploading non-image files

**Expected Results:**
- [ ] Validation errors display clearly
- [ ] Form prevents submission with invalid data
- [ ] Error messages are helpful and clear
- [ ] Invalid files are rejected with error message

### **Test 4: Error Handling**
**Steps:**
1. Temporarily rename `.env.local` to simulate email failure
2. Submit quote request
3. Restore `.env.local`

**Expected Results:**
- [ ] Error message displays to user
- [ ] Form doesn't show false success
- [ ] User can retry submission
- [ ] Error message suggests alternative contact methods

### **Test 5: Service Area Integration**
**Steps:**
1. Navigate to service area map (if available)
2. Select a service area
3. Navigate to contact form
4. Verify location pre-filled

**Expected Results:**
- [ ] Selected area appears in contact form
- [ ] Local team phone number displayed
- [ ] Location field pre-populated

## 📧 **EMAIL VERIFICATION CHECKLIST**

### **Email Content Verification**
- [ ] **Subject Line:** "New Quote Request - [Service] Project in [Location]"
- [ ] **Client Info:** Name, email, phone, location all present
- [ ] **Project Details:** Service type, budget, description included
- [ ] **Formatting:** Professional HTML formatting
- [ ] **Reply-To:** Set to client's email address
- [ ] **Attachments:** Reference images attached properly

### **Email Delivery Verification**
- [ ] Email delivered to inbox (not spam)
- [ ] Sender shows as website/system
- [ ] Reply functionality works correctly
- [ ] Attachments open properly

## 🔧 **TROUBLESHOOTING GUIDE**

### **If Email Not Received:**
1. Check spam/junk folder
2. Verify Gmail app password is correct
3. Confirm environment variables are set
4. Check browser console for API errors
5. Verify Gmail 2-factor auth is enabled

### **If Form Submission Fails:**
1. Check browser network tab for API errors
2. Verify `/api/quote-request` endpoint is accessible
3. Check server logs for errors
4. Confirm nodemailer package is installed

### **If Files Don't Upload:**
1. Check file size (max 10MB)
2. Verify file type is image
3. Check browser console for upload errors
4. Test with different image formats

## 📱 **MOBILE TESTING**

### **Responsive Design**
- [ ] Form displays correctly on mobile
- [ ] All form steps navigate properly on mobile
- [ ] File upload works on mobile devices
- [ ] Touch interactions work smoothly

### **Mobile-Specific Tests**
- [ ] Phone number links work (click-to-call)
- [ ] Email links open mail app
- [ ] WhatsApp link opens WhatsApp
- [ ] Form keyboard behavior is appropriate

## ✅ **FINAL VALIDATION**

### **Business Process Test**
1. Submit a real quote request
2. Company receives and reviews email
3. Reply to client using email reply function
4. Verify complete communication flow

### **Performance Check**
- [ ] Form submits within reasonable time (< 5 seconds)
- [ ] File uploads complete without timeout
- [ ] No memory leaks in file handling
- [ ] Email delivery is timely (< 1 minute)

## 🎯 **SUCCESS CRITERIA**

**All tests passing means:**
- Quote requests are reliably delivered to company
- Professional email format maintains business image
- Multiple contact options provide backup methods
- User experience is smooth and error-free
- System handles edge cases gracefully

**Ready for production when:**
- All checklist items are ✅
- Company confirms email reception
- Response time meets business requirements
- Error handling is appropriate for users
