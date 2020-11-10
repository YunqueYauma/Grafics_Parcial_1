/* 
 * Traçat d'un raig a través de l'esfera unitat
 * Entrada: V, un punt sobre l'esfera unitat centrada a l'origen
 * Sortida: P, el punt de sortida d'un raig incident a V provenint de la càmera
 *          dir, vector unitari corresponent a la direcció de sortida del raig
 * Globals: modelViewMatrixInverse, per extreure'n la posició de la càmera en object space
 *          eta, raó dels coeficients de refracció.
 */
void trace(vec3 V, out vec3 P, out vec3 dir) {
    vec3 w = normalize(V-modelViewMatrixInverse[3].xyz);
    vec3 ref = refract(w, normalize(V), 1/eta);
    P = V-2*dot(V,ref)*ref;
    dir = refract(ref, -normalize(P),eta);
}
