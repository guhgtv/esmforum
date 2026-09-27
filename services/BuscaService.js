class BuscaService {
  constructor(repositorio) {
    this.repositorio = repositorio; 
  }

  executar(criterios) {
    if (!criterios.termo || criterios.termo.trim() === '') {
      return this.repositorio.listar_perguntas();
    }
    return this.repositorio.buscar_perguntas_por_termo(criterios.termo);
  }
}

module.exports = BuscaService;