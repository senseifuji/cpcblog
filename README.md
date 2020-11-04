# CPC Chihuahua Website

Este es el proyecto del sitio web del CPC Chihuahua => https://comiteanticorrupcion.mx/

El proyecto utiliza generación estatica con Next.Js => https://nextjs.org/

Para correr el proyecto necesitas instalar Node y yarn.
https://nodejs.org/en/
https://yarnpkg.com/

Luego corre los siguientes comandos en tu terminal.

Instala dependencias con
``` yarn  ```

Corre el proyecto utilizando:
``` yarn dev``` 


Si quieres conectar el manejador de sanity.io para administrar el contenido
tendrás que crear un archivo de variables de ambiente llamado .env.local
Agrega tu projectid y dataset de sanity.io

```
SANITY_DATASET_NAME=tudatasetname
SANITY_PROJECT_ID=tuprojectid

```


El repositorio del manejador de contenido lo puedes clonar desde => https://github.com/cpcwebchih/blogsanity

