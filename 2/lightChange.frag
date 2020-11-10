#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec3 P;
in vec3 N;
in vec2 fra;
in vec2 vtexCoord;

uniform sampler2D colorMap;


uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrixInverse;

vec4 lightDiffuse;
uniform vec4 lightSpecular;
uniform vec4 lightPosition; // totes en Eye space

vec4 matDiffuse;
uniform vec4 matSpecular;
uniform float matShininess;

uniform float time;

vec4 light(vec3 N, vec3 V, vec3 L)
{
	vec3 R = normalize( 2.0*dot(N,L)*N-L );
	float NdotL = max( 0.0, dot( N,L ) );
	float RdotV = max( 0.0, dot( R,V ) );
	float Idiff = NdotL;
	float Ispec = 0;
	if (NdotL>=0) Ispec=pow( RdotV, matShininess );
	return	matDiffuse * lightDiffuse * Idiff+	matSpecular * lightSpecular * Ispec;
}

void main()
{
	
	//Bàsicament separem els instants en que pugem dels que baixem
    if(mod(time,2.)<=1.)lightDiffuse = vec4(mix(0.0,1.0,fract(time)));
    else lightDiffuse = vec4(mix(0.0,1.0,1.-fract(time)));
	
    //Recordar que les variables que hem passat ja estan en eye space
    vec3 norm = normalize(N);//S'ha de normalitzar ara pq potser al interpolar ha canviat
    vec3 L = normalize(vec3(lightPosition-vec4 (P, 1.0)));
    vec3 V = normalize(-P);
    
    int frame = int(mod(time/2,12));
	int x= int(mod(frame/3,4));
	int y= 2-int(mod(frame,3));
	matDiffuse = texture (colorMap, vec2(fra.s * 1./4.,fra.t*1./3.) + vec2(1./4.*x,1./3.*y));
    
    
    
    fragColor =  light(norm,V,L) ;
}
