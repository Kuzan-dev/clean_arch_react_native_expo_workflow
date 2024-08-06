# Clean Architecture Project with Expo Go and React Native

This project uses React Native with Expo Go to create a mobile app using clean architecture principles. Clean architecture allows for the creation of modular, scalable and maintainable applications by separating the responsibilities of each layer of the application.

## Table of Contents

- [Project Description](#Project Description)
- [Project Structure](#Project Structure)
- [Prerequisites](#Prerequisites)
- [Installation](#Installation)


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
