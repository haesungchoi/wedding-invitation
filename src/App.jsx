import { useState, useRef, useEffect } from 'react'
import { IOSDevice } from './components/IOSFrame'
import MainScreen from './screens/Main'
import GroomScreen from './screens/Groom'
import BrideScreen from './screens/Bride'
import NumbersScreen from './screens/Numbers'
import { MapSheet, RSVPSheet, ShareSheet, AccountSheet } from './screens/Sheets'

const TWEAKS = { lime: '#D4E607', ink: '#111111', bw: false }

export default function App() {
  const [modal, setModal] = useState(null)
  const [closingModal, setClosingModal] = useState(false)
  const [sheet, setSheet] = useState(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 600)
  const transitionLock = useRef(false)
  const SHEET_MS = 480

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const goTo = (next) => {
    if (transitionLock.current) return

    if (next === 'main') {
      if (!modal) return
      transitionLock.current = true
      setClosingModal(true)
      setTimeout(() => {
        setModal(null)
        setClosingModal(false)
        transitionLock.current = false
      }, SHEET_MS)
      return
    }

    if (next === 'groom' || next === 'bride' || next === 'numbers') {
      if (modal === next) return
      if (!modal) {
        setModal(next)
        return
      }
      transitionLock.current = true
      setClosingModal(true)
      setTimeout(() => {
        setModal(next)
        setClosingModal(false)
        requestAnimationFrame(() => {
          const el = document.querySelector('.modal-sheet .inv-screen')
          if (el) el.scrollTop = 0
        })
        transitionLock.current = false
      }, SHEET_MS)
    }
  }

  const openSheet = (name) => setSheet(name)
  const closeSheet = () => setSheet(null)
  const rootPushed = modal && !closingModal

  const stageInner = (
    <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', background: '#000' }}>
      <div className={`page-root ${rootPushed ? 'page-pushed' : ''}`}>
        <MainScreen goTo={goTo} openSheet={openSheet} tweaks={TWEAKS} />
      </div>
      <div
        className={`page-scrim ${rootPushed ? 'page-scrim-on' : ''}`}
        onClick={() => modal && goTo('main')}
      />

      {modal && (
        <div className={`modal-sheet ${closingModal ? 'modal-closing' : ''}`}>
          <div className="sheet-handle" />
          {modal === 'groom' && <GroomScreen goTo={goTo} openSheet={openSheet} tweaks={TWEAKS} />}
          {modal === 'bride' && <BrideScreen goTo={goTo} openSheet={openSheet} tweaks={TWEAKS} />}
          {modal === 'numbers' && <NumbersScreen goTo={goTo} openSheet={openSheet} tweaks={TWEAKS} />}
        </div>
      )}

      <MapSheet     open={sheet === 'map'}           onClose={closeSheet} />
      <RSVPSheet    open={sheet === 'rsvp'}          onClose={closeSheet} />
      <ShareSheet   open={sheet === 'share'}         onClose={closeSheet} />
      <AccountSheet open={sheet === 'account-groom'} onClose={closeSheet} side="groom" />
      <AccountSheet open={sheet === 'account-bride'} onClose={closeSheet} side="bride" />
      <AccountSheet open={sheet === 'account-both'}  onClose={closeSheet} side="both" />
    </div>
  )

  if (isMobile) {
    return (
      <div style={{ width: '100%', height: '100dvh', position: 'relative', overflow: 'hidden', background: '#000' }}>
        {stageInner}
      </div>
    )
  }

  return (
    <div className="stage">
      <IOSDevice width={390} height={830}>
        {stageInner}
      </IOSDevice>
    </div>
  )
}
