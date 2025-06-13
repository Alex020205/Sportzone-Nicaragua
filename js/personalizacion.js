document.addEventListener("DOMContentLoaded", function () {
    const canvas = new fabric.Canvas("editorCanvas");
    
    // Cambiar color de la camiseta
    document.getElementById("colorBase").addEventListener("input", function (e) {
        canvas.setBackgroundColor(e.target.value, canvas.renderAll.bind(canvas));
    });

    // Añadir nombre y número
    document.getElementById("aplicarCambios").addEventListener("click", function () {
        const nombre = document.getElementById("nombreEspalda").value;
        const numero = document.getElementById("numeroEspalda").value;

        // Limpiar texto anterior
        canvas.getObjects().forEach(obj => {
            if (obj.type === "textbox") canvas.remove(obj);
        });

        // Añadir nombre (parte superior)
        if (nombre) {
            const textNombre = new fabric.Textbox(nombre.toUpperCase(), {
                left: 200,
                top: 100,
                fontFamily: "Arial",
                fontSize: 20,
                fill: "#000",
                textAlign: "center"
            });
            canvas.add(textNombre);
        }

        // Añadir número (centro grande)
        if (numero) {
            const textNumero = new fabric.Textbox(numero, {
                left: 200,
                top: 150,
                fontFamily: "Impact",
                fontSize: 80,
                fill: "#000",
                textAlign: "center"
            });
            canvas.add(textNumero);
        }
    });

    // Subir logo (pecho izquierdo)
    document.getElementById("uploadLogo").addEventListener("change", function (e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            fabric.Image.fromURL(event.target.result, function (img) {
                img.scaleToWidth(80); // Tamaño ajustable
                img.set({ left: 50, top: 50 }); // Posición en el pecho
                canvas.add(img);
            });
        };
        reader.readAsDataURL(file);
    });

    // Actualizar resumen
    document.getElementById("deporte").addEventListener("change", function () {
        document.getElementById("resumenDeporte").textContent = this.value.toUpperCase();
    });

    document.getElementById("talla").addEventListener("change", function () {
        document.getElementById("resumenTalla").textContent = this.value;
    });
});