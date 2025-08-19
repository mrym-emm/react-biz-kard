export default function Info() {
  return (
    <>
      <header>
        <img src="./images/penkek.png" />
        <section className="info-container">
          <h2>Maryam M.</h2>
          <p className="info-job">Full-Stack Developer</p>
          <small className="info-link">
            <a href="https://mrymmhmdportfolio.vercel.app/" target="_blank">
              mrymmhmdportfolio.vercel.app
            </a>
          </small>
        </section>

        <section className="button-info">
          <a className="button-email" href="#">
            <i class="fa-solid fa-envelope"></i>Email
          </a>
          <a className="button-linkedin" href="#">
            <i class="fa-brands fa-linkedin"></i>LinkedIn
          </a>
        </section>
      </header>
    </>
  );
}
