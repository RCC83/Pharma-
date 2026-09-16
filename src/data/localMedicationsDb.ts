import { MedicationInfo } from "../types";

export const LOCAL_MEDICATIONS_DB: Record<string, MedicationInfo> = {
  "dafalgan": {
    name: "Dafalgan (Paracétamol)",
    description: "Antalgique et antipyrétique de référence utilisé pour soulager les douleurs légères à modérées et diminuer la fièvre.",
    indications: [
      "Douleurs aiguës ou chroniques légères à modérées (maux de tête, douleurs dentaires, courbatures, règles douloureuses)",
      "États fébriles et syndrome grippal",
      "Douleurs articulaires ou musculaires (arthrose)"
    ],
    maxDailyDosage: {
      generalMax: "3 000 mg (3 g) par jour - max 4 g sous surveillance",
      byIndication: [
        {
          indication: "Douleur ou fièvre chez l'adulte et adolescent (> 50 kg)",
          maxDaily: "3 g / 24h (jusqu'à 4 g/24h sur avis médical strict)",
          frequencyOrInterval: "500 mg à 1 000 mg par prise, espacer de 4 à 6 heures minimum",
          notes: "Ne jamais dépasser 1 g par prise ni 3 g par jour en automédication."
        },
        {
          indication: "Enfant (selon le poids corporel)",
          maxDaily: "60 mg/kg/jour répartis en 4 à 6 prises",
          frequencyOrInterval: "10 à 15 mg/kg par prise, toutes les 6 heures",
          notes: "Utiliser la pipette doseuse graduée en kg."
        },
        {
          indication: "Insuffisance rénale ou hépatique légère à modérée",
          maxDaily: "2 000 mg (2 g) / 24h maximum",
          frequencyOrInterval: "Espacer les prises de 8 heures minimum",
          notes: "Avis médical impératif."
        }
      ],
      safetyWarning: "RISQUE MAJEUR DE TOXICITÉ HÉPATIQUE : Tout dépassement de la dose quotidienne de paracétamol peut provoquer une destruction irréversible du foie (nécrose hépatique). Vérifiez impérativement l'absence de paracétamol dans vos autres médicaments (Fervex, Humex, Doliprane, etc.)."
    },
    contraindications: [
      "Allergie connue au paracétamol ou aux excipients",
      "Insuffisance hépatocellulaire sévère (maladie grave du foie)",
      "Phénylcétonurie (pour les formes contenant de l'aspartam)"
    ],
    interactions: [
      "Autres médicaments contenant du paracétamol (risque mortel de surdosage hépatique)",
      "Anticoagulants oraux (AVK comme la warfarine) à doses élevées (> 4 g/j prolongés)",
      "Alcool à forte dose (augmente considérablement l'hépatotoxicité)",
      "Médicaments inducteurs enzymatiques (rifampicine, antiépileptiques)"
    ],
    alternatives: [
      "Doliprane (Paracétamol)",
      "Efferalgan (Paracétamol)",
      "Ibuprofène (Advil, Nurofen) en l'absence de contre-indication digestive ou rénale"
    ],
    warningLevel: "low",
    usageTips: "Prendre de préférence avec un grand verre d'eau. Espacer chaque prise de 4 à 6 heures minimum."
  },
  "doliprane": {
    name: "Doliprane (Paracétamol)",
    description: "Antalgique antipyrétique de premier choix indiqué pour le traitement symptomatique des douleurs et de la fièvre.",
    indications: [
      "Céphalées, migraines légères, douleurs dentaires, états grippaux",
      "Fièvre chez l'adulte et l'enfant",
      "Douleurs rhumatologiques et arthrosiques"
    ],
    maxDailyDosage: {
      generalMax: "3 000 mg (3 g) par jour - max 4 g sous surveillance",
      byIndication: [
        {
          indication: "Adulte et adolescent de plus de 50 kg",
          maxDaily: "3 g par 24h (4 g max uniquement sur ordonnance médicale)",
          frequencyOrInterval: "500 mg à 1 000 mg par prise, intervalle de 4 à 6 heures",
          notes: "Espacer d'au moins 4 heures sans dépasser 3 g/jour sans avis médical."
        },
        {
          indication: "Enfant de 10 à 50 kg",
          maxDaily: "60 mg/kg par jour maximum",
          frequencyOrInterval: "15 mg/kg toutes les 6 heures ou 10 mg/kg toutes les 4 heures",
          notes: "Adapter impérativement selon le poids et non l'âge."
        }
      ],
      safetyWarning: "DANGER SURDOSAGE : Le paracétamol en excès détruit les cellules du foie. Ne jamais associer deux médicaments contenant du paracétamol."
    },
    contraindications: [
      "Insuffisance hépatique sévère",
      "Allergie au paracétamol",
      "Alcoolisme chronique sévère sans avis médical"
    ],
    interactions: [
      "Autres spécialités à base de paracétamol",
      "Résines chélatrices (cholestyramine)",
      "Alcool régulier ou excessif"
    ],
    alternatives: [
      "Dafalgan (Paracétamol)",
      "Efferalgan",
      "Spasfon (en cas de spasmes abdominaux)"
    ],
    warningLevel: "low",
    usageTips: "À prendre avec un verre d'eau. Respecter un intervalle régulier entre les prises."
  },
  "paracetamol": {
    name: "Paracétamol (DCI)",
    description: "Molécule antalgique et antipyrétique de première ligne contre les douleurs et la fièvre.",
    indications: [
      "Douleurs d'intensité légère à modérée",
      "Fièvre et états fébriles"
    ],
    maxDailyDosage: {
      generalMax: "3 000 mg (3 g) par jour (max 4 g/24h sur prescription)",
      byIndication: [
        {
          indication: "Adulte > 50 kg",
          maxDaily: "3 g par jour",
          frequencyOrInterval: "500 mg à 1 g par prise toutes les 4 à 6 heures",
          notes: "Ne pas dépasser 1 g par prise."
        }
      ],
      safetyWarning: "DANGER MORTEL POUR LE FOIE en cas de surdosage (> 4 g/jour chez l'adulte)."
    },
    contraindications: ["Insuffisance hépatique grave", "Allergie au paracétamol"],
    interactions: ["Tout autre médicament à base de paracétamol", "Alcool"],
    alternatives: ["Ibuprofène", "Aspirine"],
    warningLevel: "low",
    usageTips: "Espacer de 4 heures minimum entre deux prises."
  },
  "efferalgan": {
    name: "Efferalgan (Paracétamol)",
    description: "Antalgique et antipyrétique effervescent ou en comprimé pour douleurs et fièvre.",
    indications: [
      "Traitement symptomatique des douleurs d'intensité légère à modérée",
      "États fébriles"
    ],
    maxDailyDosage: {
      generalMax: "3 000 mg (3 g) / 24 heures",
      byIndication: [
        {
          indication: "Adulte (> 50 kg)",
          maxDaily: "3 g par jour",
          frequencyOrInterval: "1 g par prise toutes les 6 à 8 heures",
          notes: "Maximum 1 comprimé effervescent de 1g par prise."
        }
      ],
      safetyWarning: "Attention à la teneur en sodium des comprimés effervescents en cas de régime sans sel. Risque hépatique en cas de dépassement de dose."
    },
    contraindications: [
      "Maladie hépatique grave",
      "Allergie au paracétamol"
    ],
    interactions: [
      "Tout autre produit contenant du paracétamol",
      "Alcool"
    ],
    alternatives: ["Doliprane", "Dafalgan"],
    warningLevel: "low",
    usageTips: "Dissoudre complètement le comprimé dans un verre d'eau."
  },
  "spasfon": {
    name: "Spasfon (Phloroglucinol)",
    description: "Antispasmodique musculotrope indiqué pour soulager les spasmes douloureux digestifs, biliaires, urologiques et gynécologiques.",
    indications: [
      "Douleurs spasmodiques du tube digestif et des voies biliaires",
      "Coliques néphrétiques et spasmes urinaires",
      "Règles douloureuses (dysménorrhées) et contractions utérines de grossesse"
    ],
    maxDailyDosage: {
      generalMax: "6 comprimés par jour (soit 480 mg de phloroglucinol)",
      byIndication: [
        {
          indication: "Spasmes digestifs ou gynécologiques chez l'adulte",
          maxDaily: "6 comprimés par 24 heures",
          frequencyOrInterval: "2 comprimés par prise au moment des crises, à renouveler si besoin",
          notes: "Respecter au minimum 2 heures entre chaque prise."
        },
        {
          indication: "Enfant de plus de 6 ans (Spasfon Lyoc)",
          maxDaily: "2 lyophilisats par 24 heures",
          frequencyOrInterval: "1 lyophilisat oral par prise",
          notes: "Laisser fondre sous la langue ou dissoudre dans un peu d'eau."
        }
      ],
      safetyWarning: "En cas de persistance des spasmes au-delà de quelques jours ou de fièvre associée, consultez immédiatement un médecin."
    },
    contraindications: [
      "Allergie connue au phloroglucinol ou à l'un des excipients",
      "Intolérance au galactose ou déficit en lactase"
    ],
    interactions: [
      "Éviter d'associer avec les antalgiques majeurs de type morphine (effets spasmogènes)"
    ],
    alternatives: [
      "Météospasmyl",
      "Débridat (Trimébutine)",
      "Duspatalin (Mébéverine)"
    ],
    warningLevel: "low",
    usageTips: "Prendre au moment de la crise douloureuse, à avaler avec un verre d'eau."
  },
  "advil": {
    name: "Advil (Ibuprofène)",
    description: "Anti-inflammatoire non stéroïdien (AINS) antalgique et antipyrétique.",
    indications: [
      "Douleurs inflammatoires (tendinite, lombalgie, arthrite)",
      "Règles douloureuses, maux de tête et migraines",
      "Fièvre chez l'adulte et l'enfant"
    ],
    maxDailyDosage: {
      generalMax: "1 200 mg / 24h en automédication (jusqu'à 2 400 mg sur ordonnance)",
      byIndication: [
        {
          indication: "Douleur ou fièvre chez l'adulte (> 40 kg / 12 ans)",
          maxDaily: "1 200 mg par jour (ex: 3 comprimés de 400 mg)",
          frequencyOrInterval: "200 mg à 400 mg par prise, espacer de 6 heures minimum",
          notes: "Durée maximale de 3 jours pour la fièvre, 5 jours pour la douleur."
        }
      ],
      safetyWarning: "RISQUE D'ULCÈRE, D'HÉMORRAGIE DIGESTIVE ET D'INSUFFISANCE RÉNALE : Toujours prendre au cours d'un repas. Interdit formellement dès le début du 6ème mois de grossesse."
    },
    contraindications: [
      "Grossesse à partir du début du 6ème mois (24 semaines)",
      "Antécédent d'ulcère gastrique ou d'hémorragie digestive sous AINS",
      "Insuffisance cardiaque, hépatique ou rénale sévère",
      "Varicelle ou infection bactérienne évolutive"
    ],
    interactions: [
      "Autres anti-inflammatoires (Aspirine, Kétoprofène, Voltarène)",
      "Anticoagulants oraux (risque d'hémorragie massive)",
      "Lithium et Méthotrexate",
      "Corticoïdes par voie orale"
    ],
    alternatives: [
      "Doliprane ou Dafalgan (Paracétamol) si risque digestif ou grossesse",
      "Nurofen (Ibuprofène)"
    ],
    warningLevel: "medium",
    usageTips: "Prendre impérativement au milieu d'un repas pour protéger l'estomac."
  },
  "nurofen": {
    name: "Nurofen (Ibuprofène)",
    description: "Anti-inflammatoire non stéroïdien antalgique pour les maux de tête, règles douloureuses et états grippaux.",
    indications: ["Maux de tête", "Douleurs dentaires", "Courbatures", "Fièvre"],
    maxDailyDosage: {
      generalMax: "1 200 mg par 24 heures (soit 3 comprimés de 400 mg)",
      byIndication: [
        {
          indication: "Adulte et enfant > 12 ans",
          maxDaily: "1 200 mg / 24h",
          frequencyOrInterval: "400 mg par prise toutes les 6 heures",
          notes: "Toujours prendre la dose minimale efficace."
        }
      ],
      safetyWarning: "Ne jamais prendre l'estomac vide. Interdit pendant le 3ème trimestre de grossesse."
    },
    contraindications: ["Ulcère gastrique", "Grossesse > 5 mois", "Insuffisance rénale sévère"],
    interactions: ["Aspirine", "Anticoagulants", "Autres AINS"],
    alternatives: ["Doliprane", "Dafalgan"],
    warningLevel: "medium",
    usageTips: "Prendre au cours d'un repas."
  },
  "ibuprofene": {
    name: "Ibuprofène (Générique)",
    description: "Anti-inflammatoire non stéroïdien pour le traitement des douleurs légères à modérées et de la fièvre.",
    indications: ["Douleurs articulaires", "Maux de tête", "Fièvre", "Douleurs de règles"],
    maxDailyDosage: {
      generalMax: "1 200 mg / 24 heures",
      byIndication: [
        {
          indication: "Adulte",
          maxDaily: "1 200 mg",
          frequencyOrInterval: "200 mg à 400 mg toutes les 6 heures",
          notes: "Maximum 3 jours en cas de fièvre."
        }
      ],
      safetyWarning: "Risque digestif et rénal en cas de surdosage."
    },
    contraindications: ["Ulcère peptique", "Insuffisance cardiaque grave", "Grossesse à partir du 6e mois"],
    interactions: ["Aspirine", "AVK", "Lithium"],
    alternatives: ["Paracétamol"],
    warningLevel: "medium",
    usageTips: "Prendre avec un verre d'eau pendant un repas."
  },
  "amoxicilline": {
    name: "Amoxicilline",
    description: "Antibiotique bactéricide de la famille des bêtalactamines (pénicillines) pour infections bactériennes.",
    indications: [
      "Infections respiratoires hautes et basses (angine bactérienne, otite, sinusite, pneumonie)",
      "Infections urinaires et dentaires",
      "Éradication d'Helicobacter pylori (associé)"
    ],
    maxDailyDosage: {
      generalMax: "2 g à 3 g par jour chez l'adulte",
      byIndication: [
        {
          indication: "Infections courantes chez l'adulte",
          maxDaily: "2 g à 3 g par 24h",
          frequencyOrInterval: "1 g toutes les 8 à 12 heures",
          notes: "Poursuivre la durée prescrite même si les symptômes disparaissent."
        }
      ],
      safetyWarning: "Inutile contre les virus (grippe, rhume). Ne jamais réutiliser sans avis médical. Risque de choc anaphylactique chez les allergiques aux pénicillines."
    },
    contraindications: [
      "Allergie aux pénicillines ou aux céphalosporines",
      "Mononucléose infectieuse (risque d'éruption cutanée majeure)"
    ],
    interactions: [
      "Méthotrexate",
      "Allopurinol (augmente le risque de réactions cutanées)"
    ],
    alternatives: [
      "Augmentin (Amoxicilline + Acide clavulanique)",
      "Macrolides (Azithromycine, Clarithromycine) en cas d'allergie à la pénicilline"
    ],
    warningLevel: "medium",
    usageTips: "Prendre au début des repas pour une meilleure absorption et tolérance digestive."
  },
  "gaviscon": {
    name: "Gaviscon (Alginate de sodium / Bicarbonate)",
    description: "Anti-reflux formant une barrière protectrice surnageant le contenu gastrique pour prévenir les brûlures d'estomac.",
    indications: ["Reflux gastro-œsophagien (RGO)", "Brûlures d'estomac", "Aigreurs et remontées acides"],
    maxDailyDosage: {
      generalMax: "8 sachets ou 16 cuillères-mesures par 24 heures",
      byIndication: [
        {
          indication: "Adulte et enfant > 12 ans",
          maxDaily: "4 prises par jour",
          frequencyOrInterval: "1 sachet après les 3 principaux repas et au coucher",
          notes: "À prendre après les repas et non avant."
        }
      ],
      safetyWarning: "Contient du sodium. Espacer impérativement de 2 heures la prise de tout autre médicament."
    },
    contraindications: ["Allergie connue aux composants"],
    interactions: ["Diminue l'absorption de la plupart des autres médicaments (respecter 2h d'écart)"],
    alternatives: ["Rennie", "Maalox", "Inexium"],
    warningLevel: "low",
    usageTips: "Bien malaxer le sachet avant ouverture. Prendre après le repas."
  },
  "smecta": {
    name: "Smecta (Diosmectite)",
    description: "Pansement digestif et protecteur de la muqueuse gastro-intestinale utilisé en cas de diarrhée aiguë.",
    indications: ["Diarrhée aiguë chez l'adulte et l'enfant de plus de 2 ans", "Douleurs liées aux affections œso-gastro-duodénales"],
    maxDailyDosage: {
      generalMax: "6 sachets par jour chez l'adulte en début d'épisode",
      byIndication: [
        {
          indication: "Diarrhée aiguë chez l'adulte",
          maxDaily: "6 sachets / 24h les premiers jours puis 3 sachets / 24h",
          frequencyOrInterval: "1 à 2 sachets par prise délayés dans l'eau",
          notes: "À associer impérativement à une réhydratation orale."
        }
      ],
      safetyWarning: "Déconseillé chez les nourrissons et enfants de moins de 2 ans en raison de la présence possible d'infimes traces de plomb."
    },
    contraindications: ["Enfants de moins de 2 ans", "Femmes enceintes ou allaitantes par précaution"],
    interactions: ["Adsorbe les autres médicaments : espacer les prises d'au moins 2 heures"],
    alternatives: ["Imodium (Lopéramide)", "Tiorfan (Racécadotril)"],
    warningLevel: "low",
    usageTips: "Prendre à distance des repas et des autres médicaments."
  },
  "aerius": {
    name: "Aerius (Desloratadine)",
    description: "Antihistaminique de 2ème génération non sédatif pour le traitement des rhinites allergiques et de l'urticaire.",
    indications: ["Rhinite allergique saisonnière (rhume des foins)", "Urticaire chronique idiopathique"],
    maxDailyDosage: {
      generalMax: "1 comprimé de 5 mg par 24 heures",
      byIndication: [
        {
          indication: "Adulte et adolescent de plus de 12 ans",
          maxDaily: "5 mg / 24 heures",
          frequencyOrInterval: "1 comprimé une fois par jour",
          notes: "Inutile d'augmenter la dose en cas d'inefficacité sans avis médical."
        }
      ],
      safetyWarning: "Consulter un médecin si les symptômes persistent au-delà de quelques semaines."
    },
    contraindications: ["Hypersensibilité à la desloratadine ou à la loratadine"],
    interactions: ["Alcool (bien que l'effet sédatif soit rare)"],
    alternatives: ["Zyrtec (Cétirizine)", "Claritine (Loratadine)", "Kestin (Ebastine)"],
    warningLevel: "low",
    usageTips: "Prendre de préférence le matin ou le soir avec un verre d'eau."
  },
  "ventoline": {
    name: "Ventoline (Salbutamol)",
    description: "Bronchodilatateur d'action rapide et de courte durée utilisé en traitement d'urgence des crises d'asthme.",
    indications: ["Crise d'asthme aiguë", "Gêne respiratoire ou bronchospasme", "Prévention de l'asthme d'effort"],
    maxDailyDosage: {
      generalMax: "8 à 16 bouffées par 24 heures (selon avis médical)",
      byIndication: [
        {
          indication: "Traitement de la crise d'asthme",
          maxDaily: "1 à 2 bouffées par prise, renouvelable après quelques minutes si besoin",
          frequencyOrInterval: "Max 4 à 8 bouffées par crise sans aide médicale d'urgence",
          notes: "Si la crise ne cède pas après 6 à 8 bouffées, appeler immédiatement le 15 (Samu)."
        },
        {
          indication: "Prévention de l'asthme d'effort",
          maxDaily: "1 à 2 bouffées",
          frequencyOrInterval: "15 minutes avant l'exercice",
          notes: "Usage ponctuel."
        }
      ],
      safetyWarning: "URGENCE VITALE : Une consommation inhabituellement élevée ou croissante de Ventoline traduit une aggravation de l'asthme nécessitant une réévaluation médicale immédiate."
    },
    contraindications: ["Allergie au salbutamol ou aux excipients"],
    interactions: ["Bêta-bloquants (y compris en collyres pour les yeux qui annulent l'effet de la Ventoline et aggravent l'asthme)"],
    alternatives: ["Bricanyl (Terbutaline)"],
    warningLevel: "medium",
    usageTips: "Bien agiter l'aérosol. Expirer à fond, puis inspirer profondément tout en déclenchant la bouffée."
  },
  "aspirine": {
    name: "Aspirine (Acide acétylsalicylique)",
    description: "Antalgique, antipyrétique et anti-inflammatoire à forte dose, antiagrégant plaquettaire à faible dose.",
    indications: ["Douleurs d'intensité légère à modérée", "Fièvre chez l'adulte", "Affections rhumatismales inflammatoires"],
    maxDailyDosage: {
      generalMax: "3 000 mg (3 g) / 24h chez l'adulte (max 2 g chez le sujet âgé)",
      byIndication: [
        {
          indication: "Douleur et fièvre chez l'adulte (> 50 kg)",
          maxDaily: "3 g par jour",
          frequencyOrInterval: "500 mg à 1 g par prise, espacer de 4 à 6 heures minimum",
          notes: "Ne pas administrer aux enfants en cas de maladie virale (Syndrome de Reye)."
        }
      ],
      safetyWarning: "RISQUE D'HÉMORRAGIE GRAVE ET D'ULCÈRE : L'aspirine fluidifie le sang. Interdite formellement à partir du 6ème mois de grossesse et chez l'enfant fébrile (risque mortel de syndrome de Reye)."
    },
    contraindications: ["Ulcère gastroduodénal", "Grossesse à partir du 6ème mois", "Maladies hémorragiques", "Enfants < 16 ans lors d'infections virales"],
    interactions: ["Anticoagulants oraux", "Autres anti-inflammatoires (AINS)", "Méthotrexate"],
    alternatives: ["Paracétamol (Doliprane, Dafalgan)"],
    warningLevel: "medium",
    usageTips: "Prendre impérativement au cours ou à la fin d'un repas avec un grand verre d'eau."
  },
  "inexium": {
    name: "Inexium (Ésoméprazole)",
    description: "Inhibiteur de la pompe à protons (IPP) qui réduit fortement la sécrétion d'acide par l'estomac.",
    indications: ["Reflux gastro-œsophagien (RGO)", "Ulcère gastroduodénal", "Protection gastrique sous AINS"],
    maxDailyDosage: {
      generalMax: "40 mg par 24 heures (20 à 40 mg selon indication)",
      byIndication: [
        {
          indication: "RGO et œsophagite érosive par reflux",
          maxDaily: "40 mg une fois par jour pendant 4 semaines",
          frequencyOrInterval: "1 prise quotidienne le matin",
          notes: "Avaler sans croquer ni écraser le comprimé."
        },
        {
          indication: "Brûlures d'estomac simples",
          maxDaily: "20 mg par jour",
          frequencyOrInterval: "1 comprimé le matin",
          notes: "Automédication limitée à 14 jours maximum sans avis médical."
        }
      ],
      safetyWarning: "Ne pas prolonger le traitement sans avis médical régulier en raison du risque de malabsorption de minéraux (magnésium, calcium, vitamine B12) et de fractures osseuses au long cours."
    },
    contraindications: ["Allergie aux inhibiteurs de la pompe à protons", "Traitement concomitant par le nelfinavir"],
    interactions: ["Clopidogrel (diminution d'efficacité)", "Méthotrexate", "Atazanavir"],
    alternatives: ["Mopral (Oméprazole)", "Pariet (Rabéprazole)", "Gaviscon (action mécanique d'appoint)"],
    warningLevel: "low",
    usageTips: "Prendre de préférence le matin à jeun 30 minutes avant le petit-déjeuner."
  },
  "imodium": {
    name: "Imodium (Lopéramide)",
    description: "Ralentisseur du transit intestinal indiqué dans le traitement symptomatique des diarrhées aiguës et chroniques.",
    indications: ["Diarrhée aiguë passagère chez l'adulte et l'enfant de plus de 15 ans", "Diarrhée du voyageur (turista)"],
    maxDailyDosage: {
      generalMax: "8 gélules (16 mg) par 24 heures chez l'adulte",
      byIndication: [
        {
          indication: "Diarrhée aiguë chez l'adulte",
          maxDaily: "8 gélules par 24h",
          frequencyOrInterval: "2 gélules d'emblée, puis 1 gélule après chaque selle liquide non moulée",
          notes: "Arrêter le traitement dès que les selles redeviennent moulées."
        }
      ],
      safetyWarning: "NE JAMAIS PRENDRE EN CAS DE DIARRHÉE GLÉRO-SANGLANTE OU DE FIÈVRE ÉLEVÉE (risque d'occlusion et de mégacôlon toxique). Ne pas dépasser 48h sans avis médical."
    },
    contraindications: ["Poussée de colite ulcéreuse ou maladie de Crohn", "Diarrhées infectieuses invasives (salmonellose, shigellose)", "Enfant de moins de 15 ans (forme adulte)"],
    interactions: ["Quinidine, ritonavir, kétoconazole (augmentation des concentrations de lopéramide)"],
    alternatives: ["Tiorfan (Racécadotril)", "Smecta (Diosmectite)"],
    warningLevel: "low",
    usageTips: "Boire abondamment des boissons salées et sucrées pour compenser les pertes en eau et électrolytes."
  }
};
