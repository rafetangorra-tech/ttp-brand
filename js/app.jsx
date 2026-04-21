/* global React, Header, Hero, SectionTitle, SessionGrid, ProgramCallout, ValuesBand, ContactBlock, Footer, BookingModal */
const { useState: useS_app } = React;

function App() {
  const [booking, setBooking] = useS_app(false);
  const openBook = () => setBooking(true);
  return (
    <div className="ttp-root">
      <Header onBook={openBook} />
      <Hero onBook={openBook} />
      <section id="about" style={{padding:'96px 0', background:'#fff'}}>
        <div style={{maxWidth:1280, margin:'0 auto', padding:'0 32px', display:'grid', gridTemplateColumns:'1fr 1.1fr', gap:72, alignItems:'center'}}>
          <div style={{position:'relative'}}>
            <img src="./assets/photography/select-03.jpg" alt="" style={{width:'100%', borderRadius:8, display:'block'}} />
            <div style={{position:'absolute', left:-16, top:-16, background:'#C60101', color:'#fff', padding:'16px 20px', borderRadius:4, fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase'}}>Est. 2018 · Lake Ronkonkoma</div>
          </div>
          <div>
            <SectionTitle eyebrow="About Us" title={"More than a gym. \nA community that disrupts patterns."} kicker="We use fitness as a tool to remind us of not only our physical strength, but also our mental strength. One member at a time — motivate, break limiting beliefs, restore hope." />
            <button onClick={openBook} style={{background:'#C60101', color:'#fff', border:0, padding:'16px 28px', fontSize:13, fontWeight:700, letterSpacing:'.08em', textTransform:'uppercase', cursor:'pointer', borderRadius:2, boxShadow:'0 6px 20px rgba(198,1,1,.28)', fontFamily:'inherit'}}>Come See For Yourself</button>
          </div>
        </div>
      </section>
      <SessionGrid onBook={openBook} />
      <ProgramCallout onBook={openBook} />
      <ValuesBand />
      <ContactBlock />
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
