#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

out vec3 P;
out float z;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform float time;

void main()
{
	P=vertex;//Nomes el passem per a diferenciar entre el quadrat i la esfera
	z=-1.5-pow(sin(time),2); 
	mat4 t1=mat4(vec4(1,0,0,0),vec4(0,1,0,0), vec4(0,0,1,0), vec4(0,0,z+1.5,1));
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1.0) * N.z;
    vtexCoord = texCoord;
    if(vertex.z<=-1.5)gl_Position = modelViewProjectionMatrix * t1*vec4(vertex, 1.0);
    else gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
