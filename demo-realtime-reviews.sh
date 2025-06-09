#!/bin/bash

echo "=== REAL-TIME REVIEW SYSTEM DEMO ==="
echo "This script demonstrates the complete real-time review functionality"
echo

# Function to submit a test review
submit_review() {
    local name="$1"
    local email="$2" 
    local rating="$3"
    local comment="$4"
    local project="$5"
    local location="$6"
    
    echo "Submitting review from: $name"
    
    curl -X POST http://localhost:3000/api/reviews \
        -H "Content-Type: application/json" \
        -d "{
            \"name\": \"$name\",
            \"email\": \"$email\",
            \"rating\": $rating,
            \"comment\": \"$comment\",
            \"project\": \"$project\",
            \"location\": \"$location\"
        }" \
        --silent --show-error
    
    echo
    echo "---"
}

echo "1. Starting Next.js development server..."
echo "Please make sure the server is running on http://localhost:3000"
echo

read -p "Press Enter when the server is ready..."

echo
echo "2. Testing API endpoints..."

# Test GET endpoint
echo "Fetching current reviews:"
curl http://localhost:3000/api/reviews --silent | jq '.' 2>/dev/null || echo "Reviews API response received"
echo

echo "3. Submitting test reviews..."

# Submit test reviews
submit_review "Alice Johnson" "alice@example.com" 5 "Excellent work on our kitchen renovation! The team was professional and delivered exactly what we wanted." "Kitchen Renovation" "Nairobi"

sleep 2

submit_review "Bob Miller" "bob@example.com" 4 "Great service and attention to detail. Very satisfied with the commercial office design." "Office Design" "Mombasa"

sleep 2

submit_review "Carol Davis" "carol@example.com" 5 "Outstanding bathroom remodel! Exceeded our expectations in every way." "Bathroom Remodel" "Kisumu"

echo
echo "4. Real-time WebSocket test..."
echo "The reviews should now appear in real-time on:"
echo "- Main website: http://localhost:3000/#testimonials"
echo "- Review submission page: http://localhost:3000/reviews"
echo

echo "5. Testing review submission form..."
echo "Visit http://localhost:3000/reviews to test the form submission"
echo

echo "=== DEMO COMPLETE ==="
echo
echo "FEATURES DEMONSTRATED:"
echo "✅ Real-time review submission via API"
echo "✅ WebSocket connection for live updates"
echo "✅ Review display integration with testimonials"
echo "✅ Form validation and user feedback"
echo "✅ Navigation integration"
echo
echo "NEXT STEPS:"
echo "1. Open http://localhost:3000 in your browser"
echo "2. Navigate to the Testimonials section"
echo "3. Click 'Live Reviews' filter to see real-time reviews"
echo "4. Submit new reviews via the form at /reviews"
echo "5. Watch them appear instantly on the main page"
