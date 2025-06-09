import { NextRequest, NextResponse } from 'next/server'
import { WebSocketServer, WebSocket } from 'ws'

// In-memory storage for reviews (in production, use a database)
let reviews: any[] = []

// WebSocket server instance
let wss: WebSocketServer | null = null

// Initialize WebSocket server
function initWebSocketServer() {
  if (!wss) {
    try {
      wss = new WebSocketServer({ port: 8080 })
      console.log('WebSocket server started on port 8080')
      
      // Handle server errors
      wss.on('error', (error: any) => {
        if (error.code === 'EADDRINUSE') {
          console.log('WebSocket server already running on port 8080')
        } else {
          console.error('WebSocket server error:', error)
        }
      })
    } catch (error: any) {
      if (error.code === 'EADDRINUSE') {
        console.log('WebSocket server already running on port 8080')
      } else {
        console.error('Failed to start WebSocket server:', error)
      }
    }
  }
  return wss
}

// Broadcast new review to all connected clients
function broadcastReview(review: any) {
  const wsServer = initWebSocketServer()
  if (wsServer) {
    wsServer.clients.forEach((client: WebSocket) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ type: 'NEW_REVIEW', review }))
      }
    })
  }
}

export async function GET() {
  try {
    return NextResponse.json({ reviews, success: true })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return NextResponse.json(
      { message: 'Failed to fetch reviews', success: false },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, rating, comment, project, location } = body
    
    if (!name || !email || !rating || !comment) {
      return NextResponse.json(
        { message: 'Missing required fields', success: false },
        { status: 400 }
      )
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { message: 'Rating must be between 1 and 5', success: false },
        { status: 400 }
      )
    }

    // Create new review
    const newReview = {
      id: Date.now(), // Simple ID generation (use UUID in production)
      name: name.trim(),
      email: email.trim(),
      rating: parseInt(rating),
      text: comment.trim(),
      project: project?.trim() || 'General Review',
      location: location?.trim() || 'Kenya',
      image: `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=150&h=150&fit=crop&crop=face`,
      role: 'Client',
      company: 'Verified Customer',
      category: 'featured' as const,
      timestamp: new Date().toISOString(),
      approved: true // Auto-approve for demo (implement moderation in production)
    }

    // Add to reviews array
    reviews.unshift(newReview) // Add to beginning of array

    // Keep only last 50 reviews to prevent memory issues
    if (reviews.length > 50) {
      reviews = reviews.slice(0, 50)
    }

    // Broadcast the new review to all connected WebSocket clients
    broadcastReview(newReview)

    console.log('New review submitted:', newReview)

    return NextResponse.json({
      message: 'Review submitted successfully',
      review: newReview,
      success: true
    })

  } catch (error) {
    console.error('Error submitting review:', error)
    return NextResponse.json(
      { message: 'Failed to submit review', success: false },
      { status: 500 }
    )
  }
}
