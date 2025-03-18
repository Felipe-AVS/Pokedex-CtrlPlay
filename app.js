// Função para buscar Pokémon por nome
const buscarPokemonPorNome = async (nome) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }
      const pokemon = await response.json();
      console.log(`${pokemon.name}`);
      } catch (error) {
      console.error('Erro ao buscar Pokémon por nome:', error.message);
    }
  };
  
  // Função para buscar Pokémon por ID
  const buscarPokemonPorId = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }
      const pokemon = await response.json();
      console.log(`${pokemon.name}`);
     } catch (error) {
      console.error('Erro ao buscar Pokémon por ID:', error.message);
    }
  };
  
  // Exemplo de uso:
  // buscarPokemonPorNome('pikachu'); // Usar o nome do Pokémon
  // buscarPokemonPorId(25); // Usar o ID da Pokédex
  