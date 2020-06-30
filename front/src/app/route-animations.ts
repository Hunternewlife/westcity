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
    transition('peliculas => cartelera', slideTo('left') ),
    transition('peliculas => confiteria', slideTo('right') ),
    transition('peliculas => boleteria', slideTo('right') ),
    transition('peliculas => membresia', slideTo('right') ),
    transition('peliculas => login', slideTo('right') ),
    transition('isLeft => peliculas', slideTo('left') )
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
      style({ [direction]: '-100%', opacity: 0})
    ]),
    group([
      query(':leave', [
        animate('2000ms ease', style({ [direction]: '100%', opacity: 0}))
      ], optional),
      query(':enter', [
        animate('2000ms ease', style({ [direction]: '0%', opacity: 1}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}