# Parcial 1 Gràfics Tardor 2020/2021
## Dificultats a comentar:
### Exercici 1:
L'exercici requereix explícitament que es faci servir el comandament *smoothstep*: Al haver-se treballat principalment amb *step* a les sessions de laboratori, un pot no acabar d'entendre com introduïr els paràmetres que demana *smoothstep*.
  >smoothstep(edge0, edge1, x)
  
  La funció retorna un nombre comprès en el rang [0,1], seguint el nombre x:
  * Si x<=edge0, retornarà 0
  * Si edge0<=x<=edge1, retornarà un nombre comprès entre 0 i 1 suavitzat seguint les corbes de Bezier.
  * Si x>=edge1, retornarà 1
  
  Per al nostre problema, com que el que ens interessa és suavitzar la rotació entre les alçades 1.45 i 1.55 caldrà que posem edge0=1.45, edge1=1.55 i que la x sigui l'alçada dels vèrtexs (d'aquesta manera quan l'alçada sigui inferior a 1.45 retornarà 0, entre les alçades de 1.45 i 1.55 retornarà un nombre entre 0 i 1, i un cop passat 1.55 retornarà 1).
  
### Exercici 2:
La part més difícil d'aquest exercici és el temps. En el sentit que l'exercici en sí consisteix en una barreja d'un exercici complex de textures (*explosion*) amb variacions que l'estudiant no s'espera:
  * La llum varia en el temps, però no seguint una funció sinusoidal, sinó una funció triangular.
  * La graella a treballar no representa la textura final de l'objecte, sinó que representa la propietat difusa de l'objecte.
  
El fet que tot amb el que es demana treballar sigui un *pack* (només hem de calcular la il·luminació, però canviant diferents paràmetres ) impedeix debuggar fàcilment (actualment encara no he aconseguit tenir la 3ª columna completament blanca), comportant una pèrdua de temps important per a l'estudiant, el qual es pot trobar canviant segments de codi que eren correctes perquè no troba l'error.

### Exercici 3:
Per a exercicis com aquest s'hauria de permetre l'ús d'estris d'escriptura als examens, ja que al estar treballant amb trigonometria, pot resultar útil fer-se un dibuix per confirmar que els càlculs que vols fer es representen correctament en les coordenades cartesianes, o per a veure quelcom que no s'ha tingut en compte.
Com a dificultats a comentar:
  * El fet de treballar amb Ray Tracing en un examen quan tan sols s'havia tractat a nivell conceptual és difícil de tragar.
  * Pot resultar un ensurt inicial veure que estas treballant amb més d'un objecte (Fins que veus que estan ben delimitats)
  * És difícil entendre com fer anar una funció amb la que mai s'ha treballat per a resoldre el problema, i encara més si la informació de la funció està dividida entre l'enunciat(*.pdf*) i comentaris en el codi de la funció. Per això fer-se una idea del funcionament que se li ha de donar a la funció de cara a la resolució del problema pot resultar un procés llarg i complex (encara més si s'ha de barrejar amb transformacions trigonomètriques).
  
  #### Resum:
  En general es tracta d'un examen no tan sols llarg (en el qual han allargat el termini d'entrega de 1h20' a 1h40') sinó que també és molt complex, tant perquè hi ha conceptes nous com perquè els conceptes ja coneguts s'han de treballar a fons.
