/* global React, SectionTitle */
function ContactBlock() {
  const items = [
    { icon:'./assets/icons/location.png', label:'Studio', value:'4949 Express Dr N\nLake Ronkonkoma, NY 11779' },
    { icon:'./assets/icons/phone.png', label:'Phone', value:'631-640-6999', href:'tel:6316406999' },
    { icon:'./assets/icons/email.png', label:'Email', value:'thetrainerpage@gmail.com', href:'mailto:thetrainerpage@gmail.com' }
  ];
  return (
    <section id="contact" style={{padding:'96px 0', background:'#fff'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px'}}>
        <SectionTitle eyebrow="Come In" title={"Walk in. Meet us. \nSweat with us."} kicker="First session is on us. Show up a few minutes early so we can meet you." />
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, marginTop:16}}>
          {items.map(it => (
            <div key={it.label} style={{background:'#F5F5F5', padding:'28px 24px', borderRadius:8, display:'flex', gap:18}}>
              <img src={it.icon} alt="" style={{width:36, height:36, objectFit:'contain', flexShrink:0, filter:'brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(7492%) hue-rotate(5deg) brightness(95%) contrast(109%)'}} />
              <div>
                <div style={{fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#C60101', marginBottom:6}}>{it.label}</div>
                {it.href
                  ? <a href={it.href} style={{fontSize:16, fontWeight:600, color:'#112337', textDecoration:'none', whiteSpace:'pre-line'}}>{it.value}</a>
                  : <div style={{fontSize:16, fontWeight:600, color:'#112337', whiteSpace:'pre-line', lineHeight:1.35}}>{it.value}</div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ContactBlock = ContactBlock;
