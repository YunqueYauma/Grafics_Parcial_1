#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;
out vec2 vtexCoord;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform vec2 mousePosition;

uniform float mouseOverrideX = -1;
uniform vec2 viewport =vec2 (800,600);

void main()
{
    float posicio;
    if(mouseOverrideX<0)posicio = mousePosition.x;
    else posicio = mouseOverrideX;
    
    float alfa = posicio/viewport.x*2.-1.;
    vec3 normal_aux;
    vec3 vertex_aux;

    if(vertex.y>=1.45){
        mat4 r=mat4(vec4(cos(alfa),0,-sin(alfa),0),vec4(0,1,0,0),vec4(sin(alfa),0,cos(alfa),0), vec4(0,0,0,1));
        vec4 vertex2=r*vec4(vertex,1.0);
        vec4 normal2=r*vec4(normal,1.0);
        float t=smoothstep(1.45,1.55, vertex.y);
        vertex_aux=mix(vertex, vertex2.xyz,t);
        normal_aux=mix(normal, normal2.xyz,t);
    }
    else{
        normal_aux=normal;
        vertex_aux=vertex;
        }
    vec3 N = normalize(normalMatrix * normal_aux);
    frontColor = vec4(N.z);
    gl_Position = modelViewProjectionMatrix * vec4(vertex_aux, 1.0);
}
