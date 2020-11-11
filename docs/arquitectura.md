## Arquitectura 

La aplicación ***Rooming*** se basará en una arquitectura de microservicios, de esta forma se podrá llevar a cabo las distintas funciones de nuestra aplicación de forma independiente,aportando una mayor versatilidad a la misma, pudiendo así modificar cualquier servicio sin afectar al resto.

La decisión de utilizar esta arquitectura se ha tomado viendo la estructura que tiene nuestra aplicación, donde por una parte tenemos toda la gestión referente a una habitación o vivienda (incluyendo, creación solicitud, modificación, etc), por otra parte tenemos la funcionalidad de comunicación (chat) entre los integrantes de una habitación y por último el sistema de valoración para un usuario. Estos tres servicios compondrían nuestra arquitectura.

Para el desarrollo de esta aplicación se ha decidio utilizar el lenguaje de programación JavaScript, más concretamente trabajando sobre **NodeJS** ya que aparte de poseer cierta habilidad sobre el mismo, **NodeJS** nos permite desarrollar aplicaciones con una gran escabilidad, así como desarrollar en un corto periodo de tiempo.