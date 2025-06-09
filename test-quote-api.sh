#!/bin/bash

echo "🧪 Testing Quote Request API..."

# Test the quote request endpoint
response=$(curl -s -X POST http://localhost:3000/api/quote-request \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com", 
    "phone": "0722123456",
    "location": "Nairobi",
    "projectType": "Interior Design",
    "message": "This is a test quote request to verify the email system is working properly.",
    "budget": "100,000 - 500,000"
  }')

echo "📧 API Response:"
echo "$response" | python3 -m json.tool 2>/dev/null || echo "$response"

# Check if email was sent successfully
if echo "$response" | grep -q '"success":true'; then
    echo "✅ Email sent successfully!"
    echo "📬 Check your inbox at finley.mwachia12@gmail.com"
else
    echo "❌ Email send failed."
    echo "🔍 Check the error message above for details."
fi

echo "📊 Testing complete."
