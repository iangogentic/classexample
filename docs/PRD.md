# PRD — SessionHouse

**Problem**: Audiophiles with high-end listening rooms can't monetize their systems; enthusiasts can't access premium equipment for critical listening sessions.

**User**:
- **Hosts**: Audiophile collectors with curated systems (Magico, Pass Labs, dCS, etc.)
- **Guests**: Audio enthusiasts, small groups seeking premium listening experiences

**Value Metric**: $200–500/hour monetization for hosts; access to $50K+ systems for guests at hourly rates

**Happy Path**: Guest searches "planar speakers Dallas" → finds treated room with Magnepan + McIntosh → books 3-hour slot → pays with deposit hold → enjoys session → reviews host → deposit released

**Acceptance Criteria**:
- **Given** unauthenticated user, **When** searches by city/gear, **Then** sees listings with photos, capacity, hourly price, gear chain
- **Given** verified guest, **When** selects time slot, **Then** creates PaymentIntent + SetupIntent for deposit, confirms booking
- **Given** host with Stripe Connect, **When** session completes, **Then** receives payout (subtotal - fees) and guest's deposit is released
- **Given** completed booking, **When** 24h window passes, **Then** both parties can leave reviews
- **Given** new host, **When** onboards, **Then** completes Stripe Express account link and can publish listings
- **Given** guest before first booking, **When** attempts to book, **Then** must complete ID verification (Stripe Identity)

**Non-Goals**:
- Multi-day bookings (hourly only for MVP)
- Instant booking without host approval
- In-app audio/video streaming
- Equipment sales/rentals beyond listening sessions
- Host-to-host networking features
