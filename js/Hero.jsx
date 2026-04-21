/* global React */
function Hero({ onBook }) {
  return (
    <section id="home" style={styles_hero.wrap}>
      <div style={styles_hero.inner}>
        <div style={styles_hero.left}>
          <span style={styles_hero.eyebrow}>Sweat Therapy · Lake Ronkonkoma, NY</span>
          <h1 style={styles_hero.title}>We Don't Train.<br/><span style={styles_hero.accent}>We Work Out</span><br/>for a Better Life.</h1>
          <p style={styles_hero.sub}>45-minute sessions. Max 30 people. All out.<br/>Your first session is free.</p>
          <div style={styles_hero.row}>
            <button onClick={onBook} style={styles_hero.primary}>Book a Free Session</button>
            <a href="#sessions" style={styles_hero.secondaryLight}>See the Schedule</a>
          </div>
          <div style={styles_hero.stats}>
            <div style={styles_hero.stat}><span style={styles_hero.statN}>45</span><span style={styles_hero.statL}>Min per Session</span></div>
            <div style={styles_hero.statDiv}/>
            <div style={styles_hero.stat}><span style={styles_hero.statN}>30</span><span style={styles_hero.statL}>Max per Class</span></div>
            <div style={styles_hero.statDiv}/>
            <div style={styles_hero.stat}><span style={styles_hero.statN}>9</span><span style={styles_hero.statL}>Sessions a Day</span></div>
          </div>
        </div>
        <div style={styles_hero.right}>
          <div style={styles_hero.mark} aria-hidden="true">
            <img src="./assets/logo/logo-mark.png" alt="" style={styles_hero.markImg} />
          </div>
          <div style={styles_hero.photoCard}>
            <img src="./assets/photography/select-04.jpg" alt="Member on the air bike" style={styles_hero.photo} />
            <div style={styles_hero.photoTag}>
              <span style={styles_hero.photoTagEyebrow}>Member Spotlight</span>
              <span style={styles_hero.photoTagName}>"This isn't a gym. It's a room I need to be in."</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles_hero = {
  wrap: { position:'relative', background:'#F5F5F5', overflow:'hidden', borderBottom:'1px solid rgba(17,35,55,.06)' },
  inner: { maxWidth:1280, margin:'0 auto', padding:'72px 32px 96px', display:'grid', gridTemplateColumns:'1.05fr 1fr', gap:56, alignItems:'center' },
  left: { position:'relative', zIndex:2 },
  eyebrow: { display:'inline-block', fontSize:12, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#C60101', borderLeft:'3px solid #C60101', paddingLeft:12, marginBottom:24 },
  title: { fontSize:76, fontWeight:900, lineHeight:1, letterSpacing:'-.02em', textTransform:'uppercase', margin:'0 0 22px', color:'#112337' },
  accent: { color:'#C60101' },
  sub: { fontSize:18, lineHeight:1.55, fontWeight:400, maxWidth:420, margin:'0 0 32px', color:'#585E6A' },
  row: { display:'flex', gap:14, alignItems:'center', flexWrap:'wrap', marginBottom:48 },
  primary: { background:'#C60101', color:'#fff', border:0, padding:'18px 32px', fontSize:14, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, boxShadow:'0 6px 20px rgba(198,1,1,.28)', fontFamily:'inherit' },
  secondaryLight: { color:'#112337', border:'2px solid #112337', padding:'16px 28px', fontSize:14, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', textDecoration:'none', borderRadius:2 },
  stats: { display:'flex', alignItems:'center', gap:20, maxWidth:520 },
  stat: { display:'flex', flexDirection:'column', gap:4 },
  statN: { fontSize:40, fontWeight:900, lineHeight:1, color:'#112337', letterSpacing:'-.02em' },
  statL: { fontSize:10, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase', color:'#686E77' },
  statDiv: { width:1, height:40, background:'rgba(17,35,55,.12)' },

  right: { position:'relative', height:620, display:'flex', alignItems:'center', justifyContent:'center' },
  mark: { position:'absolute', right:-80, top:-40, width:560, height:560, pointerEvents:'none', opacity:.08, zIndex:0 },
  markImg: { width:'100%', height:'100%', objectFit:'contain', filter:'grayscale(1)' },
  photoCard: { position:'relative', width:'88%', aspectRatio:'4/5', borderRadius:10, overflow:'hidden', boxShadow:'0 30px 60px rgba(17,35,55,.22)', zIndex:1, background:'#000' },
  photo: { width:'100%', height:'100%', objectFit:'cover', display:'block' },
  photoTag: { position:'absolute', left:18, bottom:18, right:18, background:'rgba(17,35,55,.88)', backdropFilter:'blur(6px)', padding:'14px 16px', borderRadius:6, borderLeft:'4px solid #C60101', display:'flex', flexDirection:'column', gap:4 },
  photoTagEyebrow: { fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#FF2504' },
  photoTagName: { fontSize:15, fontWeight:600, color:'#fff', lineHeight:1.3 }
};

window.Hero = Hero;
