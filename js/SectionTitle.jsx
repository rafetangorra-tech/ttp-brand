/* global React */
function SectionTitle({ eyebrow, title, kicker, invert }) {
  const c = invert ? '#fff' : '#112337';
  const sub = invert ? 'rgba(255,255,255,.7)' : '#686E77';
  return (
    <div style={{marginBottom:40}}>
      {eyebrow && <div style={{fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#C60101', marginBottom:12, display:'flex', alignItems:'center', gap:10}}>
        <span style={{width:28, height:2, background:'#C60101'}} />{eyebrow}
      </div>}
      <h2 style={{fontSize:56, fontWeight:800, lineHeight:1.05, letterSpacing:'-.01em', textTransform:'uppercase', margin:0, color:c, maxWidth:900, whiteSpace:'pre-line'}}>{title}</h2>
      {kicker && <p style={{fontSize:17, lineHeight:1.55, color:sub, maxWidth:640, margin:'18px 0 0'}}>{kicker}</p>}
    </div>
  );
}

window.SectionTitle = SectionTitle;
