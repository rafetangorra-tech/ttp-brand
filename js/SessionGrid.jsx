/* global React, SectionTitle */
const { useState: useS_sg } = React;

function SessionGrid({ onBook }) {
  const schedule = [
    { day:'Monday',    short:'Mon', focus:'Legs',            slots:['6:00 AM','9:30 AM','4:30 PM','5:30 PM','6:30 PM'], coach:'Talia' },
    { day:'Tuesday',   short:'Tue', focus:'Upper',           slots:['6:00 AM','9:30 AM','4:30 PM','5:30 PM','6:30 PM'], coach:'Kelsey' },
    { day:'Wednesday', short:'Wed', focus:'Full Body',       slots:['6:00 AM','9:30 AM','4:30 PM','5:30 PM','6:30 PM'], coach:'Antonio' },
    { day:'Thursday',  short:'Thu', focus:'Legs',            slots:['6:00 AM','9:30 AM','4:30 PM','5:30 PM','6:30 PM'], coach:'John' },
    { day:'Friday',    short:'Fri', focus:'Upper',           slots:['6:00 AM','9:30 AM','4:30 PM','5:30 PM'],           coach:'Talia' },
    { day:'Saturday',  short:'Sat', focus:'Full Body',       slots:['8:00 AM','9:00 AM','10:00 AM'],                    coach:'Kelsey' },
    { day:'Sunday',    short:'Sun', focus:'Cardio + Core',   slots:['9:00 AM','10:00 AM'],                              coach:'Antonio' },
  ];

  const todayIdx = (() => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; })();
  const [active, setActive] = useS_sg(todayIdx);
  const cur = schedule[active];

  return (
    <section id="sessions" style={{background:'#F5F5F5', padding:'96px 0'}}>
      <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px'}}>
        <SectionTitle eyebrow="Weekly Schedule" title={"Every day has a focus. \nShow up. Work the plan."} kicker="Each day is dedicated to one focus. Capped at 30 members per session — intimacy is the point." />

        <div style={styles_sg.week}>
          {schedule.map((d, i) => (
            <button key={d.day} onClick={() => setActive(i)} style={{
              ...styles_sg.dayTab,
              ...(i === active ? styles_sg.dayTabActive : {}),
              ...(i === todayIdx && i !== active ? styles_sg.dayTabToday : {})
            }}>
              <span style={styles_sg.dayShort}>{d.short}</span>
              <span style={styles_sg.dayFocus}>{d.focus}</span>
              <span style={styles_sg.daySlots}>{d.slots.length} {d.slots.length === 1 ? 'slot' : 'slots'}</span>
            </button>
          ))}
        </div>

        <div style={styles_sg.panel}>
          <div style={styles_sg.panelHead}>
            <div>
              <div style={styles_sg.panelEyebrow}>{cur.day} · Focus</div>
              <div style={styles_sg.panelTitle}>{cur.focus}</div>
            </div>
            <div style={styles_sg.coachTag}>
              <span style={styles_sg.coachAvatar}>{cur.coach[0]}</span>
              <span><span style={styles_sg.coachLbl}>Lead Coach</span><span style={styles_sg.coachName}>{cur.coach}</span></span>
            </div>
          </div>
          <div style={styles_sg.slots}>
            {cur.slots.map((t, i) => {
              const spots = [12, 6, 22, 0, 14, 8, 18][i % 7];
              const full = spots === 0;
              return (
                <div key={t} style={{...styles_sg.slot, opacity: full ? .55 : 1}}>
                  <div style={styles_sg.time}>{t}</div>
                  <div style={styles_sg.dur}>45 min</div>
                  <div style={styles_sg.bar}><div style={{...styles_sg.barFill, width: `${(spots/30)*100}%`}} /></div>
                  <div style={styles_sg.meta}>
                    <span>{full ? 'Sold Out' : `${spots} / 30 spots`}</span>
                    {!full
                      ? <button onClick={onBook} style={styles_sg.book}>Book →</button>
                      : <span style={styles_sg.waitlist}>Waitlist</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles_sg = {
  week: { display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:8, marginTop:16 },
  dayTab: { background:'#fff', border:'1px solid rgba(17,35,55,.08)', borderRadius:8, padding:'16px 14px 14px', display:'flex', flexDirection:'column', gap:6, textAlign:'left', cursor:'pointer', fontFamily:'inherit', color:'#112337', transition:'all .2s', position:'relative' },
  dayTabActive: { background:'#112337', color:'#fff', borderColor:'#112337', boxShadow:'0 8px 20px rgba(17,35,55,.14)' },
  dayTabToday: { borderColor:'#C60101' },
  dayShort: { fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', opacity:.65 },
  dayFocus: { fontSize:18, fontWeight:800, letterSpacing:'-.01em', textTransform:'uppercase', lineHeight:1.1 },
  daySlots: { fontSize:10, fontWeight:600, letterSpacing:'.08em', textTransform:'uppercase', opacity:.55, marginTop:2 },

  panel: { background:'#fff', borderRadius:10, marginTop:20, padding:28, border:'1px solid rgba(17,35,55,.06)', boxShadow:'0 8px 24px rgba(17,35,55,.06)' },
  panelHead: { display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, marginBottom:24, paddingBottom:20, borderBottom:'1px solid rgba(17,35,55,.06)' },
  panelEyebrow: { fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#C60101', marginBottom:6 },
  panelTitle: { fontSize:36, fontWeight:900, letterSpacing:'-.02em', textTransform:'uppercase', color:'#112337', lineHeight:1 },
  coachTag: { display:'flex', alignItems:'center', gap:12, background:'#F5F5F5', padding:'10px 14px 10px 10px', borderRadius:999 },
  coachAvatar: { width:34, height:34, borderRadius:999, background:'#C60101', color:'#fff', display:'inline-flex', alignItems:'center', justifyContent:'center', fontSize:14, fontWeight:800 },
  coachLbl: { display:'block', fontSize:9, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#686E77', lineHeight:1 },
  coachName: { display:'block', fontSize:14, fontWeight:700, color:'#112337', marginTop:3 },

  slots: { display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:12 },
  slot: { border:'1px solid rgba(17,35,55,.08)', borderRadius:8, padding:'18px 16px', display:'flex', flexDirection:'column', gap:8, background:'#fff' },
  time: { fontSize:22, fontWeight:900, letterSpacing:'-.02em', color:'#112337', lineHeight:1 },
  dur: { fontSize:10, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#686E77' },
  bar: { height:3, background:'rgba(17,35,55,.08)', borderRadius:999, marginTop:4, overflow:'hidden' },
  barFill: { height:'100%', background:'#C60101' },
  meta: { display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', color:'#585E6A' },
  book: { background:'transparent', border:0, color:'#C60101', fontSize:10, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', fontFamily:'inherit', padding:0 },
  waitlist: { color:'#112337', textDecoration:'underline', textUnderlineOffset:3 }
};

window.SessionGrid = SessionGrid;
