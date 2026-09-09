export interface ICours {
  nom: string;
  ecole: string;
  prof: string;
  jours_cours: {
    jour: string;
    date_debut: string;
    date_fin: string;
    heure_debut: string;
    heure_fin: string;
  }[];
  Jours_supp?: {
    date: string;
    heure_debut: string;
    heure_fin: string;
  }[];
}
