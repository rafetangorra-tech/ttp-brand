/* global React */
function Footer() {
  return (
    <footer style={{background:'#112337', color:'#fff', padding:'64px 0 32px'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:48}}>
          <div>
            <img src="./assets/logo/logo-mark.png" alt="TTP" style={{height:48, filter:'invert(1) brightness(2)', marginBottom:18}} />
            <p style={{fontSize:14, lineHeight:1.6, color:'rgba(255,255,255,.7)', maxWidth:320, margin:0}}>
              More than a gym — a community that disrupts patterns. 45-minute Sweat Therapy Sessions in Lake Ronkonkoma, NY.
            </p>
          </div>
          {[
            { h:'Studio', links:['Sessions','Programs','Styku Scan','Pricing'] },
            { h:'Community', links:['About','Our Why','Values','Team'] },
            { h:'Visit', links:['4949 Express Dr N','Lake Ronkonkoma, NY','631-640-6999','@the_trainerpage'] }
          ].map(col => (
            <div key={col.h}>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#FF2504', marginBottom:16}}>{col.h}</div>
              <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
                {col.links.map(l => <li key={l}><a href="#" style={{color:'rgba(255,255,255,.85)', textDecoration:'none', fontSize:14, fontWeight:500}}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{marginTop:56, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.12)', display:'flex', justifyContent:'space-between', fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', fontWeight:600}}>
          <span>© The Trainer Page · Est. 2018</span>
          <span>We Don't Train · We Work Out for a Better Life</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
