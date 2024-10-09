import {defineField, defineType} from "sanity";

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
      {
        name: 'title',
        title: 'Título',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: Rule => Rule.custom((field, context) => {
          if (!field) return true;
          const {width, height} = field.asset.metadata.dimensions;
          if (width !== 1920 || height !== 1080) {
            return 'La imagen debe tener dimensiones de 1920x1080 píxeles';
          }
          return true;
        })
      },
      {
        name: 'text',
        title: 'Texto',
        type: 'text',
      },
      {
        name: 'textColor',
        title: 'Color del texto',
        type: 'color',
      },
      {
        name: 'textPosition',
        title: 'Posición del texto',
        type: 'string',
        options: {
          list: [
            {title: 'Arriba izquierda', value: 'topLeft'},
            {title: 'Arriba derecha', value: 'topRight'},
            {title: 'Centro', value: 'center'},
            {title: 'Abajo izquierda', value: 'bottomLeft'},
            {title: 'Abajo derecha', value: 'bottomRight'},
          ],
        },
      },
      {
        name: 'font',
        title: 'Fuente',
        type: 'string',
        options: {
          list: [
            {title: 'Gotham', value: 'cpc.gotham'},
            {title: 'Gotham Condensed', value: 'cpc.gothamCondensed'},
            {title: 'Space Mono', value: 'cpc.spaceMono'},
          ],
        },
      },
      {
        name: 'section',
        title: 'Sección',
        type: 'string',
        options: {
          list: [
            {title: 'General', value: 'general'},
            {title: 'Convocatoria SESEA', value: 'convocatoriaSESEA'},
            {title: 'Vacuna Corrupción', value: 'vacunaCorrupcion'},
            {title: 'Yo Elijo Regidor', value: 'yoElijoRegidor'},
            {title: 'Anual Anticorrupción', value: 'anualAnticorrupcion'},
          ],
        },
        validation: Rule => Rule.required(),
      },
    ],
  }