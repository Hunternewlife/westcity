import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';


  export const slider =
  trigger('routeAnimations', [
    transition('home => *', slideTo('right') ),
    transition('peliculas => home', slideTo('left') ),
    transition('peliculas => home', slideTo('left') ),
    transition('confiteria => home', slideTo('left') ),
    transition('boleteria => home', slideTo('left') ),
    transition('membresia => home', slideTo('left') ),
    transition('compras => home', slideTo('left') ),
    transition('admin => home', slideTo('left') ),
    transition('boleteria-compras => home', slideTo('left') ),
    transition('perfil => home', slideTo('left') ),
    transition('registro => home', slideTo('left') ),
    transition('login => home', slideTo('left') ),
    transition('cartelera => peliculas', slideTo('right') ),
    transition('peliculas => confiteria', slideTo('right') ),
    transition('peliculas => boleteria', slideTo('right') ),
    transition('peliculas => membresia', slideTo('right') ),
    transition('peliculas => login', slideTo('right') ),
    transition('peliculas => perfil', slideTo('right') ),
    transition('confiteria => boleteria', slideTo('right') ),
    transition('confiteria => membresia', slideTo('right') ),
    transition('confiteria => login', slideTo('right') ),
    transition('confiteria => perfil', slideTo('right') ),
    transition('confiteria => peliculas', slideTo('left') ),
    transition('login => confiteria', slideTo('left') ),
    transition('membresia => confiteria', slideTo('left') ),
    transition('boleteria => confiteria', slideTo('left') ),
    transition('boleteria => peliculas', slideTo('left') ),
    transition('boleteria => membresia', slideTo('right') ),
    transition('boleteria => login', slideTo('right') ),
    transition('boleteria => perfil', slideTo('right') ),
    transition('membresia => boleteria', slideTo('left') ),
    transition('membresia => confiteria', slideTo('left') ),
    transition('membresia => peliculas', slideTo('left') ),
    transition('membresia => login', slideTo('right') ),
    transition('membresia => perfil', slideTo('right') ),
    transition('registro => boleteria', slideTo('left') ),
    transition('registro => confiteria', slideTo('left') ),
    transition('registro => peliculas', slideTo('left') ),
    transition('registro => membresia', slideTo('left') ),
    transition('registro => login', slideTo('right') ),
    transition('registro => perfil', slideTo('right') ),
    transition('login => *', slideTo('left') ),
    transition('perfil => *', slideTo('left') ),
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('1500ms ease', style({ [direction]: '100%', opacity: 0}))
      ], optional),
      query(':enter', [
        animate('1500ms ease', style({ [direction]: '0%'}))
      ])
    ]),
  ];
}