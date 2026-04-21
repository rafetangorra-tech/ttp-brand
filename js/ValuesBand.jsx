/* global React */
function ValuesBand() {
  const vals = [
    { n:'01', t:'Obsessive Attention to Detail', a:'OAD' },
    { n:'02', t:'Dedicated to the Sweat', a:'DTS' },
    { n:'03', t:'Extreme Ownership', a:'EO' },
    { n:'04', t:'Put in Work', a:'PIW' },
    { n:'05', t:'Have Fun', a:'HF' }
  ];
  return (
    <section id="values" style={{background:'#000', color:'#fff', padding:'72px 0'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px'}}>
        <div style={{display:'flex', alignItems:'baseline', gap:16, marginBottom:36}}>
          <div style={{width:28, height:2, background:'#C60101'}} />
          <span style={{fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#FF2504'}}>Core Values</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, borderTop:'1px solid rgba(255,255,255,.12)'}}>
          {vals.map(v => (
            <div key={v.n} style={{padding:'28px 18px 28px 0', borderRight:'1px solid rgba(255,255,255,.12)'}}>
              <div style={{fontSize:11, fontWeight:700, letterSpacing:'.12em', color:'rgba(255,255,255,.5)', marginBottom:14}}>{v.n}</div>
              <div style={{fontSize:20, fontWeight:800, lineHeight:1.15, letterSpacing:'-.01em', textTransform:'uppercase'}}>{v.t}</div>
              <div style={{marginTop:12, fontSize:11, fontWeight:700, letterSpacing:'.12em', color:'#C60101'}}>{v.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ValuesBand = ValuesBand;
