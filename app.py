from flask import Flask, request, render_template, jsonify
import sympy as sp

app = Flask(__name__)

# Función para encontrar el punto de corte usando el método de Newton-Raphson
def newton_raphson(func_str, x0, tol=1e-10, max_iter=100):
    x = sp.symbols('x')
    func = sp.sympify(func_str)
    func_prime = sp.diff(func, x)
    
    xn = x0
    for n in range(0, max_iter):
        fxn = func.evalf(subs={x: xn})
        if abs(fxn) < tol:
            return float(xn), n
        fpxn = func_prime.evalf(subs={x: xn})
        if fpxn == 0:
            return None, n
        xn = xn - fxn/fpxn
    return None, max_iter

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/find_root', methods=['POST'])
def find_root():
    data = request.json
    func_str = data.get('function')
    x0 = float(data.get('x0'))
    root, iterations = newton_raphson(func_str, x0)
    return jsonify({'root': root, 'iterations': iterations})

if __name__ == '__main__':
    app.run(debug=True)
