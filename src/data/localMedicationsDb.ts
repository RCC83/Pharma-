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
  },
  "smecta": {
    name: "Smecta (Diosmectite)",
    description: "Pansement digestif naturel à base d'argile purifiée protégeant la muqueuse gastro-intestinale.",
    indications: ["Traitement symptomatique de la diarrhée aiguë chez l'adulte et l'enfant", "Douleurs liées aux affections œsogastroduodénales et coliques"],
    maxDailyDosage: {
      generalMax: "6 sachets par jour chez l'adulte en début d'épisode aigu",
      byIndication: [
        {
          indication: "Diarrhée aiguë chez l'adulte",
          maxDaily: "6 sachets / 24h pendant les premiers jours (puis 3 sachets / 24h)",
          frequencyOrInterval: "1 sachet délayé dans un demi-verre d'eau, 3 fois par jour (jusqu'à 6)",
          notes: "Prendre à distance des repas et des autres médicaments."
        },
        {
          indication: "Enfant à partir de 2 ans",
          maxDaily: "4 sachets par jour pendant 3 jours max",
          frequencyOrInterval: "Répartir dans un biberon ou compote",
          notes: "Contre-indiqué chez les nourrissons et enfants de moins de 2 ans (traces potentielles de plomb naturel)."
        }
      ],
      safetyWarning: "ESPACEMENT OBLIGATOIRE : Le Smecta absorbe les autres médicaments et annule leur effet. Prendre tout autre médicament 2 heures avant ou 2 heures après le Smecta."
    },
    contraindications: ["Nourrissons et enfants de moins de 2 ans", "Femmes enceintes ou allaitantes (par mesure de précaution)", "Allergie à la diosmectite"],
    interactions: ["Diminue considérablement l'absorption de TOUS les autres médicaments pris simultanément"],
    alternatives: ["Tiorfan (Racécadotril)", "Imodium (Lopéramide)"],
    warningLevel: "low",
    usageTips: "Espacer la prise de tout autre médicament d'au moins 2 heures."
  },
  "gaviscon": {
    name: "Gaviscon (Alginate de sodium / Bicarbonate de sodium)",
    description: "Anti-reflux gastro-œsophagien formant une barrière protectrice flottant sur le contenu de l'estomac.",
    indications: ["Brûlures d'estomac", "Remontées acides (RGO)", "Pyrosis et aigreurs"],
    maxDailyDosage: {
      generalMax: "8 sachets ou 16 cuillères à café (80 ml) par 24h chez l'adulte",
      byIndication: [
        {
          indication: "Brûlures d'estomac et reflux après les repas",
          maxDaily: "4 prises par jour (max 8 sachets)",
          frequencyOrInterval: "1 sachet après les 3 repas principaux et 1 sachet au coucher",
          notes: "Prendre immédiatement après les repas."
        }
      ],
      safetyWarning: "Teneur élevée en sodium (sel) : vigilance chez les personnes suivant un régime sans sel ou souffrant d'insuffisance cardiaque sévère."
    },
    contraindications: ["Allergie connue aux principes actifs"],
    interactions: ["Espacer d'au moins 2 heures la prise d'antibiotiques (fluoroquinolones, tétracyclines) et de fer"],
    alternatives: ["Rennie", "Maalox", "Inexium / Oméprazole"],
    warningLevel: "low",
    usageTips: "Bien malaxer le sachet avant ouverture. Prendre après les repas et au coucher."
  },
  "augmentin": {
    name: "Augmentin (Amoxicilline / Acide clavulanique)",
    description: "Antibiotique à large spectre associant une pénicilline à un inhibiteur de bêta-lactamases pour surmonter les résistances bactériennes.",
    indications: ["Infections ORL (otites moyennes aiguës, sinusites)", "Infections respiratoires (bronchites, pneumonies)", "Infections urinaires et dentaires complexes"],
    maxDailyDosage: {
      generalMax: "3 g d'amoxicilline par 24h chez l'adulte",
      byIndication: [
        {
          indication: "Infections courantes chez l'adulte (> 40 kg)",
          maxDaily: "2 à 3 g d'amoxicilline / jour (soit 2 à 3 comprimés 1g/125mg par 24h)",
          frequencyOrInterval: "1 comprimé matin et soir (ou matin, midi et soir) au début des repas",
          notes: "Toujours terminer la durée prescrite même si les symptômes disparaissent."
        }
      ],
      safetyWarning: "RISQUE D'HÉPATITE MÉDICAMENTEUSE ET D'ALLERGIE GRAVE : Prendre impérativement au début d'un repas pour réduire les intolérances digestives et diarrhées. Interdit en cas d'antécédent de jaunisse liée à l'amoxicilline."
    },
    contraindications: ["Allergie aux pénicillines ou céphalosporines", "Antécédent d'ictère ou d'hépatite liée à l'amoxicilline/acide clavulanique"],
    interactions: ["Méthotrexate (toxicité accrue)", "Anticoagulants oraux (contrôle INR nécessaire)"],
    alternatives: ["Josamycine ou Clarithromycine (macrolides) en cas d'allergie avérée à la pénicilline"],
    warningLevel: "high",
    usageTips: "À prendre impérativement au début des repas pour une meilleure tolérance digestive."
  },
  "solupred": {
    name: "Solupred (Prednisolone)",
    description: "Corticoïde de synthèse puissant anti-inflammatoire et immunosuppresseur.",
    indications: ["Affections inflammatoires sévères (ORL, pulmonaires, rhumatologiques)", "Crises d'asthme aiguës", "Réactions allergiques sévères"],
    maxDailyDosage: {
      generalMax: "Variable selon prescription stricte (usuellement 0,5 à 1 mg/kg/jour en cure courte)",
      byIndication: [
        {
          indication: "Traitement d'attaque court (3 à 7 jours)",
          maxDaily: "40 mg à 60 mg par 24h chez l'adulte",
          frequencyOrInterval: "Prise unique le matin au cours du petit-déjeuner",
          notes: "Ne pas prolonger sans avis médical."
        }
      ],
      safetyWarning: "NE JAMAIS PRENDRE EN CAS D'INFECTION NON CONTRÔLÉE : La cortisone diminue les défenses immunitaires. Prendre toujours le matin pour respecter le rythme hormonal naturel et éviter l'insomnie."
    },
    contraindications: ["Infections virales en évolution (hépatite, herpès, varicelle)", "États infectieux non contrôlés", "Psychose non contrôlée"],
    interactions: ["Vaccins vivants atténués (formellement contre-indiqués)", "Médicaments torsadogènes", "AINS (risque majeur d'ulcère gastrique)"],
    alternatives: ["Célestène (Bétaméthasone)", "Cortancyl (Prednisone)"],
    warningLevel: "high",
    usageTips: "Prendre impérativement le matin au cours du petit-déjeuner pour éviter les insomnies et l'irritation de l'estomac."
  },
  "tramadol": {
    name: "Tramadol (Topalgic, Ixprim, Contramal)",
    description: "Antalgique opioïde de palier 2 agissant sur le système nerveux central pour soulager les douleurs modérées à intenses.",
    indications: ["Douleurs aiguës ou chroniques modérées à intenses ne répondant pas aux antalgiques de palier 1"],
    maxDailyDosage: {
      generalMax: "400 mg par 24 heures chez l'adulte (max 300 mg chez le sujet âgé)",
      byIndication: [
        {
          indication: "Douleur aiguë chez l'adulte",
          maxDaily: "400 mg / 24h",
          frequencyOrInterval: "50 à 100 mg par prise, espacer de 4 à 6 heures minimum",
          notes: "Arrêt progressif recommandé pour éviter le syndrome de sevrage."
        }
      ],
      safetyWarning: "RISQUE MAJEUR D'ADDICTION, DE DÉPENDANCE ET DE DÉPRESSION RESPIRATOIRE : Ne jamais combiner avec de l'alcool ou d'autres dépresseurs du système nerveux. Respecter la durée maximale prescrite (12 semaines)."
    },
    contraindications: ["Insuffisance respiratoire sévère", "Épilepsie non contrôlée", "Association avec les IMAO", "Enfant de moins de 15 ans", "Allaitement"],
    interactions: ["Antidépresseurs sérotoninergiques (risque de syndrome sérotoninergique mortel)", "Alcool et benzodiazépines (risque de coma et décès)"],
    alternatives: ["Paracétamol codéiné", "Lamaline"],
    warningLevel: "high",
    usageTips: "Ne pas conduire de véhicule en début de traitement. Arrêter progressivement les doses."
  },
  "aerius": {
    name: "Aerius (Desloratadine)",
    description: "Antihistaminique H1 non sédatif de dernière génération pour le traitement des allergies.",
    indications: ["Rhinite allergique saisonnière ou perannuelle (rhume des foins)", "Urticaire chronique idiopathique"],
    maxDailyDosage: {
      generalMax: "5 mg (1 comprimé) par 24 heures chez l'adulte et l'enfant > 12 ans",
      byIndication: [
        {
          indication: "Rhinite allergique et urticaire chez l'adulte",
          maxDaily: "5 mg (1 comprimé) par jour",
          frequencyOrInterval: "1 prise unique quotidienne avec ou sans repas",
          notes: "Inutile et sans bénéfice de doubler la dose."
        }
      ],
      safetyWarning: "Respecter la dose d'un seul comprimé par jour. Bien que non sédatif, une somnolence paradoxale peut survenir chez certaines personnes sensibles."
    },
    contraindications: ["Allergie à la desloratadine ou à la loratadine", "Insuffisance rénale sévère (adapter la posologie)"],
    interactions: ["Alcool (potentialisation modérée de la somnolence)"],
    alternatives: ["Cétirizine (Zyrtec)", "Lévocétirizine (Xyzall)", "Loratadine (Clarityne)"],
    warningLevel: "low",
    usageTips: "Peut être pris à tout moment de la journée, avec ou sans aliments."
  }
};

// Table de correspondance d'alias et noms génériques pour accès instantané (0 ms)
export const MEDICATION_ALIASES: Record<string, string> = {
  // Paracétamol & marques
  "paracetamol": "doliprane",
  "paracétamol": "doliprane",
  "doli": "doliprane",
  "doliprane": "doliprane",
  "dafalgan": "dafalgan",
  "efferalgan": "efferalgan",
  "perfalgan": "doliprane",

  // Ibuprofène & marques
  "ibuprofene": "advil",
  "ibuprofène": "advil",
  "advil": "advil",
  "nurofen": "nurofen",
  "antarene": "advil",
  "antarène": "advil",

  // Spasfon
  "spasfon": "spasfon",
  "phloroglucinol": "spasfon",

  // Amoxicilline
  "amoxicilline": "amoxicilline",
  "amox": "amoxicilline",
  "clamoxyl": "amoxicilline",

  // Augmentin
  "augmentin": "augmentin",
  "amoxicilline acide clavulanique": "augmentin",

  // Ventoline
  "ventoline": "ventoline",
  "salbutamol": "ventoline",
  "bricanyl": "ventoline",

  // Aspirine
  "aspirine": "aspirine",
  "aspegic": "aspirine",
  "aspégic": "aspirine",
  "kardegic": "aspirine",
  "kardégic": "aspirine",
  "acide acetylsalicylique": "aspirine",
  "acide acétylsalicylique": "aspirine",

  // Inexium / IPP
  "inexium": "inexium",
  "esomeprazole": "inexium",
  "ésoméprazole": "inexium",
  "mopral": "inexium",
  "omeprazole": "inexium",
  "oméprazole": "inexium",

  // Imodium / Transit
  "imodium": "imodium",
  "loperamide": "imodium",
  "lopéramide": "imodium",

  // Smecta
  "smecta": "smecta",
  "diosmectite": "smecta",

  // Gaviscon
  "gaviscon": "gaviscon",
  "alginate": "gaviscon",

  // Solupred / Corticoïdes
  "solupred": "solupred",
  "prednisolone": "solupred",
  "cortisone": "solupred",
  "cortancyl": "solupred",
  "celestene": "solupred",
  "célestène": "solupred",

  // Tramadol
  "tramadol": "tramadol",
  "topalgic": "tramadol",
  "ixprim": "tramadol",
  "contramal": "tramadol",

  // Allergies
  "aerius": "aerius",
  "desloratadine": "aerius",
  "zyrtec": "aerius",
  "cetirizine": "aerius",
  "cétirizine": "aerius"
};

/**
 * Recherche instantanée ultra-rapide en local (0 ms)
 */
export function findLocalMedication(rawQuery: string): MedicationInfo | null {
  if (!rawQuery) return null;
  const clean = rawQuery
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .trim();

  if (!clean) return null;

  // 1. Alias direct sur toute la chaîne
  if (MEDICATION_ALIASES[clean] && LOCAL_MEDICATIONS_DB[MEDICATION_ALIASES[clean]]) {
    return LOCAL_MEDICATIONS_DB[MEDICATION_ALIASES[clean]];
  }

  // 2. Recherche par mot-clé (ex: "doliprane 1000mg" -> mot "doliprane")
  const tokens = clean.split(/\s+/).filter(t => t.length >= 3);
  for (const token of tokens) {
    if (MEDICATION_ALIASES[token] && LOCAL_MEDICATIONS_DB[MEDICATION_ALIASES[token]]) {
      return LOCAL_MEDICATIONS_DB[MEDICATION_ALIASES[token]];
    }
  }

  // 3. Clé directe dans LOCAL_MEDICATIONS_DB
  for (const [key, data] of Object.entries(LOCAL_MEDICATIONS_DB)) {
    const cleanKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (clean.includes(cleanKey) || cleanKey.includes(clean)) {
      return data;
    }
    for (const token of tokens) {
      if (cleanKey.includes(token) || token.includes(cleanKey)) {
        return data;
      }
    }
  }

  return null;
}
