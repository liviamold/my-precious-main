const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-min rounded-xl ">
      <div className="hero-content flex-col lg:flex-row ">
        <img src="/HeroImage.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Pandora´s Box News!</h1>
          <p className="py-6">
            NOVIDADE! Nos próximos dias, teremos uma nova versão das figuras de
            1982. Até 1986, a empresa lançou 5 séries de figuras de ação, com 5
            figuras em cada série.
          </p>
          <button className="btn btn-primary">
            CLique para ver a coleção de 1986
          </button>
        </div>
      </div>
    </div>
  )
}
export default Hero
