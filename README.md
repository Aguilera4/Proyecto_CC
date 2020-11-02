
# Rooming

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


*Este repositorio contendrá el proyecto realizado en la asignatura Cloud Computing durante el curso 2020-2021.* 


## Arquitectura


Tras analizar el funcionamiento de nuestra aplicación, ***Rooming*** va a estar basada en una arquitectura de microservicios, de esta forma se podrá llevar a cabo las distintas funciones de nuestra aplicación en servicios diferentes. Con esto queremos conseguir que nuestra aplicación tenga servicios independientes unos con los otros para aportar una mayor versatilidad a la misma, pudiendo así modificar cualquier servicio sin afectar al resto. Los servicios se comunicarán a través de APIs. Alguno de esto servicios son la administración de una habitación y la gestión del chat de una habitación.

Para el desarrollo de esta aplicación, voy a utilizar una tecnología que no había empleado anteriormente pero que tengo un gran interés sobre su funcionamiento, ya que por la información que se puede recavar de Internet tiene un gran potencial para el desarrollo de aplicaciones. En concreto, voy a utilizar el framework o conjunto de subsistemas conocido como ***MERN Stack***, basado en el lenguaje de programación **JavaScript**. MERN Stack utiliza la librería ***ReactJS*** para la parte del ***front-end*** (aunque en este proyecto no se utiliza). Además, utiliza ***ExpressJS*** y ***NodeJS*** para la parte del servidor web (enrutamientos, peticones, respuestas, etc) y por último ***MongoDB*** para la parte backend de nuestra aplicación.


## Milestone

- [Estructuración del Proyecto](https://github.com/Aguilera4/Rooming/milestone/2)
    
    - [Subir información concreta de la arquitectura](https://github.com/Aguilera4/Rooming/issues/7)
    - [Crear las historias de usuario.](https://github.com/Aguilera4/Rooming/issues/9)
    - [Subir las primeras clases del proyecto.](https://github.com/Aguilera4/Rooming/issues/8)
    - [Crear fichero de identificación yml para las clases sin código.](https://github.com/Aguilera4/Rooming/issues/14)


- [Funcionalidades de los usuarios](https://github.com/Aguilera4/Rooming/milestone/5)
    - [[HU1] Acceso de un usuario a la aplicación](https://github.com/Aguilera4/Rooming/issues/10)
    - [[HU2] Solicitar una habitación](https://github.com/Aguilera4/Rooming/issues/12)
    - [[HU3] Borrarme de una habitación](https://github.com/Aguilera4/Rooming/issues/15)
    - [[HU4] Rechazar la solicitud de un usuario a mi post de habitación.](https://github.com/Aguilera4/Rooming/issues/30)
    - [[HU15] Eliminar cuenta de usuario.](https://github.com/Aguilera4/Rooming/issues/36)
    - [[HU10] Aceptar la solicitud de inscripción de un usuario.](https://github.com/Aguilera4/Rooming/issues/33)
    - [[HU17] Obtener información del usuario](https://github.com/Aguilera4/Rooming/issues/39)

- [Administración de las Habitaciones](https://github.com/Aguilera4/Rooming/milestone/6)
    - [[HU5] Solicitar la creación de un post de una vivienda o habitación.](https://github.com/Aguilera4/Rooming/issues/11)
    - [[HU6] Aceptar la creación del post.](https://github.com/Aguilera4/Rooming/issues/31)
    - [[HU7] Eliminar el post de una habitación o vivienda.](https://github.com/Aguilera4/Rooming/issues/16)
    - [[HU8] Solicitar la modificación de la información de una habitación.](https://github.com/Aguilera4/Rooming/issues/17)
    - [[HU9] Aceptar la solicitud de modificación de habitación.](https://github.com/Aguilera4/Rooming/issues/32)
    - [[HU16] Obtener información de la vivienda/habitación.](https://github.com/Aguilera4/Rooming/issues/37)


- [Desarrollo Chat de Habitación](https://github.com/Aguilera4/Rooming/milestone/7)
    - [[HU11] Añadir comentario en un post.](https://github.com/Aguilera4/Rooming/issues/13)
    - [[HU12] Comprobar comentario indebidos/ofensivos.](https://github.com/Aguilera4/Rooming/issues/21)

- [Puesta en producción y posicionamiento en la nube](https://github.com/Aguilera4/Rooming/milestone/4)
    - [Pensar la viabilidad para el despliege](https://github.com/Aguilera4/Rooming/issues/22)
    - [Desplegar la APP en la nube.](https://github.com/Aguilera4/Rooming/issues/18)


## Roadmap

En primer lugar se desarrollará las acciones básicas para la creación de un perfil del usuario.

- [[HU1] Acceso de un usuario a la aplicación](https://github.com/Aguilera4/Rooming/issues/10)
- [[HU15] Eliminar cuenta de usuario.](https://github.com/Aguilera4/Rooming/issues/36)  
- [[HU17] Obtener información del usuario](https://github.com/Aguilera4/Rooming/issues/39)

Seguidamente, se creará las funciones para crear un post, eliminar, modificar información relacionada a la parte de la administración de la habitación.

- [[HU5] Solicitar la creación de un post de una vivienda o habitación.](https://github.com/Aguilera4/Rooming/issues/11)
- [[HU6] Aceptar la creación del post.](https://github.com/Aguilera4/Rooming/issues/31)
- [[HU7] Eliminar el post de una habitación o vivienda.](https://github.com/Aguilera4/Rooming/issues/16)
- [[HU8] Solicitar la modificación de la información de una habitación.](https://github.com/Aguilera4/Rooming/issues/17)
- [[HU9] Aceptar la solicitud de modificación de habitación.](https://github.com/Aguilera4/Rooming/issues/32)
- [[HU16] Obtener información de la vivienda/habitación.](https://github.com/Aguilera4/Rooming/issues/37)

En tercer lugar, una vez desarrolladas las funciones sobre una habitación, añadiremos más funciones a los usuarios, como por ejemplo la solicitud de una habitación, rechazar la solicitud de un usuario a su post, etc.

 - [[HU2] Solicitar una habitación](https://github.com/Aguilera4/Rooming/issues/12)
- [[HU3] Borrarme de una habitación](https://github.com/Aguilera4/Rooming/issues/15)
- [[HU4] Rechazar la solicitud de un usuario a mi post de habitación.](https://github.com/Aguilera4/Rooming/issues/30)
- [[HU10] Aceptar la solicitud de inscripción de un usuario.](https://github.com/Aguilera4/Rooming/issues/33)


En cuarto lugar, introduciremos la comunicación entre los miembros de un post, intercambiando "comentarios" entre ellos.
- [[HU11] Añadir comentario en un post.](https://github.com/Aguilera4/Rooming/issues/13)
- [[HU12] Comprobar comentario indebidos/ofensivos.](https://github.com/Aguilera4/Rooming/issues/21)


## Clases Implementadas

Aqui se incluyen algunas [clases](https://github.com/Aguilera4/Rooming/tree/main/src) implementadas.

## Información adicional

Enlace a la [descripción del proyecto](https://github.com/Aguilera4/Rooming/blob/main/docs/descripcion_rooming.md).

Sobre [MERN Stack](https://www.mongodb.com/mern-stack).
Sobre [arquitectura basada en capas](https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/#:~:text=La%20arquitectura%20basada%20en%20capas,funcionalidad%20que%20est%C3%A1%20siendo%20desarrollada.)