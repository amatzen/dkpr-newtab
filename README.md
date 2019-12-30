# New Tab Page
Entry til Danske Programmørers nytårskonkurrence. Siden kan ses live [her](https://dkpr.dev001.projects.amatzen.com/).

## Kommentar
- Uret opdateres vha. moment.js og lokal computer tid.
- Kalenderen er baseret på iCal fra Google Kalender (hvilket grundet CORS, jeg ikke direkte kunne lave et AJAX call til og derfor kører den igennem en php-fil, der blot sender informationen videre)
- Nyheden skaffes gennem NewsAPI
- Vejret er widget baseret og er baseret på Dark Sky
- Baggrunden hentes fra Unsplash Source API

### Anvendte teknologier
Jeg har benyttet mig af følgende for at skabe siden:

- Vue.js - komponentorienteret frontend framework
- Parcel.js - en _bundler_, der bikser det hele sammen.
- Axios - til at lave Ajax-scripts
- Moment.js - til at formattere dato og tidspunkter
- iCal.js - til at parse ICS filen til et JS array
- Sass - præference ved CSS styling