# Introduksjonskurs i Google Analytics

###[Slides](https://docs.google.com/presentation/d/1y6REonZ4J4Jpv8SMphAU2y3_-O_oRz9gOZfFh8AHBRE/edit?usp=sharing)

###[Demo-side](http://fredva.github.io/google-analytics-kurs)

## Teste ut på egen hånd?

Om du leser igjennom kurset på egen hånd, får du størt utbytte om du også kan se på tallene som rapporteres inn til Google Analytics.
Gjør følgende:

- Opprett en konto hos Google Analytics
- Kopier tracking-koden som genereres. Den er på formatet `UA-XXXXXXXX-X`
- Fork dette repoet
- Erstatt tracking-koden på alle HTML-sidene i repoet med koden du har fått. På mac OS kan du bruke følgende terminalsnutt: `sed -i '' -e 's/UA-85449688-1/<din-kode>/g' *.html`
- Gå til `<ditt-brukernavn>.github.io/google-analytics-kurs` for å teste
