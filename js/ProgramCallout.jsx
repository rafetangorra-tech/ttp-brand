/* global React */
function ProgramCallout({ onBook }) {
  return (
    <section id="programs" style={{background:'#112337', color:'#fff', padding:'96px 0'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px', display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:64, alignItems:'center'}}>
        <div>
          <div style={{display:'inline-block', background:'#C60101', color:'#fff', padding:'5px 12px', fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', borderRadius:999, marginBottom:20}}>8-Week Program</div>
          <h2 style={{fontSize:52, fontWeight:900, lineHeight:1.05, letterSpacing:'-.02em', textTransform:'uppercase', margin:'0 0 20px'}}>Sweat & Success.</h2>
          <p style={{fontSize:18, lineHeight:1.55, color:'rgba(255,255,255,.78)', margin:'0 0 28px', maxWidth:520}}>
            Eight weeks. Structured training, nutrition guidance, weekly accountability. Scanned with the Styku 3D body scanner — the only one on Long Island — so progress is real, not imagined.
          </p>
          <ul style={{listStyle:'none', padding:0, margin:'0 0 32px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
            {['3 Sweat Sessions / week','Styku body scans','Nutrition playbook','Community check-ins'].map(f => (
              <li key={f} style={{display:'flex', alignItems:'center', gap:10, fontSize:14, color:'#fff'}}>
                <span style={{width:6, height:6, background:'#C60101', borderRadius:999}} />{f}
              </li>
            ))}
          </ul>
          <button onClick={onBook} style={{background:'#C60101', color:'#fff', border:0, padding:'16px 28px', fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, boxShadow:'0 6px 20px rgba(198,1,1,.28)', fontFamily:'inherit'}}>Apply for the Next Cohort</button>
        </div>
        <div style={{position:'relative', aspectRatio:'4/5', borderRadius:8, overflow:'hidden'}}>
          <img src="./assets/photography/select-07.jpg" alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
          <div style={{position:'absolute', left:20, bottom:20, background:'#C60101', color:'#fff', padding:'10px 14px', fontSize:11, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', borderRadius:2}}>Next cohort · May 5</div>
        </div>
      </div>
    </section>
  );
}

window.ProgramCallout = ProgramCallout;
