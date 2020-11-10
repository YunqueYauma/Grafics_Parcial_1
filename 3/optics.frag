#version 330 core

in vec4 frontColor;
out vec4 fragColor;
in vec2 vtexCoord;

in vec3 P;
in float z;

uniform sampler2D tex;
const float eta = 1.7;

//--Necessaris per el trace()
uniform mat4 modelViewMatrixInverse;

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

void main()
{
    if(P.z<=-1.5)fragColor = texture(tex, vtexCoord);
    else {
    	//Toca començar a fer trigonometria per a veure si el raig apunta cap al quadrat o klk
    	vec3 S,dir;// punt de Sortida, direccio cap on apunta el raig de llum
    	trace(P,S,dir);

    	float lambda = (z-S.z)/dir.z;

    	vec3 posicio_z = S+lambda*dir; //Trobem la posicio sobre la z on esta el quadrat
    	//Comprovem que les x i les y's estiguin dins del quadrat
    	if((posicio_z.x+2)<=4 && (posicio_z.y+2<=4 )&& (posicio_z.x+2)>=0 && (posicio_z.y+2>=0 )){
    		float s=(posicio_z.x+2.)/4.;
    		float t=(posicio_z.y+2.)/4.;
    		fragColor= texture(tex, vec2(s,t));
    		//fragColor=vec4(0.0);
    	}
    	else fragColor=vec4(0.97);
    }
}
