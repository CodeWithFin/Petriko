#!/bin/bash

# Portfolio images for Petriko website
# Create placeholder images using solid colors with text overlays

PORTFOLIO_DIR="/home/finley/start-up/petriko-website/public/images/portfolio"

# Create directories if they don't exist
mkdir -p "$PORTFOLIO_DIR"/{featured,residential,commercial,before-after}

# Function to create a colored rectangle with text using ImageMagick
create_placeholder() {
    local filename="$1"
    local text="$2"
    local color="$3"
    
    # Create a simple colored rectangle with text (if ImageMagick is available)
    if command -v convert >/dev/null 2>&1; then
        convert -size 800x600 xc:"$color" -gravity center -pointsize 48 -fill white -annotate +0+0 "$text" "$filename"
    else
        # Fallback: create a simple file with project info
        echo "Placeholder for $text" > "$filename.txt"
        # Download a placeholder from a service
        curl -s "https://via.placeholder.com/800x600/$color/FFFFFF?text=$text" -o "$filename" || \
        wget -q "https://picsum.photos/800/600?random=$(date +%s)" -O "$filename"
    fi
}

# Featured projects
create_placeholder "$PORTFOLIO_DIR/featured/mirema-apartments.jpg" "Mirema Apartments" "4A90E2"
create_placeholder "$PORTFOLIO_DIR/featured/dci-headquarters.jpg" "DCI Headquarters" "2C3E50"

# Residential projects  
create_placeholder "$PORTFOLIO_DIR/residential/utawala-residence.jpg" "Utawala Residence" "27AE60"
create_placeholder "$PORTFOLIO_DIR/residential/karen-villa.jpg" "Karen Villa" "E74C3C"
create_placeholder "$PORTFOLIO_DIR/residential/kilimani-apartments.jpg" "Kilimani Apartments" "F39C12"
create_placeholder "$PORTFOLIO_DIR/residential/runda-home.jpg" "Runda Home" "8E44AD"

# Commercial projects
create_placeholder "$PORTFOLIO_DIR/commercial/westlands-plaza.jpg" "Westlands Plaza" "34495E"
create_placeholder "$PORTFOLIO_DIR/commercial/cbd-bank.jpg" "CBD Bank" "16A085"

# Before/After images
create_placeholder "$PORTFOLIO_DIR/before-after/mirema-before.jpg" "Before" "7F8C8D"
create_placeholder "$PORTFOLIO_DIR/before-after/mirema-after.jpg" "After" "2ECC71"

echo "Placeholder images created successfully!"
