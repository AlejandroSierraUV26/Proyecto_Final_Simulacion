# Proyecto: Buscador de Raíces con el Método de Newton-Raphson

Este proyecto implementa una aplicación web para encontrar raíces de funciones matemáticas utilizando el método de Newton-Raphson. La aplicación está construida con Flask en el backend y utiliza JavaScript con Chart.js para la visualización gráfica en el frontend.

## Participantes
- Alejandro Sierra
- Juan Pablo Castaño
## Universidad del Valle
**Materia:** SIMULACIÓN Y COMPUTACIÓN NUMÉRICA

## Descripción del Proyecto
El objetivo de este proyecto es proporcionar una herramienta interactiva para encontrar raíces de funciones matemáticas utilizando el método iterativo de Newton-Raphson. Los usuarios pueden ingresar una función y un valor inicial, y la aplicación calculará la raíz más cercana a ese valor inicial.

## Funcionalidades
- **Ingreso de Función:** Los usuarios pueden ingresar la función matemática de la cual desean encontrar la raíz.
- **Valor Inicial:** Los usuarios proporcionan un valor inicial para comenzar las iteraciones del método de Newton-Raphson.
- **Cálculo de la Raíz:** La aplicación calcula la raíz utilizando el método de Newton-Raphson.
- **Visualización Gráfica:** La función y la raíz encontrada se visualizan en un gráfico interactivo.

## Instrucciones para Usar el Proyecto

### Requisitos Previos
- Python 3.x
- Flask
- SymPy
- Bootstrap (para estilos)
- Chart.js (para gráficos)

### Instalación
Clonar el repositorio:

```sh
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

Instalar dependencias:

```sh
pip install flask sympy
```

### Ejecución
Ejecutar la aplicación Flask:

```sh
python app.py
```

Abrir el navegador web:
Navegue a [http://127.0.0.1:5000/](http://127.0.0.1:5000/) para acceder a la aplicación.

## Estructura del Proyecto
- `app.py`: Archivo principal que contiene la lógica del backend.
- `templates/index.html`: Página principal de la aplicación.
- `static/styles.css`: Archivo de estilos CSS.
- `static/script.js`: Archivo JavaScript con la lógica del frontend y visualización gráfica.

## Uso de la Aplicación

### Ingresar la Función y el Valor Inicial:
En la página principal, ingrese la función en el campo "Ingrese la función" y el valor inicial en el campo "Valor Inicial (x0)".

### Encontrar Raíz:
Haga clic en "Encontrar Raiz" para iniciar el cálculo. La raíz y el número de iteraciones se mostrarán en la sección de resultados.

### Visualización Gráfica:
La función y la raíz se graficarán en el lienzo proporcionado.

## Ejemplo de Uso
Supongamos que queremos encontrar la raíz de la función x^2 - 4 con un valor inicial de x0=2:

**Ingresar la Función:**
```sh
x^2 - 4
```

**Ingresar el Valor Inicial:**
```sh
2
```

**Resultados:**
La aplicación calculará la raíz (aproximadamente 2) y mostrará el número de iteraciones necesarias para converger a la solución.
