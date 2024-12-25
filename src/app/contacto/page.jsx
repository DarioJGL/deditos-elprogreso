'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '@/ui/Contacto.module.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    celular: '',
    producto: '',
    descripcion: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        'service_11a70y2',
        'template_oxwmogb',
        formData,
        'YbVv5X9VYj0FsTlzU'
      );
      console.log('Éxito:', response);
      alert('Formulario enviado con éxito');
      setFormData({
        nombre: '',
        correo: '',
        celular: '',
        producto: '',
        descripcion: '',
      });
    } catch (error) {
      console.log('Error detallado:', error); // Agregamos este log
      console.log('Datos del formulario:', formData); // Y este para ver qué datos se están enviando
      alert('Hubo un error al enviar el formulario. Intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <label className={styles.label}>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={styles.input}
          required
          placeholder="Ingresa tu nombre completo"
          disabled={isSubmitting}
        />

        <label className={styles.label}>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className={styles.input}
          required
          placeholder="ejemplo@correo.com"
          disabled={isSubmitting}
        />

        <label className={styles.label}>Número de Celular:</label>
        <input
          type="tel"
          name="celular"
          value={formData.celular}
          onChange={handleChange}
          className={styles.input}
          required
          placeholder="123 456 7890"
          disabled={isSubmitting}
        />

        <label className={styles.label}>Producto de Interés:</label>
        <select
          name="producto"
          value={formData.producto}
          onChange={handleChange}
          className={styles.select}
          required
          disabled={isSubmitting}
        >
          <option value="">Selecciona un producto</option>
          <option value="Deditos de Queso">Deditos de Queso</option>
          <option value="Deditos de Bocadillo">Deditos de Bocadillo</option>
          <option value="Empanaditas de Pollo">Empanaditas de Pollo</option>
          <option value="Empanaditas de Carne">Empanaditas de Carne</option>
          <option value="Medallones de Salchichas">
            Medallones de Salchichas
          </option>
          <option value="Deditos de Queso Grandes">
            Deditos de Queso Grandes
          </option>
        </select>

        <label className={styles.label}>Descripción:</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className={styles.textarea}
          rows="4"
          required
          placeholder="Describe tu pedido o consulta aquí..."
          disabled={isSubmitting}
        ></textarea>

        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </main>
  );
}
