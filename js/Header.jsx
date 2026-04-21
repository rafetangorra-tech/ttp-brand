/* global React */
const { useState } = React;

function Header({ onBook }) {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Sessions', 'Programs', 'Contact'];
  return (
    <header style={styles_hdr.bar}>
      <div style={styles_hdr.inner}>
        <a href="#home" style={styles_hdr.logo}>
          <img src="./assets/logo/logo-primary.png" alt="The Trainer Page" style={{height:36}} />
        </a>
        <nav style={styles_hdr.nav}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={styles_hdr.link}>{l}</a>
          ))}
        </nav>
        <div style={styles_hdr.right}>
          <a href="tel:6316406999" style={styles_hdr.phone}>631-640-6999</a>
          <button onClick={onBook} style={styles_hdr.cta}>Book a Session</button>
        </div>
      </div>
    </header>
  );
}

const styles_hdr = {
  bar: { position:'sticky', top:0, zIndex:50, background:'rgba(255,255,255,.94)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(17,35,55,.08)' },
  inner: { maxWidth:1280, margin:'0 auto', padding:'14px 32px', display:'flex', alignItems:'center', gap:32 },
  logo: { display:'flex', alignItems:'center' },
  nav: { display:'flex', gap:28, marginLeft:12 },
  link: { fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#112337', textDecoration:'none' },
  right: { marginLeft:'auto', display:'flex', alignItems:'center', gap:18 },
  phone: { fontSize:13, fontWeight:600, color:'#112337', textDecoration:'none', letterSpacing:'.02em' },
  cta: { background:'#C60101', color:'#fff', border:0, padding:'12px 22px', fontSize:12, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, boxShadow:'0 6px 20px rgba(198,1,1,.28)', fontFamily:'inherit' }
};

window.Header = Header;
