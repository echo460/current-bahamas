import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Current Bahamas — Compliance Coordination for Bahamian SMEs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0B2545',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Clock icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '3px solid #1A6B72',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: '2px', height: '10px', backgroundColor: '#1A6B72', marginBottom: '2px' }} />
          </div>
          <span style={{ color: '#1A6B72', fontSize: '18px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Current Bahamas
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          Stay current without chasing every filing yourself.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Business licence · VAT · TCC · NIB · Compliance coordination for Bahamian SMEs
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '24px',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px' }}>Nassau, The Bahamas</span>
          <span style={{ color: '#1A6B72', fontSize: '18px', fontWeight: 600 }}>currentbahamas.com</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
