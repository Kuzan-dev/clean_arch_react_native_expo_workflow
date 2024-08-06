# Proyecto de Arquitectura Limpia con Expo Go y React Native

Este proyecto utiliza React Native con Expo Go para crear una aplicación móvil utilizando principios de arquitectura limpia. La arquitectura limpia permite crear aplicaciones modulares, escalables y mantenibles al separar las responsabilidades de cada capa de la aplicación.

## Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Licencia](#licencia)

## Project description

The app aims to demonstrate how to implement clean architecture in a React Native project using Expo Go. It focuses on separating the concerns of business logic, application logic and user interface logic into different layers

## Project Structure

```plaintext
/Proyecto
|-- /src
|   |-- /domain       # Contiene entidades y casos de uso (use cases)
|   |   |-- entities  # Entidades de negocio
|   |   |-- usecases  # Casos de uso (lógica de negocio)
|   |
|   |-- /data         # Manejo de datos
|   |   |-- models    # Modelos de datos
|   |   |-- sources   # Fuentes de datos (API, almacenamiento local, etc.)
|   |   |-- repositories # Implementaciones de repositorios
|   |
|   |-- /presentation # Lógica de presentación
|   |   |-- components # Componentes de UI
|   |   |-- screens    # Pantallas de la aplicación
|   |   |-- viewmodels # Lógica de UI
|   |
|   |-- /core         # Funcionalidades compartidas y utilidades
|   |   |-- utils     # Utilidades generales
|   |   |-- styles    # Estilos globales
|
|-- App.js            # Punto de entrada de la aplicación
|-- package.json      # Configuración de NPM
|-- README.md         # Este archivo

```

 ## System requirements:

- Node.js (LTS).
- macOS, Windows (Powershell and WSL 2), and Linux are supported.

 ## Installation

Follow these steps to configure the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. **Installs the project dependencies:**
   
   ```bash
   npm install
4. **Start the project with Expo:**

   ```bash
   expo start
