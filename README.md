# New Tab Page
Entry til Danske Programmørers nytårskonkurrence.

Kommentar:
- Uret opdateres vha. moment.js og lokal computer tid.
- Kalenderen er baseret på iCal fra Google Kalender (hvilket grundet CORS, jeg ikke direkte kunne lave et AJAX call til og derfor kører den igennem en php-fil, der blot sender informationen videre)
- Nyheden skaffes gennem NewsAPI
- Vejret er widget baseret og er baseret på Dark Sky
- Baggrunden hentes fra Unsplash Source API