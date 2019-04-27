const testJson = {
  kanaal: "INTERNET",
  naam: "zorg/standaard",
  aanvraagid: "",
  aanbodid: "sJ3gLEh0eamci/6eWJO/Hg",
  masterid: "89d8f48f-87d1-42f4-8adf-e48f127e316a",
  products: [
    {
      verzekeringstype: "zorg",
      nulltest: null,
      undefinedtest: undefined,
      productgegevens: [
        {
          naam: "ingangsdatum",
          configuratie: {
            defaultwaarde: "01-11-2019",
            aanpasbaar: true,
            zichtbaar: true
          },
          waardebereik: {
            naam: "ingangsdatum",
            items: []
          },
          teksten: {
            naam: "ingangsdatum",
            items: [
              {
                naam: "label",
                value: "Ingangsdatum"
              },
              {
                naam: "infoTitel",
                value: "Ingangsdatum"
              },
              {
                naam: "infoTekst",
                value:
                  "Is de ingangsdatum 1 januari? Dan zeggen wij je huidige zorgverzekering voor je op. Heb je zelf je zorgverzekering al opgezegd? Dan is aanmelden mogelijk tot 1 februari. Je verzekering gaat wel in per 1 januari."
              },
              {
                naam: "placeholder",
                value: "dd-mm-jjjj"
              }
            ]
          }
        },

        {
          naam: "verzekerde.0.dekking.aanvullend",
          configuratie: {
            defaultwaarde: "GEEN",
            aanpasbaar: true,
            zichtbaar: true
          },
          waardebereik: {
            naam: "verzekerde.dekking.aanvullend",
            items: ["", "OAV11", "OAV21", "OAV31", "OAVST", "OZOR", "GEEN"]
          },
          teksten: {
            naam: "verzekerde.dekking.aanvullend",
            items: [
              {
                naam: "header",
                value: "Aanvullende verzekering"
              },
              {
                naam: "intro",
                value:
                  "Met 90 jaar ervaring als zorgverzekeraar past OHRA de aanvullende pakketten helemaal op jouw persoonlijke behoeften aan. Daarom weet je zeker dat je bij OHRA goed zit en een betrouwbare keuze is voor jou en je gezin."
              },
              {
                naam: "rowLabels.cell1",
                value: "Spoedeisende medische zorg buitenland (wereld)"
              },
              {
                naam: "rowLabels.cell2",
                value: "Fysio- / oefentherapie behandelingen"
              },
              {
                naam: "rowLabels.cell3",
                value: "Alternatieve geneeswijzen"
              },
              {
                naam: "rowLabels.cell4",
                value: "Brillen, contactlenzen"
              },
              {
                naam: "rowLabels.cell5",
                value: "Orthodontie tot 18 jaar"
              },
              {
                naam: "rowLabels.cell6",
                value: ""
              },
              {
                naam: "oavst.title",
                value: "Sterk"
              },
              {
                naam: "oavst.cell1",
                value: "Volledig"
              },
              {
                naam: "oavst.cell2",
                value: "9"
              },
              {
                naam: "oavst.cell3",
                value: "x"
              },
              {
                naam: "oavst.cell4",
                value: "x"
              },
              {
                naam: "oavst.cell5",
                value: "x"
              },
              {
                naam: "oavst.cell6",
                value: ""
              },
              {
                naam: "oav11.title",
                value: "Aanvullend"
              },
              {
                naam: "oav11.cell1",
                value: "Volledig"
              },
              {
                naam: "oav11.cell2",
                value: "9"
              },
              {
                naam: "oav11.cell3",
                value: "€ 250,- max. € 45,- per dag"
              },
              {
                naam: "oav11.cell4",
                value: "x"
              },
              {
                naam: "oav11.cell5",
                value: "x"
              },
              {
                naam: "oav11.cell6",
                value: ""
              },
              {
                naam: "oav21.title",
                value: "Extra aanvullend"
              },
              {
                naam: "oav21.cell1",
                value: "Volledig"
              },
              {
                naam: "oav21.cell2",
                value: "9"
              },
              {
                naam: "oav21.cell3",
                value: "€ 500,- max. € 45,- per dag"
              },
              {
                naam: "oav21.cell4",
                value: "€ 50,- per 2 jaar"
              },
              {
                naam: "oav21.cell5",
                value: "€ 1.000,-"
              },
              {
                naam: "oav21.cell6",
                value: ""
              },
              {
                naam: "oav31.title",
                value: "Uitgebreid"
              },
              {
                naam: "oav31.cell1",
                value: "Volledig"
              },
              {
                naam: "oav31.cell2",
                value: "18"
              },
              {
                naam: "oav31.cell3",
                value: "€ 750,- max. € 45,- per dag"
              },
              {
                naam: "oav31.cell4",
                value: "€ 75,- per 2 jaar"
              },
              {
                naam: "oav31.cell5",
                value: "€ 2.000,-"
              },
              {
                naam: "oav31.cell6",
                value: ""
              },
              {
                naam: "ozor.header",
                value: "Neem je zorgverzekering mee op reis"
              },
              {
                naam: "ozor.intro",
                value:
                  "Met deze module wordt spoedeisende zorg in het buitenland volledig vergoed. Zo ga je met een goed gevoel op vakantie."
              }
            ]
          }
        }
      ]
    }
  ]
};

const test = {
  naam: "distributiepartner",
  configuratie: {
    defaultwaarde: "",
    aanpasbaar: false,
    zichtbaar: false
  },
  waardebereik: {
    naam: "distributiepartner",
    items: []
  },
  teksten: {
    naam: "distributiepartner",
    items: [
      {
        naam: "label",
        value: "Distributiepartner"
      },
      {
        naam: "placeholder",
        value: ""
      }
    ]
  }
};

export default testJson;
