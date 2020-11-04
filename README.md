
# Rooming

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


*Este repositorio contendrá el proyecto realizado en la asignatura Cloud Computing durante el curso 2020-2021.* 


## Arquitectura


La aplicación ***Rooming*** va a estar basada en una arquitectura de microservicios, de esta forma se podrá llevar a cabo las distintas funciones de nuestra aplicación en servicios diferentes. Con esto queremos conseguir que nuestra aplicación tenga servicios independientes unos con los otros para aportar una mayor versatilidad a la misma, pudiendo así modificar cualquier servicio sin afectar al resto.

La decisión de utilizar esta arquitectura se ha tomado viendo la estructura que tiene nuestra aplicación, donde por una parte tenemos toda la gestión referente a una habitación o vivienda (incluyendo, creación solicitud, modificación, etc), por otra parte tenemos la funcionalidad de comunicación (chat) entre los integrantes de una habitación y por último el sistema de valoración para un usuario. Estos tres servicios compondrían nuestra arquitectura.

Para el desarrollo de esta aplicación se ha decidio utilizar el lenguaje de programación JavaScript, más concretamente trabajando sobre el entorno de ejecución **NodeJS** ya que aparte de poseer cierta habilidad sobre el mismo, **Nodejs** nos permite desarrollar aplicaciones con una gran escabilidad, así como desarrollar en un corto periodo de tiempo. 


## Milestone

- [Estructuración del Proyecto](https://github.com/Aguilera4/Rooming/milestone/2)
    
    - [Subir información concreta de la arquitectura](https://github.com/Aguilera4/Rooming/issues/7)
    - [Crear las historias de usuario.](https://github.com/Aguilera4/Rooming/issues/9)
    - [Subir las primeras clases del proyecto.](https://github.com/Aguilera4/Rooming/issues/8)
    - [Crear fichero de identificación yml para las clases sin código.](https://github.com/Aguilera4/Rooming/issues/14)


- [Funcionalidades de los usuarios](https://github.com/Aguilera4/Rooming/milestone/5)
    - [[HU1] Creación de un perfil de usuario.](https://github.com/Aguilera4/Rooming/issues/10)
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


- [Sistema de valoración de usuario](https://github.com/Aguilera4/Rooming/milestone/9)
    - [[HU18] Crear valoración para un usuario.](https://github.com/Aguilera4/Rooming/issues/43)
    - [[HU19] Obtener valoración del usuario.](https://github.com/Aguilera4/Rooming/issues/45)
    - [[HU20] Eliminar valoración de un usuario.](https://github.com/Aguilera4/Rooming/issues/46)

- [Puesta en producción y posicionamiento en la nube](https://github.com/Aguilera4/Rooming/milestone/4)
    - [Pensar la viabilidad para el despliege](https://github.com/Aguilera4/Rooming/issues/22)
    - [Desplegar la APP en la nube.](https://github.com/Aguilera4/Rooming/issues/18)


## Roadmap

A continuación, se va describir el plan de desarrollo que se va a seguir a lo largo de la aplicación. Este plan se descompondrá en diferentes partes donde en cada una se desarrollarán las funcionalidades de la aplicación.

En primer lugar, se comenzará dotando al usuario de acciones como crearse un perfil, eliminarlo o borrarlo.

- [[HU1] Creación de un perfil de usuario.](https://github.com/Aguilera4/Rooming/issues/10)
- [[HU15] Eliminar cuenta de usuario.](https://github.com/Aguilera4/Rooming/issues/36)  
- [[HU17] Obtener información del usuario.](https://github.com/Aguilera4/Rooming/issues/39)

En segundo lugar, se desarrollará el servicio referente a la administración de una habitación o vivienda. Donde el usuario podrá crear un post, solicitarlo, borrarlo en caso de que sea el propietario, etc. Esta parte se basa en la estructuración del groso de nuestra aplicación ya que el objetivo es que los usuarios compartan con los demás su post.  


- [[HU5] Solicitar la creación de un post de una vivienda o habitación.](https://github.com/Aguilera4/Rooming/issues/11)
- [[HU6] Aceptar la creación del post.](https://github.com/Aguilera4/Rooming/issues/31)
- [[HU7] Eliminar el post de una habitación o vivienda.](https://github.com/Aguilera4/Rooming/issues/16)
- [[HU8] Solicitar la modificación de la información de una habitación.](https://github.com/Aguilera4/Rooming/issues/17)
- [[HU9] Aceptar la solicitud de modificación de habitación.](https://github.com/Aguilera4/Rooming/issues/32)
- [[HU16] Obtener información de la vivienda/habitación.](https://github.com/Aguilera4/Rooming/issues/37)

En tercer lugar, una vez desarrolladas las funciones sobre una habitación, añadiremos más acciones a los usuarios que complementarán a la parte anterior, como por ejemplo la solicitud de una habitación, rechazar la solicitud de un usuario a su post, etc.

- [[HU2] Solicitar una habitación](https://github.com/Aguilera4/Rooming/issues/12)
- [[HU3] Borrarme de una habitación](https://github.com/Aguilera4/Rooming/issues/15)
- [[HU4] Rechazar la solicitud de un usuario a mi post de habitación.](https://github.com/Aguilera4/Rooming/issues/30)
- [[HU10] Aceptar la solicitud de inscripción de un usuario.](https://github.com/Aguilera4/Rooming/issues/33)


En cuarto lugar, introduciremos la comunicación entre los miembros de un post, intercambiando "comentarios" entre ellos. Esta parte se centrará en al comunicación entre los integrantes del post.

- [[HU11] Añadir comentario en un post.](https://github.com/Aguilera4/Rooming/issues/13)
- [[HU12] Comprobar comentario indebidos/ofensivos.](https://github.com/Aguilera4/Rooming/issues/21)

Por último, se desarrollará un servicio de valoración del usuario, donde se podrá calificar a un usuario según la experiencia que se haya tenido en su convivencia o en verificar que la información que aporta en el post es real.

- [[HU18] Crear valoración para un usuario.](https://github.com/Aguilera4/Rooming/milestone/9)
- [[HU19] Obtener valoración del usuario.](https://github.com/Aguilera4/Rooming/issues/45)
- [[HU20] Eliminar valoración de un usuario.](https://github.com/Aguilera4/Rooming/issues/46)


## Clases Implementadas

Aqui se incluyen algunas [clases](https://github.com/Aguilera4/Rooming/tree/main/src) implementadas.

## Información adicional

Enlace a la [descripción del proyecto](https://github.com/Aguilera4/Rooming/blob/main/docs/descripcion_rooming.md).

Sobre [MERN Stack](https://www.mongodb.com/mern-stack).
Sobre [arquitectura basada en capas](https://geeks.ms/jkpelaez/2009/05/30/arquitectura-basada-en-capas/#:~:text=La%20arquitectura%20basada%20en%20capas,funcionalidad%20que%20est%C3%A1%20siendo%20desarrollada.)