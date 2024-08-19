export const translateSpecies = (species) => {
    if(species === 'human'){
      return 'Humano';
    } else if (species === 'ghost'){
      return 'Fantasma';
    } else if (species === 'half-giant'){
      return 'Medio gigante';
    } else if (species === 'werewolf'){
      return 'Hombre lobo';
    } else {
      return 'Sin información';
    }
  }