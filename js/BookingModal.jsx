/* global React */
const { useState: useS_bm } = React;

function BookingModal({ open, onClose }) {
  const [step, setStep] = useS_bm(1);
  const [done, setDone] = useS_bm(false);
  if (!open) return null;

  const slots = ['Tue 6:00 AM · Full Body','Wed 5:30 PM · Conditioning','Thu 9:30 AM · Lower Power'];

  return (
    <div style={styles_bm.scrim} onClick={onClose}>
      <div style={styles_bm.sheet} onClick={e => e.stopPropagation()}>
        <button style={styles_bm.close} onClick={onClose}>×</button>
        {done ? (
          <div style={{padding:'48px 40px', textAlign:'center'}}>
            <div style={{fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#C60101', marginBottom:14}}>You're in.</div>
            <h3 style={{fontSize:40, fontWeight:900, lineHeight:1, letterSpacing:'-.01em', textTransform:'uppercase', margin:'0 0 16px'}}>See you there.</h3>
            <p style={{fontSize:15, color:'#686E77', margin:'0 0 28px'}}>Check your email for details. Show up 5 minutes early.</p>
            <button onClick={onClose} style={styles_bm.primary}>Done</button>
          </div>
        ) : (
          <>
            <div style={{padding:'32px 40px 0'}}>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#C60101', marginBottom:10}}>Free First Session</div>
              <h3 style={{fontSize:32, fontWeight:900, lineHeight:1, letterSpacing:'-.01em', textTransform:'uppercase', margin:0}}>Book your Sweat Session.</h3>
              <div style={{display:'flex', gap:6, margin:'24px 0 8px'}}>
                {[1,2].map(s => <div key={s} style={{flex:1, height:3, background: step>=s ? '#C60101' : 'rgba(17,35,55,.1)', borderRadius:999}} />)}
              </div>
            </div>
            {step === 1 && (
              <div style={{padding:'16px 40px 32px'}}>
                <div style={styles_bm.lbl}>Pick a slot</div>
                <div style={{display:'flex', flexDirection:'column', gap:8, marginBottom:24}}>
                  {slots.map(s => (
                    <label key={s} style={styles_bm.slot}>
                      <input type="radio" name="slot" defaultChecked={s===slots[0]} style={{accentColor:'#C60101'}} />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
                <button onClick={() => setStep(2)} style={styles_bm.primary}>Continue →</button>
              </div>
            )}
            {step === 2 && (
              <div style={{padding:'16px 40px 32px'}}>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:16}}>
                  <div><div style={styles_bm.lbl}>First name</div><input style={styles_bm.input} defaultValue="Sam" /></div>
                  <div><div style={styles_bm.lbl}>Last name</div><input style={styles_bm.input} defaultValue="Rivera" /></div>
                </div>
                <div style={{marginBottom:12}}><div style={styles_bm.lbl}>Email</div><input style={styles_bm.input} defaultValue="sam@example.com" /></div>
                <div style={{marginBottom:24}}><div style={styles_bm.lbl}>Phone</div><input style={styles_bm.input} defaultValue="631-555-0199" /></div>
                <div style={{display:'flex', gap:10}}>
                  <button onClick={() => setStep(1)} style={styles_bm.secondary}>Back</button>
                  <button onClick={() => setDone(true)} style={{...styles_bm.primary, flex:1}}>Confirm Booking</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const styles_bm = {
  scrim: { position:'fixed', inset:0, background:'rgba(17,35,55,.6)', backdropFilter:'blur(4px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:100 },
  sheet: { background:'#fff', borderRadius:8, width:460, maxWidth:'92vw', boxShadow:'0 20px 48px rgba(17,35,55,.3)', position:'relative' },
  close: { position:'absolute', top:12, right:12, background:'transparent', border:0, fontSize:28, lineHeight:1, color:'#686E77', cursor:'pointer', padding:6 },
  lbl: { fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#686E77', marginBottom:6 },
  slot: { display:'flex', gap:10, padding:'14px 14px', border:'1px solid rgba(17,35,55,.12)', borderRadius:4, cursor:'pointer', fontSize:14, fontWeight:600, color:'#112337', alignItems:'center' },
  input: { width:'100%', padding:'12px 14px', border:'1px solid rgba(17,35,55,.16)', borderRadius:2, fontSize:14, color:'#112337', fontFamily:'inherit', boxSizing:'border-box' },
  primary: { background:'#C60101', color:'#fff', border:0, padding:'15px 24px', fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, width:'100%', fontFamily:'inherit' },
  secondary: { background:'transparent', color:'#112337', border:'2px solid #112337', padding:'13px 22px', fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, fontFamily:'inherit' }
};

window.BookingModal = BookingModal;
