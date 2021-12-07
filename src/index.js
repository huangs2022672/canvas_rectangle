// const ee = require('@google/earthengine'); // google earth engine api

import Rectangle from "./scripts/rectangle";

document.addEventListener('DOMContentLoaded', () => {

  const canvasEl = document.getElementById('canvas');
  // canvasEl.width = document.body.clientWidth;
  // canvasEl.height = document.body.clientHeight;
  canvasEl.width = 600;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext('2d');

  // debugger

  // ctx.fillStyle = 'rgb(200, 0, 0)';
  // ctx.fillRect(10, 10, 50, 50);

  // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  // ctx.fillRect(30, 30, 50, 50);

  const rect = new Rectangle(ctx, 50, 50);

  document.addEventListener("click", rect.changeColor);













});
