  // circular-progress.js

  document.addEventListener("DOMContentLoaded", () => {
      // Seleccionar todos los elementos con la clase .circular-progress
      const progressBars = document.querySelectorAll(".circular-progress");
      
      progressBars.forEach((bar) => {
        const value = parseInt(bar.getAttribute("data-value"), 10); // Obtener el valor dinámico
        const maxValue = parseInt(bar.getAttribute("data-max"), 10) || 100; // Máximo valor, default 100
    
        const percentage = Math.min((value / maxValue) * 100, 100); // Calcular porcentaje
        const progressCircle = bar.querySelector(".circle");
    
        // Aplicar estilo dinámico al círculo
        // Ajustar el gradiente para alineación perfecta
        progressCircle.style.background = `conic-gradient(
          #007bff 0deg, 
          #007bff ${percentage * 3.6}deg, 
          rgba(0, 123, 255, 0.2) ${percentage * 3.6}deg 360deg
        )`;
    
        // Actualizar el texto dinámico
        const valueText = bar.querySelector(".value");
        valueText.textContent = value; // Mostrar el valor
      });
    });
    