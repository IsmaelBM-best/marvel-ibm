
const ProgressMovies = () => {

  const metaProduccion = 200;

  const peliculasProducidas = 100;

  const porcentajeCompletado = (peliculasProducidas / metaProduccion) * 100;

  return (
    <div className="movies-target-container" >
      <h2>Progreso de películas producidas</h2>
      <p>Meta: {metaProduccion}</p>
      <p>Producidas: {peliculasProducidas}</p>
      <div className="container-percentage">
        <div className="movies-target">
          <div className="complete-percentage"></div>
        </div>
      </div>
      <p className="percentage">Porcentaje completado: {porcentajeCompletado}%</p>
    </div>
  );
}

export default ProgressMovies;
