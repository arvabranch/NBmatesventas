/*
 * CONFIGURACIÓN — cambia estos datos antes de publicar.
 *
 * Números de WhatsApp en formato internacional, solo dígitos: 57 + celular.
 * Ejemplo: '573001234567'. Si se deja vacío, WhatsApp abre el mensaje
 * y el cliente escoge a quién enviarlo.
 */
window.CONFIG = {
  brand: 'NBmates',

  // Número que recibe los pedidos por unidad.
  whatsapp: '573150485151',

  // Número para compras al por mayor (aún no definido).
  whatsappWholesale: '573150485151',

  // Puntos donde el cliente puede pasar a recoger su pedido.
  // Ejemplo: ['Centro comercial Chipichape', 'Parque del Perro']. Vacío = se coordina por chat.
  pickupPoints: [],

  // Margen sobre el precio de Vape House (0.17 = +17 %) y redondeo hacia arriba.
  markup: 0.17,
  roundTo: 1000,

  // Máximo de unidades por pedido desde la página.
  maxQty: 10,
};
