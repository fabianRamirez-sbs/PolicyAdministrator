# Orquestador

Este proyecto es un monorepo Angular que contiene varias aplicaciones, incluyendo `global` y `poliza`.

## Requisitos previos

- Node.js y npm instalados v23.0.0
- Angular CLI instalado globalmente (`npm install -g @angular/cli`)

## Instalación de dependencias

Desde la raíz del monorepo:

```bash
cd orquestador
npm install
```

## Ejecución en local

Puedes ejecutar cualquiera de las aplicaciones del monorepo. Por ejemplo:

### Ejecutar la aplicación `global`

```bash
ng serve global
```

### Ejecutar la aplicación `poliza`

```bash
ng serve poliza
```

Por defecto, la aplicación se ejecutará en `http://localhost:4200/`. Puedes cambiar el puerto con el parámetro `--port`.

## Compilación para despliegue (build de producción)

Para compilar una aplicación para producción:

### Compilar `global` para producción

```bash
ng build global --configuration production
```

### Compilar `poliza` para producción

```bash
ng build poliza --configuration production
```

Los archivos generados estarán en `orquestador/dist/global` o `orquestador/dist/poliza` respectivamente.

## Recursos adicionales

Para más información sobre Angular CLI y monorepositorios, consulta la [documentación oficial de Angular](https://angular.dev/tools/cli).

