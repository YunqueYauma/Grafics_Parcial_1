# Parcial 1 Gràfics Tardor 2020/2021
## Dificultats a comentar:
### Exercici 1:
L'exercici requereix explícitament que es faci servir el comandament 'smoothstep': Al haver-se treballat principalment amb 'step' a les sessions de laboratori, un pot no acabar d'entendre com introduïr els paràmetres que demana 'smoothstep'.
  >smoothstep(edge0, edge1, x)
  La funció retorna un nombre comprès en el rang [0,1], seguint el nombre x:
  * Si x<=edge0, retornarà 0
  * Si edge0<=x<=edge1, retornarà un nombre comprès entre 0 i 1 suavitzat seguint les corbes de Bezier.
  * Si x>=edge1, retornarà 1
  Per al nostre problema, com que el que ens interessa és suavitzar la rotació entre les alçades 1.45 i 1.55 caldrà que posem edge0=1.45, edge1=1.55 i que la x sigui l'alçada dels vèrtexs (d'aquesta manera quan l'alçada sigui inferior a 1.45 retornarà 0, entre les alçades de 1.45 i 1.55 retornarà un nombre entre 0 i 1, i un cop passat 1.55 retornarà 1).
  
 
